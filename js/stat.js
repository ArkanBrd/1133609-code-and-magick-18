'use strict';
var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var GAP_X = 100;
var textCordY = 80;
var BAR_HEIGHT = 150;
var BAR_WIDTH = 40;


var renderCloud = function(ctx,x, y, color) {
	ctx.fillStyle = color;
	ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];
  
  for (var i = 1; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }
  
  return maxElement;
};

window.renderStatistics = function(ctx, names, times){
	renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
	renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
	
	ctx.fillStyle = '#000000';
	ctx.font = '16px PT Mono';
	ctx.textBaseline = 'hanging';
	ctx.fillText('Ура вы победили!',200, 30);
	ctx.fillText('Список результатов:',200, 54);
  
		
	var names = ['Вы', 'Гуша', 'MKS', 'Курепа'];
	
	var maxTime = getMaxElement(times);
	
	var getPlayerColor = function (names) {
		if (names === 'Вы') {
			return 'rgba(255, 0, 0, 1)';
		} else {
			return 'hsl(210, ' + 50 + Math.random() + '%, 75%)';
    }
  };
  
	for (var i = 0; i < names.length; i++){
	
	var playerTime = Math.round(times[i]);
	ctx.fillStyle = '#000000';
	ctx.fillText(playerTime, CLOUD_X + GAP + GAP_X * i, CLOUD_Y * 10 + ((BAR_HEIGHT * times[i]) / maxTime) + GAP);
	
	ctx.fillStyle = getPlayerColor(names[i]);
	
	ctx.fillText(names[i], CLOUD_X + GAP + GAP_X * i, textCordY);
	ctx.fillRect(CLOUD_X + GAP + GAP_X * i, CLOUD_Y * 10, BAR_WIDTH, ((BAR_HEIGHT * times[i]) / maxTime));
	};
	
	
	
};