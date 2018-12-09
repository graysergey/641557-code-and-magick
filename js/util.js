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

    getMaxValue: function (arr) {
      var maxValue = arr[0];

      for (var i = 0; i < arr.length; i++) {
        if (maxValue < arr[i]) {
          maxValue = arr[i];
        }
      }
      // Проверяет пустой ли массив, и если пустой, то запиши в него единицу
      // и присвой нулевой индекс для максимального елемента.
      if (arr.length === 0) {
        arr.push(1);
        maxValue = Math.round(arr[0]);
      }

      return maxValue;
    }
  };
})();
