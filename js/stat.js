'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 50;
var FONT_GAP = 20;
var TEXT_WIDTH = 50;
//var BAR_HEIGHT = 20;
var BAR_WIDTH = 40;
var barHeight = CLOUD_HEIGHT - GAP - FONT_GAP - GAP;  // 150
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

var barX = function (index) {
  return CLOUD_X + FONT_GAP * 2 + (GAP + BAR_WIDTH) * index;
};

console.log('Координата X: ' + barX(0));

var barY = function () {
  return CLOUD_HEIGHT - GAP + FONT_GAP;
};

// var calcBarHeigth = function (index) {
//   return -(barHeight * times[index]) / maxTime);
// };

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + CLOUD_Y, CLOUD_Y * 2, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#ffffff');

  ctx.fillStyle = fontColor;

  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + FONT_GAP, CLOUD_Y * 2 + FONT_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + FONT_GAP, CLOUD_Y * 4 + FONT_GAP);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    ctx.fillText(players[i], CLOUD_X + FONT_GAP * 2 + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - CLOUD_Y);

    if (players[i] === 'Вы') {
      ctx.fillStyle = barColorMe;
    } else {
      ctx.fillStyle = barColorOthers();
    }

    ctx.fillRect(barX(i), barY(), BAR_WIDTH, -(barHeight * times[i]) / maxTime);
    ctx.fillStyle = fontColor;
    ctx.fillText(Math.round(times[i]), barX(i), -(barHeight * times[i]) / maxTime - 10);
  }

  // ctx.fillText('Вы', CLOUD_X + FONT_GAP * 2 + (GAP + BAR_WIDTH) * 0, 260);
  // ctx.fillRect(140, CLOUD_HEIGHT - GAP + FONT_GAP, BAR_WIDTH, -140);
  // //ctx.fillRect(CLOUD_X + FONT_GAP * 2, CLOUD_Y);
  //
  // ctx.fillText('Кекс', CLOUD_X + FONT_GAP * 2 + (GAP + BAR_WIDTH) * 1, 260);
  // ctx.fillRect(230, CLOUD_HEIGHT - GAP + FONT_GAP, BAR_WIDTH, -120);
  //
  // ctx.fillText('Игорь', CLOUD_X + FONT_GAP * 2 + (GAP + BAR_WIDTH) * 2, 260);

  // for (var i = 0; i < players.length; i++) {
  //   ctx.fillText(players[i], CLOUD_X + GAP, CLOUD_Y + GAP + FONT_GAP + (GAP + BAR_HEIGHT) * i);
  //   ctx.fillRect(CLOUD_X + GAP + TEXT_WIDTH, CLOUD_Y + GAP + (GAP + BAR_HEIGHT) * i, (barWidth * times[i]) / maxTime, BAR_HEIGHT);
  // }
};
