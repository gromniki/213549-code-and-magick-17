'use strict';

var WIZARD_NAMES = ['Дамблдор', 'Волдеморт', 'Доктор Стрендж', 'Гарри Поттер'];
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

var COAT_COLOR = [
  'rgb(101, 137, 164)',
  'rgb(241, 43, 107)',
  'rgb(146, 100, 161)',
  'rgb(56, 159, 117)',
  'rgb(215, 210, 55)',
  'rgb(0, 0, 0)'
];

var EYES_COLOR = [
  'black',
  'red',
  'blue',
  'yellow',
  'green'
];

var getRandomNumber = function (min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
};

var getRandomFullName = function (names, surnames) {
  var name = names[getRandomNumber(0, names.length)];
  var surname = surnames[getRandomNumber(0, surnames.length)];

  return name + ' ' + surname;
};

var getRandomCoatColor = function (coats) {
  return coats[getRandomNumber(0, coats.length)];
};

var getRandomEyesColor = function (eyes) {
  return eyes[getRandomNumber(0, eyes.length)];
};

console.log(getRandomFullName(NAMES, SURNAMES));
console.log(getRandomCoatColor(COAT_COLOR));
console.log(getRandomEyesColor(EYES_COLOR));

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var wizardss = function () {
  for (var i = 0; i < arr.length; i++) {
    {
      name: getRandomFullName(NAMES, SURNAMES),
        coatColor: getRandomCoatColor(COAT_COLOR),
      eyesColor: getRandomEyesColor(EYES_COLOR)
    }
  }
};

var wizards = [
  {
    name: getRandomFullName(NAMES, SURNAMES),
    coatColor: getRandomCoatColor(COAT_COLOR),
    eyesColor: getRandomEyesColor(EYES_COLOR)
  },
  {
    name: getRandomFullName(NAMES, SURNAMES),
    coatColor: getRandomCoatColor(COAT_COLOR),
    eyesColor: getRandomEyesColor(EYES_COLOR)
  },
  {
    name: getRandomFullName(NAMES, SURNAMES),
    coatColor: getRandomCoatColor(COAT_COLOR),
    eyesColor: getRandomEyesColor(EYES_COLOR)
  },
  {
    name: getRandomFullName(NAMES, SURNAMES),
    coatColor: getRandomCoatColor(COAT_COLOR),
    eyesColor: getRandomEyesColor(EYES_COLOR)
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}
similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
