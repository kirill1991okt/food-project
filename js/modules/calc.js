function calc() {
  const result = document.querySelector('.calculating__result span');
  let sex, height, weight, age, ratio;

  if (localStorage.getItem('sex')) {
    sex = localStorage.getItem('sex');
  } else {
    sex = 'female';
    localStorage.setItem('sex', 'female');
  }

  if (localStorage.getItem('ratio')) {
    ratio = localStorage.getItem('ratio');
  } else {
    ratio = 1.375;
    localStorage.setItem('ratio', 1.375);
  }

  calcCalories();

  getStaticInformation('#gender', 'calculating__choose-item_active');
  getStaticInformation(
    '.calculating__choose_big',
    'calculating__choose-item_active'
  );

  getLocalInformation('#gender div', 'calculating__choose-item_active');
  getLocalInformation(
    '.calculating__choose_big div',
    'calculating__choose-item_active'
  );

  getDynamicInformation('#height');
  getDynamicInformation('#weight');
  getDynamicInformation('#age');

  function getLocalInformation(selector, activeClass) {
    const elements = document.querySelectorAll(selector);

    elements.forEach((elem) => {
      if (elem.getAttribute('id') === localStorage.getItem('sex')) {
        elements.forEach((el) => {
          el.classList.remove(activeClass);
        });
        elem.classList.add(activeClass);
      }

      if (elem.getAttribute('data-ratio') === localStorage.getItem('ratio')) {
        elements.forEach((el) => {
          el.classList.remove(activeClass);
        });
        elem.classList.add(activeClass);
      }
    });
  }

  function calcCalories() {
    if (!sex || !height || !weight || !age || !ratio) {
      result.textContent = '0';
      return;
    }

    if (sex === 'female') {
      result.textContent = Math.round(
        (447.6 + 9.2 * weight + 3.1 * height - 4.3 * age) * ratio
      );
    } else {
      result.textContent = Math.round(
        (88.36 + 13.4 * weight + 4.8 * height - 5.7 * age) * ratio
      );
    }
  }

  function getStaticInformation(parentElement, activeClass) {
    const elements = document.querySelectorAll(`${parentElement} div`);

    elements.forEach((elem) => {
      elem.addEventListener('click', (e) => {
        if (e.target.getAttribute('data-ratio')) {
          ratio = +e.target.getAttribute('data-ratio');
          localStorage.setItem('ratio', +e.target.getAttribute('data-ratio'));
        } else {
          sex = e.target.getAttribute('id');
          localStorage.setItem('sex', e.target.getAttribute('id'));
        }

        elements.forEach((div) => {
          div.classList.remove(activeClass);
        });
        e.target.classList.add(activeClass);

        calcCalories();
      });
    });
  }

  function getDynamicInformation(selector) {
    const input = document.querySelector(selector);

    input.addEventListener('input', (e) => {
      if (input.value.match(/\D/g)) {
        input.style.border = '2px solid red';
      } else {
        input.style.border = 'none';
      }

      switch (e.target.getAttribute('id')) {
        case 'height':
          height = +input.value;
          break;
        case 'weight':
          weight = +input.value;
          break;
        case 'age':
          age = +input.value;
          break;
      }

      calcCalories();
    });
  }
}

//  Синтаксис CommonJS
// module.exports = calc;

// Модули ES6
export default calc;
