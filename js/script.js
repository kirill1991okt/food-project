import calc from './modules/calc';
import cards from './modules/cards';
import form from './modules/form';
import modal from './modules/modal';
import slider from './modules/slider';
import tabs from './modules/tabs';
import timer from './modules/timer';
import { openModal } from './modules/modal';

window.addEventListener('DOMContentLoaded', () => {
  const modalTimerId = setTimeout(
    () => openModal('.modal', modalTimerId),
    5000
  );
  console.log(modalTimerId);

  calc();
  cards();
  form('form', modalTimerId);
  modal('[data-modal]', '.modal', modalTimerId);
  tabs(
    '.tabheader__item',
    '.tabcontent',
    '.tabheader__items',
    'tabheader__item_active'
  );
  timer('.timer');
  slider({
    sliderSelector: '.offer__slider',
    slidesSelector: '.offer__slide',
    prevArrow: '.offer__slider-prev',
    nextArrow: '.offer__slider-next',
    currentId: '#current',
    totalId: '#total',
    wrapper: '.offer__slider-wrapper',
    field: '.offer__slider-inner',
  });
});
