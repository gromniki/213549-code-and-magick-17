'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 20;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP - FONT_GAP - GAP;
var barY = CLOUD_HEIGHT - GAP + FONT_GAP;
var fontColor = '#000000';
var barColorMe = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

var barColorOthers = function () {
  return 'rgba(0, 0, 255, ' + Math.random() + ')';
};

var getBarX = function (index) {
  return CLOUD_X + FONT_GAP * 2 + (GAP + BAR_WIDTH) * index;
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_Y, CLOUD_Y * 2, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = fontColor;
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y * 2 + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y * 4 + FONT_GAP);

  var maxTime = getMaxElement(times);

  var calculatedBarHeight = function (index) {
    return barHeight * times[index] / maxTime;
  };

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + FONT_GAP * 2 + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - CLOUD_Y);

    if (players[i] === 'Вы') {
      ctx.fillStyle = barColorMe;
    } else {
      ctx.fillStyle = barColorOthers();
    }

    ctx.fillRect(getBarX(i), barY, BAR_WIDTH, -calculatedBarHeight(i));
    ctx.fillStyle = fontColor;
    ctx.fillText(Math.round(times[i]), getBarX(i), barY - calculatedBarHeight(i) - 10);
  }
};
