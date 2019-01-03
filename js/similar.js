'use strict';

(function () {

  var wizards = [];
  var coatColor;
  var eyesColor;

  var getRank = function (wizardItem) {
    var rank = 0;

    if (wizardItem.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizardItem.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesCompare = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesCompare(left.name, right.name);
      }
      return rankDiff;
    }));
  };


  var onEyesChange = function (color) {
    eyesColor = color;
    window.debounce(updateWizards);
  };

  var onCoatChange = function (color) {
    coatColor = color;
    window.debounce(updateWizards);
  };

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  window.backend.load(successHandler, window.backend.onError);

  window.similar = {
    onEyesChange: onEyesChange,
    onCoatChange: onCoatChange
  };

})();
