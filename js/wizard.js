'use strict';

(function () {

  // Обработчик цвета плаща
  var coatWizard = document.querySelector('.setup-wizard .wizard-coat');
  var inputCoatWizard = document.querySelector('.setup-wizard-form')
    .querySelector('[name="coat-color"]');

  coatWizard.addEventListener('click', function () {
    var newColor = window.initialDataWizards
      .coatColors[window.util.getRandomIndex(window.initialDataWizards.coatColors)];
    coatWizard.style.fill = newColor;
    inputCoatWizard.setAttribute('value', newColor);
    window.similar.onChangeCoatColor(newColor);
  });

  // Обработчик цвета глаз
  var eyesWizard = document.querySelector('.setup-wizard .wizard-eyes');
  var inputEyesWizard = document.querySelector('[name="eyes-color"]');
  eyesWizard.addEventListener('click', function () {
    var newColor = window.initialDataWizards
      .eyesColors[window.util.getRandomIndex(window.initialDataWizards.eyesColors)];
    eyesWizard.style.fill = newColor;
    inputEyesWizard.setAttribute('value', newColor);
    window.similar.onChangeEyesColor(newColor);
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

})();
