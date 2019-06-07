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
var barColorMain = 'rgba(255, 0, 0, 1)';

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  for (var i = 0; i < arr.length; i++) {
    var maxElement = arr[i];

    for (var j = i + 1; j < arr.length; j++) {
      if (arr[j] > maxElement) {
        maxElement = arr[j];
        var swap = arr[i];
        arr[i] = maxElement;
        arr[j] = swap;
      }
    }
  }

  return maxElement;
};

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

    if (players[i] === 'Вы' ) {
      ctx.fillStyle = barColorMain;
    } else {
      ctx.fillStyle = 'lightgreen';
    }

    ctx.fillRect(CLOUD_X + FONT_GAP * 2 + (GAP + BAR_WIDTH) * i, CLOUD_HEIGHT - GAP + FONT_GAP, BAR_WIDTH, -(barHeight * times[i]) / maxTime);
    ctx.fillStyle = fontColor;
    ctx.fillText(Math.round(times[i]), CLOUD_X + FONT_GAP * 2 + (GAP + BAR_WIDTH) * i, 80);
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
