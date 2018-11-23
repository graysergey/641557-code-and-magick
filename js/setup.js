'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
// Находим фрагмент с данными в шаблоне
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var names = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];

var surNames = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];

var coatColors = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var eyesColors = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var wizards = [];

// Создает рандомное число на основе входящего массива
var createRandom = function (arr) {
  var rand = Math.floor(Math.random() * arr.length);

  return rand;
};

// Создает массив объектов 4 шт.
var creationWizardList = function (namesWizards, surNameWizards, coatColorsWizards, eyesColorsWizards) {
  for (var i = 0; i < 4; i++) {
    var object = {};
    object.name = namesWizards[createRandom(namesWizards)] + ' ' + surNameWizards[createRandom(surNameWizards)];
    object.coatColor = coatColorsWizards[createRandom(coatColorsWizards)];
    object.eyesColor = eyesColorsWizards[createRandom(eyesColorsWizards)];
    wizards.push(object);
  }
  return wizards;
};

creationWizardList(names, surNames, coatColors, eyesColors);

// Создает мага из входящего массива объектов
var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  return wizardElement;
};
// Создает DOM фрагмент, и записывает в него, из цыкла всех созданных магов
var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

similarListElement.appendChild(fragment);
userDialog.querySelector('.setup-similar').classList.remove('hidden');
