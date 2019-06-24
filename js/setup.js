'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  var NAMES = [
    'Иван',
    'Хуан Себастьян',
    'Мария',
    'Кристоф',
    'Виктор',
    'Юлия',
    'Люпита',
    'Вашингтон'
  ];

  var SURNAMES = [
    'да Марья',
    'Верон',
    'Мирабелла',
    'Вальц',
    'Онопко',
    'Топольницкая',
    'Нионго',
    'Ирвинг'
  ];

  var COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];

  var EYES_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];

  var FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];

  var WIZARDS_NUMBER = 4;

  var getRandomNumber = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  };

  var getRandomElement = function (array) {
    return array[getRandomNumber(0, array.length)];
  };

  var setup = document.querySelector('.setup');
  var setupOpen = document.querySelector('.setup-open');
  var setupClose = setup.querySelector('.setup-close');

  var userNameInput = setup.querySelector('.setup-user-name');

  window.setup = {
    setup: setup,
    coords: {
      start: {
        x: 50,
        y: 80
      }
    }
  };

  var onPopupEscPress = function (evt) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  };

  userNameInput.addEventListener('focus', function () {
    document.removeEventListener('keydown', onPopupEscPress);
  });

  userNameInput.addEventListener('blur', function () {
    document.addEventListener('keydown', onPopupEscPress);
  });

  var openPopup = function () {
    setup.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setup.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    window.setup.setup.style.top = window.setup.coords.start.y + 'px';
    window.setup.setup.style.left = window.setup.coords.start.x + '%';
  };

  setupOpen.addEventListener('click', function () {
    openPopup();
  });

  setupOpen.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup();
    }
  });

  setupClose.addEventListener('click', function () {
    closePopup();
  });

  setupClose.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup();
    }
  });

  userNameInput.addEventListener('invalid', function () {
    if (userNameInput.validity.tooShort) {
      userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (userNameInput.validity.tooLong) {
      userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (userNameInput.validity.valueMissing) {
      userNameInput.setCustomValidity('Обязательное поле');
    } else {
      userNameInput.setCustomValidity('');
    }
  });

  userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });

  var userPlayer = document.querySelector('.setup-player');
  var wizardCoat = userPlayer.querySelector('.wizard-coat');
  var wizardEyes = userPlayer.querySelector('.wizard-eyes');
  var wizardFireball = userPlayer.querySelector('.setup-fireball-wrap');

  var inputCoat = userPlayer.querySelector('[name=coat-color]');
  var inputEyes = userPlayer.querySelector('[name=eyes-color]');
  var inputFireball = userPlayer.querySelector('[name=fireball-color]');

  wizardCoat.addEventListener('click', function () {
    var coatColor = getRandomElement(COAT_COLORS);

    wizardCoat.style.fill = coatColor;
    inputCoat.value = coatColor;
  });

  wizardEyes.addEventListener('click', function () {
    var eyesColor = getRandomElement(EYES_COLORS);

    wizardEyes.style.fill = eyesColor;
    inputEyes.value = eyesColor;
  });

  wizardFireball.addEventListener('click', function () {
    var fireballColor = getRandomElement(FIREBALL_COLORS);

    wizardFireball.style.backgroundColor = fireballColor;
    inputFireball.value = fireballColor;
  });

  var similarListElement = setup.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var generateWizardsData = function () {
    var wizards = [];

    for (var i = 0; i < WIZARDS_NUMBER; i++) {
      wizards.push({
        name: getRandomElement(NAMES) + ' ' + getRandomElement(SURNAMES),
        coatColor: getRandomElement(COAT_COLORS),
        eyesColor: getRandomElement(EYES_COLORS)
      });
    }

    return wizards;
  };

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var renderWizards = function (array) {
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < array.length; i++) {
      fragment.appendChild(renderWizard(array[i]));
    }
    similarListElement.appendChild(fragment);
  };

  renderWizards(generateWizardsData());

  setup.querySelector('.setup-similar').classList.remove('hidden');
})();
