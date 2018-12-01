'use strict';

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

// Создает рандомное число на основе входящего массива
var getRandomValue = function (arr) {
  var randomValue = Math.floor(Math.random() * arr.length);

  return randomValue;
};

// Создает массив объектов
var createWizards = function (wizardsCount) {
  var wizards = [];
  for (var i = 0; i < wizardsCount; i++) {
    var wizardName = names[getRandomValue(names)] + ' ' + surNames[getRandomValue(surNames)];
    var coatWizard = coatColors[getRandomValue(coatColors)];
    var eyesWizard = eyesColors[getRandomValue(eyesColors)];

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

// Показывает вкладку (список магов)
document.querySelector('.setup-similar').classList.remove('hidden');

// Открытие закрытие окна настройки персонажа
var ESC__KEYCODE = 27;
var ENTER__KEYCODE = 13;

var userDialog = document.querySelector('.setup');
var setupOpenIcon = document.querySelector('.setup-open');
var setupClose = userDialog.querySelector('.setup-close');

setupOpenIcon.addEventListener('click', function () {
  userDialog.classList.remove('hidden');

  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ESC__KEYCODE) {
      userDialog.classList.add('hidden');
    }
  });
});

setupOpenIcon.addEventListener('keydown', function (evt) {
  evt.preventDefault();

  if (evt.keyCode === ENTER__KEYCODE) {
    userDialog.classList.remove('hidden');
  }
});

setupClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  userDialog.classList.add('hidden');
});

setupClose.addEventListener('keydown', function (evt) {
  evt.preventDefault();

  if (evt.keyCode === ENTER__KEYCODE) {
    userDialog.classList.add('hidden');
  }
});


