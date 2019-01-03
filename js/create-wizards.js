'use strict';

(function () {
  var AMOUNT_WIZARDS = 4;

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.colorEyes;

    return wizardElement;
  };

  var similar = document.querySelector('.setup-similar');
  var similarList = document.querySelector('.setup-similar-list');

  window.render = function (data) {
    var fragment = document.createDocumentFragment();
    var takeNumber = data.length > AMOUNT_WIZARDS ? AMOUNT_WIZARDS : data.length;

    similarList.textContent = '';
    for (var i = 0; i < takeNumber; i++) {
      fragment.appendChild(renderWizard(data[i]));
    }
    similarList.appendChild(fragment);
    similar.classList.remove('hidden');
  };

})();
