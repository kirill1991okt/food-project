import { getResource } from '../services/services';

function cards() {
  class MenuCards {
    constructor(src, alt, title, descr, price, parenElement, ...classes) {
      this.src = src;
      this.alt = alt;
      this.title = title;
      this.descr = descr;
      this.price = price;
      this.parentElement = document.querySelector(parenElement);
      this.classes = classes;
      this.transfer = 2.6;
    }

    changeToBYN() {
      return this.price * this.transfer;
    }

    render() {
      const div = document.createElement('div');

      if (this.classes.length === 0) {
        this.classes = 'menu__item';
        div.classList.add(this.classes);
      } else {
        this.classes.forEach((classNames) => div.classList.add(classNames));
      }
      div.innerHTML = ` 
          <img src=${this.src} alt=${this.alt} />
          <h3 class="menu__item-subtitle">${this.title}</h3>
          <div class="menu__item-descr">
            ${this.descr}
          </div>
          <div class="menu__item-divider"></div>
          <div class="menu__item-price">
            <div class="menu__item-cost">Цена:</div>
            <div class="menu__item-total"><span>${this.changeToBYN().toFixed(
              2
            )}</span> руб/день</div>
          </div>
      `;
      this.parentElement.append(div);
    }
  }

  getResource('http://localhost:3000/menu').then((data) => {
    data.forEach(({ img, altimg, title, descr, price }) => {
      new MenuCards(
        img,
        altimg,
        title,
        descr,
        price,
        '.menu .container'
      ).render();
    });
  });

  // Получение данных с помощью библиотеки axios

  // axios.get('http://localhost:3000/menu').then((response) => {
  //   response.data.forEach(({ img, altimg, title, descr, price }) => {
  //     new MenuCards(
  //       img,
  //       altimg,
  //       title,
  //       descr,
  //       price,
  //       '.menu .container'
  //     ).render();
  //   });
  // });
}

// Синсаксис CommonJS
// module.exports = cards;

export default cards;
