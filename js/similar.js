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
    // что если я запишу так?:   --> вроде бы так тоже работает
    if (left > right) {
      return 1;
    }
    if (left < right) {
      return -1;
    }
    return 0;

    // вместо такой записи:  --> такая запись была по демке
    // if (left > right) {
    //   return 1;
    // } else if (left < right) {
    //   return -1;
    // } else {
    //   return 0;
    // }
  };

  var updateWizards = function () {
    // var sameCoatAndEyesWizards = wizards.filter(function (it) {
    //   return it.colorCoat === coatColor && it.colorEyes === eyesColor;
    // });
    // var sameCoatWizards = wizards.filter(function (it) {
    //   return it.colorCoat === coatColor;
    // });
    // var sameEyesWizards = wizards.filter(function (it) {
    //   return it.colorEyes === eyesColor;
    // });

    // var filtredWizards = sameCoatAndEyesWizards.concat(sameCoatWizards).concat(sameEyesWizards).concat(wizards);

    // var uniqueWizards = filtredWizards.filter(function (it, i) {
    //   return filtredWizards.indexOf(it) === i;
    // });
    window.render(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesCompare(left.name, right.name);
      }
      return rankDiff;
    }));
  };

  var lastTimeout;
  var onEyesChange = function (color) {
    eyesColor = color;
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(function () {
      updateWizards();
    }, 500);
  };

  var onCoatChange = function (color) {
    coatColor = color;
    if (lastTimeout) {
      clearTimeout(lastTimeout);
    }
    lastTimeout = setTimeout(function () {
      updateWizards();
    }, 500);
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
