/* eslint-disable no-invalid-this */

// input-validating.js

'use strict';

(function () {
  let PATTERN = '+7 (___) ___ ____';

  function keyCodeProcessing(evt) {
    if (evt.code === 'Tab') {
      return;
    }

    let keyCode;
    if (evt.keyCode) {
      keyCode = evt.keyCode;
      let pos = this.selectionStart;
      if (pos < 3) evt.preventDefault();
      let i = 0;
      let def = PATTERN.replace(/\D/g, '');
      let val = this.value.replace(/\D/g, '');
      let newValue = PATTERN.replace(/[_\d]/g, function (a) {
        return i < val.length ? val.charAt(i++) || def.charAt(i) : a;
      });
      i = newValue.indexOf('_');
      if (i !== -1) {
        if (i < 5) {
          i = 3;
        }
        newValue = newValue.slice(0, i);
      }
      let reg = PATTERN.substr(0, this.value.length)
        .replace(/_+/g, function (a) {
          return '\\d{1,' + a.length + '}';
        })
        .replace(/[+()]/g, '\\$&');
      reg = new RegExp('^' + reg + '$');
      if (!reg.test(this.value) || this.value.length < 5 || (keyCode > 47 && keyCode < 58)) this.value = newValue;
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
    let inputPhone = document.querySelector('input[type="tel"]');
    inputProcessing(inputPhone);
  }

  window.addEventListener('DOMContentLoaded', inputPhoneHolder);
})();
