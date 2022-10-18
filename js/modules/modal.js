function openModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  modal.classList.remove('hide');
  document.body.style.overflow = 'hidden';

  if (modalTimerId) {
    clearTimeout(modalTimerId);
  }
}

function closeModalWindow(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('hide');
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

function modal(btnSelector, modalSelector, modalTimerId) {
  const modalBtn = document.querySelectorAll(btnSelector),
    modal = document.querySelector(modalSelector);

  modalBtn.forEach((item) => {
    item.addEventListener('click', () =>
      openModal(modalSelector, modalTimerId)
    );
  });

  modal.addEventListener('click', (e) => {
    if (e.target === modal || e.target.getAttribute('data-close') == '') {
      closeModalWindow(modalSelector);
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.code === 'Escape' && modal.classList.contains('show')) {
      closeModalWindow(modalSelector);
    }
  });

  function openModalByScroll() {
    if (
      window.pageYOffset + document.documentElement.clientHeight >=
      document.documentElement.scrollHeight
    ) {
      openModal(modalSelector, modalTimerId);
      window.removeEventListener('scroll', openModalByScroll);
    }
  }

  window.addEventListener('scroll', openModalByScroll);
}

// синтаксис  CommonJS
// module.exports = modal;

export default modal;
export { openModal, closeModalWindow };
