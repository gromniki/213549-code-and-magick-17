'use strict';

(function () {
  window.setup.userNameInput.addEventListener('invalid', function () {
    if (window.setup.userNameInput.validity.tooShort) {
      window.setup.userNameInput.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else if (window.setup.userNameInput.validity.tooLong) {
      window.setup.userNameInput.setCustomValidity('Имя не должно превышать 25-ти символов');
    } else if (window.setup.userNameInput.validity.valueMissing) {
      window.setup.userNameInput.setCustomValidity('Обязательное поле');
    } else {
      window.setup.userNameInput.setCustomValidity('');
    }
  });

  window.setup.userNameInput.addEventListener('input', function (evt) {
    var target = evt.target;
    if (target.value.length < 2) {
      target.setCustomValidity('Имя должно состоять минимум из 2-х символов');
    } else {
      target.setCustomValidity('');
    }
  });
})();
