import tabs from './modules/tabs';
import modal from './modules/modal';
import timer from './modules/timer';
import cards from './modules/cards';
import calc from './modules/calc';
import forms from './modules/forms';
import sliders from './modules/sliders';

window.addEventListener("DOMContentLoaded", function () {

  tabs();
  modal("[data-modal]", ".modal");
  timer();
  cards();
  calc();
  forms();
  sliders();

});