/* eslint-disable no-invalid-this */
/* eslint-disable no-console */
'use strict';

let modal = document.querySelector('.modal');
let modalExitBtn = document.querySelector('.modal__exit-button');
let modalEscapeBtn = document.querySelector('.modal__escape-button');

const MODAL_CLASS_CLOSED = 'modal--closed';
const MODAL_OVERLAY = 'modal';

function openModal() {
  if (modal) {
    openBlock(modal, MODAL_CLASS_CLOSED);
    initModalButtons();
    modalEscapeBtn.focus();

    // подключаем обработчик 'escape' закрытия модального
    window.addEventListener('keydown', escapeHandler);
    modal.addEventListener('click', overlayClickHandler);
  }
}

function closeModal() {
  closeBlock(modal, MODAL_CLASS_CLOSED);
  stopInitModalButtons();
}

function initModalButtons() {
  if (modalExitBtn) {
    modalExitBtn.addEventListener('click', modalExitBtnClickHandler);
  }
  if (modalEscapeBtn) {
    modalEscapeBtn.addEventListener('click', modalEscapeBtnClickHandler);
  }
}

function stopInitModalButtons() {
  modalExitBtn.removeEventListener('click', modalExitBtnClickHandler);
  modalEscapeBtn.removeEventListener('click', modalEscapeBtnClickHandler);
}

function modalExitBtnClickHandler() {
  closeModal();
  closeCurrentTest();
  stopInitModalButtons();
}

function modalEscapeBtnClickHandler() {
  closeModal();
  stopInitModalButtons();
}

// обработчики клавиши escape
function escapeHandler(evt) {
  if (evt.code === 'Escape') {
    evt.preventDefault();
    modalEscapeBtnClickHandler();
  }
}

// обработчик клика по overlay-области
function overlayClickHandler(evt) {
  let element = evt.target;

  if (element.classList.contains(MODAL_OVERLAY)) {
    modalEscapeBtnClickHandler();
  } else {
    return;
  }
}
