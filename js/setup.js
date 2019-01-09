'use strict';

(function () {

  // Показывает вкладку (список магов)
  document.querySelector('.setup-similar').classList.remove('hidden');


  // Открытие закрытие окна настроек персонажа
  var userDialog = document.querySelector('.setup');
  var setupOpenIcon = document.querySelector('.setup-open');
  var setupClose = userDialog.querySelector('.setup-close');
  var inputUser = userDialog.querySelector('.setup-user-name');
  var popupStartCoordinates;

  var onPopupEscPress = function (evt) {
    if (window.util.isEscapeEvt(evt)) {
      closePopup();
      changeCoordinates();
    }
  };

  var openPopup = function () {
    userDialog.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
    window.onLoadAvatar();

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
