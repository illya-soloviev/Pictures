import modals from "./modules/modals";
import sliders from "./modules/sliders";
import forms from "./modules/forms";
import mask from './modules/mask';
import checkTextInputs from './modules/checkTextInputs';
// import showMoreStyles from "./modules/showMoreStyles";
import showMoreStyles from "./modules/showMoreStylesByHTML";
import calc from "./modules/calc";
import filter from "./modules/filter";
import pictureSize from "./modules/pictureSize";
import accordion from "./modules/accordion";
import burger from "./modules/burger";
import drop from "./modules/drop";
import scrolling from "./modules/scrolling";

window.addEventListener('DOMContentLoaded', () => {
    "use strict";

    let calcState = {
        selector: '.calc-price',
        success : 'Ваш заказ отправлен.',
        failure: 'Пожалуйста, укажите размер и материал картины.'
    };

    modals();
    sliders('.main-slider-item', 'vertical');
    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    forms(calcState);
    mask('[name="phone"]');
    checkTextInputs('[name="name"]');
    checkTextInputs('[name="message"]');
    // showMoreStyles('.button-styles', '#styles .row');
    showMoreStyles('.button-styles', '.styles-2');
    calc('#size', '#material', '#options', '.promocode', '.calc-price', calcState);
    filter();
    pictureSize('.sizes-block');
    accordion('.accordion-heading');
    burger('.burger-menu', '.burger');
    drop();
    scrolling('.pageup');
});