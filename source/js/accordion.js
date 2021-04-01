/* eslint-disable no-invalid-this */
'use strict';

let questionsItemButton = document.querySelectorAll('.questions-item__button');
const QUESTION_ITEM_CLOSED_CLASS = 'questions-item--closed';

function initQuestionItems() {
  if (questionsItemButton) {
    questionsItemButton.forEach((element) => {
      element.addEventListener('click', questionsItemClickHandler);
    });
  }
}

function questionsItemClickHandler() {
  let currentField = this.parentNode;
  currentField.classList.toggle(QUESTION_ITEM_CLOSED_CLASS);
}

initQuestionItems();
