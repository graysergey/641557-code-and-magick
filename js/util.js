'use strict';

(function () {

  var ESC__KEYCODE = 27;
  var ENTER__KEYCODE = 13;

  window.util = {

    // Рандомный индекс из массива
    getRandomIndex: function (arr) {
      var randomValue = Math.floor(Math.random() * arr.length);

      return randomValue;
    },

    isEnterEvent: function (evt) {
      return evt.keyCode === ENTER__KEYCODE;
    },

    isEscapeEvt: function (evt) {
      return evt.keyCode === ESC__KEYCODE;
    },
  };
})();
