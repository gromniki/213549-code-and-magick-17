'use strict';

(function () {
  var userPlayer = document.querySelector('.setup-player');
  var wizardCoat = userPlayer.querySelector('.wizard-coat');
  var wizardEyes = userPlayer.querySelector('.wizard-eyes');
  var wizardFireball = userPlayer.querySelector('.setup-fireball-wrap');

  var inputCoat = userPlayer.querySelector('[name=coat-color]');
  var inputEyes = userPlayer.querySelector('[name=eyes-color]');
  var inputFireball = userPlayer.querySelector('[name=fireball-color]');

  wizardCoat.addEventListener('click', function () {
    var coatColor = window.util.getRandomElement(window.setup.COAT_COLORS);

    wizardCoat.style.fill = coatColor;
    inputCoat.value = coatColor;
  });

  wizardEyes.addEventListener('click', function () {
    var eyesColor = window.util.getRandomElement(window.setup.EYES_COLORS);

    wizardEyes.style.fill = eyesColor;
    inputEyes.value = eyesColor;
  });

  wizardFireball.addEventListener('click', function () {
    var fireballColor = window.util.getRandomElement(window.setup.FIREBALL_COLORS);

    wizardFireball.style.backgroundColor = fireballColor;
    inputFireball.value = fireballColor;
  });

  var similarListElement = window.setup.setup.querySelector('.setup-similar-list');

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var generateWizardsData = function () {
    var wizards = [];

    for (var i = 0; i < window.setup.WIZARDS_NUMBER; i++) {
      wizards.push({
        name: window.util.getRandomElement(window.setup.NAMES) + ' ' + window.util.getRandomElement(window.setup.SURNAMES),
        coatColor: window.util.getRandomElement(window.setup.COAT_COLORS),
        eyesColor: window.util.getRandomElement(window.setup.EYES_COLORS)
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

  window.setup.setup.querySelector('.setup-similar').classList.remove('hidden');
})();
