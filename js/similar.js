'use strict';

(function () {

  var successHandler = function (wizards) {
    window.render(wizards);
  };

  window.backend.load(successHandler, window.backend.onError);

})();
