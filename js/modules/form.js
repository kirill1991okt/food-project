import { openModal, closeModalWindow } from './modal';
import { postData } from '../services/services';

function form(formSelector, modalTimerId) {
  const forms = document.querySelectorAll(formSelector);

  const responseStatus = {
    success: 'Спасибо, мы скоро с вами свяжемся',
    loading: 'img/spiner/spinner.svg',
    failure: 'Что-то пошло не так...',
  };

  forms.forEach((form) => {
    bindPostData(form);
  });

  function bindPostData(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let statusMessage = document.createElement('img');
      statusMessage.src = responseStatus.loading;
      statusMessage.style.cssText = `
                display: block;
                margin: 0 auto;
            `;
      form.insertAdjacentElement('afterend', statusMessage);

      const formData = new FormData(form);

      // ПЕРВЫЙ СПОСОБ ПРИОБРАЗОВАНИЯ FormData В object

      // const obj = {};
      // formData.forEach((value, key) => {
      //   obj[key] = value;
      // });

      // ВТОРОЙ СПОСОБ ПРИОБРАЗОВАНИЯ FormData В object

      const json = JSON.stringify(Object.fromEntries(formData.entries()));

      postData('http://localhost:3000/requests', json)
        .then((data) => {
          console.log(data);
          showThanksModal(responseStatus.success);
        })
        .catch(() => {
          showThanksModal(responseStatus.failure);
        })
        .finally(() => {
          statusMessage.remove();
          form.reset();
        });

      // ПРИМЕР ЗАПРОСА ЧЕРЕЗ XMLHttpRequest

      // const xhr = new XMLHttpRequest();
      // xhr.open('POST', 'server.php');
      // xhr.setRequestHeader('Content-type', 'application/json');
      // xhr.send(JSON.stringify(obj));

      // xhr.addEventListener('load', () => {
      //   if (xhr.status === 200) {
      //     console.log(xhr.response);
      //     showThanksModal(responseStatus.success);
      //     statusMessage.remove();
      //     form.reset();
      //   } else {
      //     showThanksModal(responseStatus.failure);
      //     form.reset();
      //     statusMessage.remove();
      //   }
      // });
    });
  }

  function showThanksModal(message) {
    const prevModalDialog = document.querySelector('.modal__dialog');

    prevModalDialog.classList.add('hide');
    openModal('.modal', modalTimerId);

    const messagesModalDialog = document.createElement('div');
    messagesModalDialog.classList.add('modal__dialog');
    messagesModalDialog.innerHTML = `
    <div class = "modal__content">
    <div data-close class="modal__close">×</div>
    <div class="modal__title">
          ${message}
        </div>
    </div>
  `;

    document.querySelector('.modal').append(messagesModalDialog);

    setTimeout(() => {
      messagesModalDialog.remove();
      // prevModalDialog.classList.add('show');
      prevModalDialog.classList.remove('hide');
      closeModalWindow('.modal');
    }, 4000);
  }
}

// Синтаксис CommonJS
// module.exports = form;

export default form;
