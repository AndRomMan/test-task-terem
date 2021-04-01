/* eslint-disable no-console */
'use strict';

let serverResponse;
let submitButton = document.querySelector('.callback-form__button');
let inputUserName = document.querySelector('#username');
let inputUserPhone = document.querySelector('#userphone');

initSubmitButton();

function initSubmitButton() {
  if (submitButton) {
    submitButton.addEventListener('click', submitButtonClickHAndler);
  }
}

function submitButtonClickHAndler() {
  let username = inputUserName.value;
  let userphone = inputUserPhone.value;
  let postOutput = 'username=' + encodeURIComponent(username) + '&userphone=' + encodeURIComponent(userphone);
  serverAjaxRequest(postOutput);
}

function serverAjaxRequest(postOutput) {
  let request = new XMLHttpRequest();

  request.open('POST', 'https://demindesign.ru/terem-test/ajax_echo_post.php');
  request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

  request.send(postOutput);

  request.addEventListener('readystatechange', function () {
    if (request.readyState === 4 && request.status === 200) {
      serverResponse = request.response;
      console.log(serverResponse);
    }
  });
}
