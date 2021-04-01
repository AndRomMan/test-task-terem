'use strict';

(function () {
  var PATTERN = '+7 (___) ___ ____';

  function keyCodeProcessing(evt) {
    if (evt.code === 'Tab') {
      return;
    }

    var keyCode;

    if (evt.keyCode) {
      keyCode = evt.keyCode;
      var pos = this.selectionStart;
      if (pos < 3) evt.preventDefault();
      var i = 0;
      var def = PATTERN.replace(/\D/g, '');
      var val = this.value.replace(/\D/g, '');
      var newValue = PATTERN.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = newValue.indexOf('_');

      if (i !== -1) {
        if (i < 5) {
          i = 3;
        }

        newValue = newValue.slice(0, i);
      }

      var reg = PATTERN.substr(0, this.value.length).replace(/_+/g, function (a) {
        return '\\d{1,' + a.length + '}';
      }).replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (!reg.test(this.value) || this.value.length < 5 || keyCode > 47 && keyCode < 58) this.value = newValue;
      if (evt.type === 'blur' && this.value.length < 5) this.value = '';
    }
  }

  function inputProcessing(input) {
    input.addEventListener('input', keyCodeProcessing, false);
    input.addEventListener('focus', keyCodeProcessing, false);
    input.addEventListener('blur', keyCodeProcessing, false);
    input.addEventListener('keydown', keyCodeProcessing, false);
  }

  function inputPhoneHolder() {
    var inputPhone = document.querySelector('input[type="tel"]');
    inputProcessing(inputPhone);
  }

  window.addEventListener('DOMContentLoaded', inputPhoneHolder);
})();
'use strict';

var modal = document.querySelector('.modal');
var modalExitBtn = document.querySelector('.modal__exit-button');
var modalEscapeBtn = document.querySelector('.modal__escape-button');
var MODAL_CLASS_CLOSED = 'modal--closed';
var MODAL_OVERLAY = 'modal';

function openModal() {
  if (modal) {
    openBlock(modal, MODAL_CLASS_CLOSED);
    initModalButtons();
    modalEscapeBtn.focus();
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

function escapeHandler(evt) {
  if (evt.code === 'Escape') {
    evt.preventDefault();
    modalEscapeBtnClickHandler();
  }
}

function overlayClickHandler(evt) {
  var element = evt.target;

  if (element.classList.contains(MODAL_OVERLAY)) {
    modalEscapeBtnClickHandler();
  } else {
    return;
  }
}
'use strict';

var jsonTestData;

function serverAjaxRequest() {
  var request = new XMLHttpRequest();
  request.open('GET', 'https://demindesign.ru/intas-test/tests.php');
  request.send();
  request.addEventListener('readystatechange', function () {
    if (request.readyState === 4 && request.status === 200) {
      jsonTestData = JSON.parse(request.response);
      setTestName();
    }
  });
}
//# sourceMappingURL=main.js.map
