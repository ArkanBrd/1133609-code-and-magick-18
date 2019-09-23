'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_X = 100;
var GAP_Y = 80;
var TEXT_COORD_Y = 30;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;
var TEXT_GAP_Y = 24;
var RECT_GAP_Y = 100;
var SCORE_X = CLOUD_X + GAP;


var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function (ctx, names, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000000';
  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + 100, TEXT_COORD_Y);
  ctx.fillText('Список результатов:', CLOUD_X + 100, TEXT_COORD_Y + TEXT_GAP_Y);

  var maxTime = getMaxElement(times);

  var getPlayerColor = function (name) {
    if (name === 'Вы') {
      return 'rgba(255, 0, 0, 1)';
    } else {
      return 'hsl(210, ' + (75 + 70 * Math.random()) + '%, 75%)';
    }
  };

  for (var i = 0; i < names.length; i++) {

    var playerTime = Math.round(times[i]);
    ctx.fillStyle = '#000000';
    ctx.fillText(playerTime, SCORE_X + GAP_X * i, BAR_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime) + GAP_Y);

    ctx.fillStyle = getPlayerColor(names[i]);

    ctx.fillText(names[i], SCORE_X + GAP_X * i, CLOUD_HEIGHT - CLOUD_Y);
    ctx.fillRect(SCORE_X + GAP_X * i, BAR_HEIGHT - ((BAR_HEIGHT * times[i]) / maxTime) + RECT_GAP_Y, BAR_WIDTH, ((BAR_HEIGHT * times[i]) / maxTime));
  }


};
