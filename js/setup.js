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

  // Показывает вкладку (список магов)
  document.querySelector('.setup-similar').classList.remove('hidden');


  // Открытие закрытие окна настроек персонажа
  var userDialog = document.querySelector('.setup');
  var setupOpenIcon = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');
  var inputUser = userDialog.querySelector('.setup-user-name');
  var popupStartCoordinates;

  window.util.isEnterEvent();

  window.util.isEscapeEvt();

  var onPopupEscPress = function (evt) {
    if (window.util.isEscapeEvt(evt)) {
      closePopup();
      changeCoordinates();
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);

    // записываем стартовые координаты попапа
    popupStartCoordinates = {
      x: userDialog.offsetLeft,
      y: userDialog.offsetTop
    };
    setupClose.addEventListener('click', changeCoordinates);
  };

  var closePopup = function () {
    userDialog.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
  };

  setupOpenIcon.addEventListener('click', function () {
    openPopup();
  });

  setupOpenIcon.addEventListener('keydown', function (evt) {
    evt.preventDefault();
    if (window.util.isEnterEvent(evt)) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function (evt) {
    evt.preventDefault();
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    evt.preventDefault();

    if (window.util.isEnterEvent(evt)) {
      closePopup();
    }
  });

  inputUser.addEventListener('keydown', function (evt) {
    if (window.util.isEscapeEvt(evt)) {
      evt.stopPropagation();
    }
  });

  // Сбрасиваем координаты у попапа на дефолтные
  var changeCoordinates = function () {
    userDialog.style.top = popupStartCoordinates.y + 'px';
    userDialog.style.left = popupStartCoordinates.x + 'px';
  };
})();
