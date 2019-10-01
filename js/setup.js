// Файл setup.js
'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпина', 'Вашингтон'];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

var WIZARD_COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARD_EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

var similarListElement = userDialog.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var randomWizardName = function () {
  return WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)];
};
var randomWizardSurname = function () {
  return WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)];
};
var randomWizardCoatColor = function () {
  return WIZARD_COAT_COLORS[Math.floor(Math.random() * WIZARD_COAT_COLORS.length)];
};
var randomWizardEyesColor = function () {
  return WIZARD_EYES_COLORS[Math.floor(Math.random() * WIZARD_EYES_COLORS.length)];
};

var createWizards = function () {
  var wizzards = [];
  for (var i = 0; i < 4; i++) {
    var wizzard = {};
    wizzard.name = randomWizardName() + ' ' + randomWizardSurname();
    wizzard.coatColor = randomWizardCoatColor();
    wizzard.eyesColor = randomWizardEyesColor();
    wizzards.push(wizzard);
  }
  return wizzards;
};

var wizards = createWizards();
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
