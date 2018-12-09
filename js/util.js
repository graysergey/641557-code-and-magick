'use strict';

(function () {

  window.util = {

    // Рандомный индекс из массива
    getRandomIndex: function (arr) {
      var randomValue = Math.floor(Math.random() * arr.length);

      return randomValue;
    }
  };
})();
