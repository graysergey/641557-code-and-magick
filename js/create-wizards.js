'use strict';

(function () {

  var similarListElement = document.querySelector('.setup-similar-list');
  // Находим фрагмент с данными в шаблоне
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  // Создает массив объектов
  var createWizards = function (wizardsCount) {
    var wizards = [];
    for (var i = 0; i < wizardsCount; i++) {
      var wizardName = window.initialDataWizards
        .names[window.util.getRandomIndex(window.initialDataWizards.names)] + ' ' + window.initialDataWizards
        .surNames[window.util.getRandomIndex(window.initialDataWizards.surNames)];
      var coatWizard = window.initialDataWizards
        .coatColors[window.util.getRandomIndex(window.initialDataWizards.coatColors)];
      var eyesWizard = window.initialDataWizards
        .eyesColors[window.util.getRandomIndex(window.initialDataWizards.eyesColors)];

      var wizard = {
        name: wizardName,
        coatColor: coatWizard,
        eyesColor: eyesWizard
      };
      wizards.push(wizard);
    }
    return wizards;
  };

  // Создает мага из входящего массива объектов
  var getWizardElement = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  // Создает DOM фрагмент, и записывает в него, из цыкла всех созданных магов
  var getWizardFragment = function (fragmentWizards) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < fragmentWizards.length; i++) {
      fragment.appendChild(getWizardElement(fragmentWizards[i]));
    }
    return fragment;
  };

  similarListElement.appendChild(getWizardFragment(createWizards(4)));

})();
