/* eslint-disable no-console */
/* eslint-disable no-invalid-this */
'use strict';

let jsonTestData;

function serverAjaxRequest() {
  let request = new XMLHttpRequest();
  // request.open('GET', 'http://intas-site/test_data.php');
  request.open('GET', 'https://demindesign.ru/intas-test/tests.php');
  request.send();
  request.addEventListener('readystatechange', function () {
    if (request.readyState === 4 && request.status === 200) {
      jsonTestData = JSON.parse(request.response);
      setTestName();
    }
  });
}
