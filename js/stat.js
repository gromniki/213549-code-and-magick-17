'use strict';

var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 200;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function (ctx) {
  renderCloud(ctx, 110, 60, 'rgba(0, 0, 0, 0.3)');
  renderCloud(ctx, 100, 50, '#fff');

  ctx.fillStyle = '#000';
  ctx.fillText('Вы', 110, 75);
  ctx.fillRect(160, 60, 430, 20);
};
