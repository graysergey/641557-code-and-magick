'use strict';

(function () {

  var wizards = [];
  var coatColor;
  var eyesColor;


  var updateWizards = function () {
    console.log(wizards);
    var someCoatWizards = wizards.filter(function (it) {
      return it.colorCoat === coatColor;
    });

    window.render(someCoatWizards);
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
    eyesColor = eyesWizard.style.fill = window.initialDataWizards
      .eyesColors[window.util.getRandomIndex(window.initialDataWizards.eyesColors)];
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
