'use strict';

(function () {

  var wizards = [];
  var coatColor;
  var eyesColor;

  var updateWizards = function () {
    var sameCoatAndEyesWizards = wizards.filter(function (it) {
      return it.colorCoat === coatColor && it.colorEyes === eyesColor;
    });
    var sameCoatWizards = wizards.filter(function (it) {
      return it.colorCoat === coatColor;
    });
    var sameEyesWizards = wizards.filter(function (it) {
      return it.colorEyes === eyesColor;
    });

    var filtredWizards = sameCoatAndEyesWizards.concat(sameCoatWizards).concat(sameEyesWizards).concat(wizards);

    var uniqueWizards = filtredWizards.filter(function (it, i) {
      return filtredWizards.indexOf(it) === i;
    });
    window.render(uniqueWizards);
  };

  // Обработчик цвета плаща
  var coatWizard = document.querySelector('.setup-wizard .wizard-coat');
  var inputCoatWizard = document.querySelector('.setup-wizard-form')
    .querySelector('[name="coat-color"]');

  coatWizard.addEventListener('click', function () {
    var newColor = window.initialDataWizards
      .coatColors[window.util.getRandomIndex(window.initialDataWizards.coatColors)];
    coatWizard.style.fill = newColor;
    coatColor = newColor;
    inputCoatWizard.setAttribute('value', coatColor);
    updateWizards();
  });

  // Обработчик цвета глаз
  var eyesWizard = document.querySelector('.setup-wizard .wizard-eyes');
  var inputEyesWizard = document.querySelector('[name="eyes-color"]');
  eyesWizard.addEventListener('click', function () {
    var newColor = window.initialDataWizards
      .eyesColors[window.util.getRandomIndex(window.initialDataWizards.eyesColors)];
    eyesWizard.style.fill = newColor;
    eyesColor = newColor;
    inputEyesWizard.setAttribute('value', eyesColor);
    updateWizards();
  });

  // Обработчик цвета фаерболов
  var fireballWizard = document.querySelector('.setup-fireball-wrap');
  var fireballColorInput = document.querySelector('input[name="fireball-color"]');

  fireballWizard.addEventListener('click', function () {
    var colorFireball = window.initialDataWizards.fireballs[window.util.
      getRandomIndex(window.initialDataWizards.fireballs)];
    fireballWizard.style.backgroundColor = colorFireball;
    fireballColorInput.setAttribute('value', colorFireball);
  });


  var successHandler = function (data) {
    wizards = data;
    updateWizards();
  };

  window.backend.load(successHandler, window.backend.onError);

  window.updateWizards = updateWizards;

})();
