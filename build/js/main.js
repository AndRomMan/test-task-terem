'use strict';

var questionsItemButton = document.querySelectorAll('.questions-item__button');
var QUESTION_ITEM_CLOSED_CLASS = 'questions-item--closed';

function initQuestionItems() {
  if (questionsItemButton) {
    questionsItemButton.forEach(function (element) {
      element.addEventListener('click', questionsItemClickHandler);
    });
  }
}

function questionsItemClickHandler() {
  var currentField = this.parentNode;
  currentField.classList.toggle(QUESTION_ITEM_CLOSED_CLASS);
}

initQuestionItems();
'use strict';

var serverResponse;
var submitButton = document.querySelector('.callback-form__button');
var inputUserName = document.querySelector('#username');
var inputUserPhone = document.querySelector('#userphone');
initSubmitButton();

function initSubmitButton() {
  if (submitButton) {
    submitButton.addEventListener('click', submitButtonClickHAndler);
  }
}

function submitButtonClickHAndler() {
  var username = inputUserName.value;
  var userphone = inputUserPhone.value;
  var postOutput = 'username=' + encodeURIComponent(username) + '&userphone=' + encodeURIComponent(userphone);
  serverAjaxRequest(postOutput);
}

function serverAjaxRequest(postOutput) {
  var request = new XMLHttpRequest();
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
//# sourceMappingURL=main.js.map
