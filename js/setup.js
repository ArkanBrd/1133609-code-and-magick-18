// Файл setup.js
'use strict';
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпина', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var randomWizardName = function (WIZARD_NAME) {
  return WIZARD_NAME[Math.floor(Math.random() * WIZARD_NAMES.length)];
};
var randomWizardSurname = function (WIZARD_SURNAME) {
  return WIZARD_SURNAME[Math.floor(Math.random() * WIZARD_SURNAMES.length)];
};
var randomWizardCoatColor = function (WIZARD_COAT_COLOR) {
  return WIZARD_COAT_COLOR[Math.floor(Math.random() * WIZARD_COAT_COLORS.length)];
};
var randomWizardEyesColor = function (WIZARD_EYES_COLOR) {
  return WIZARD_EYES_COLOR[Math.floor(Math.random() * WIZARD_EYES_COLORS.length)];
};

var wizards = [
  {
    name: randomWizardName() + randomWizardSurname(),
    coatColor: randomWizardCoatColor,
    eyesColor: randomWizardEyesColor
  },
  {
    name: randomWizardName() + randomWizardSurname(),
    coatColor: randomWizardCoatColor,
    eyesColor: randomWizardEyesColor
  },
  {
    name: randomWizardName() + randomWizardSurname(),
    coatColor: randomWizardCoatColor,
    eyesColor: randomWizardEyesColor
  },
  {
    name: randomWizardName() + randomWizardSurname(),
    coatColor: randomWizardCoatColor,
    eyesColor: randomWizardEyesColor
  }
];
for (var i = 0; i < wizards.length; i++) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizards[i].name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizards[i].coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizards[i].eyesColor;

  similarListElement.appendChild(wizardElement);
}
