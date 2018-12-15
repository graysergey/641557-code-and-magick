'use strict';

(function () {

  var SUCCESS_CODE = 200;
  var URL = {
    load: 'https://js.dump.academy/code-and-magick/data',
    save: 'https://js.dump.academy/code-and-magick'
  };
  var userDialog = document.querySelector('.setup');
  var form = userDialog.querySelector('.setup-wizard-form');

  var onError = function (errorMessage) {
    var popup = document.createElement('div');
    popup.style = 'margin: 0 auto; text-align: center; color: black; background-color: red; z-index: 100';
    popup.style.position = 'absolute';
    popup.style.left = 0;
    popup.style.right = 0;
    popup.style.fontSize = '35px';
    popup.textContent = errorMessage;
    document.body.insertAdjacentElement('afterbegin', popup);
  };

  var setupServer = function (onLoad, error) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {
      if (xhr.status === SUCCESS_CODE) {
        onLoad(xhr.response);
      } else {
        error('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      error('Произошла ошибка соединения');
    });
    xhr.timeout = 10000;
    xhr.addEventListener('timeout', function () {
      error('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });

    return xhr;
  };

  function load(onLoad, error) {
    var xhr = setupServer(onLoad, error);
    xhr.open('GET', URL.load);
    xhr.send();
  }

  function save(data, onLoad, error) {
    var xhr = setupServer(onLoad, error);
    xhr.open('POST', URL.save);
    xhr.send(data);
  }

  form.addEventListener('submit', function (evt) {
    save(new FormData(form), function () {
      userDialog.classList.add('hidden');
    },
    onError()
    );
    evt.preventDefault();
  });


  window.backend = {
    load: load,
    onError: onError
  };

})();
