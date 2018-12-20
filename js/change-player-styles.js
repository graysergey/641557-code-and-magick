'use strict';

// Изменение стилей персонажа

// Изменение цвета плаща
(function () {

  var coatWizard = document.querySelector('.setup-wizard .wizard-coat');
  var inputCoatWizard = document.querySelector('.setup-wizard-form')
    .querySelector('[name="coat-color"]');

  coatWizard.addEventListener('click', function () {
    coatWizard.style.fill = window.initialDataWizards
      .coatColors[window.util.getRandomIndex(window.initialDataWizards.coatColors)];
    inputCoatWizard.setAttribute('value', coatWizard.style.fill);
  });

  // Изменение цвета глаз
  var eyesWizard = document.querySelector('.setup-wizard .wizard-eyes');
  var inputEyesWizard = document.querySelector('[name="eyes-color"]');

  eyesWizard.addEventListener('click', function () {
    eyesWizard.style.fill = window.initialDataWizards
      .eyesColors[window.util.getRandomIndex(window.initialDataWizards.eyesColors)];
    inputEyesWizard.setAttribute('value', eyesWizard.style.fill);
  });

  // Изменение цвета фаерболов
  var fireballWizard = document.querySelector('.setup-fireball-wrap');
  var fireballColorInput = document.querySelector('input[name="fireball-color"]');

  fireballWizard.addEventListener('click', function () {
    var colorFireball = window.initialDataWizards.fireballs[window.util.
      getRandomIndex(window.initialDataWizards.fireballs)];
    fireballWizard.style.backgroundColor = colorFireball;
    fireballColorInput.setAttribute('value', colorFireball);
  });
})();

