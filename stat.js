'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var BAR_GAP = 50;
var TITLE_GAP = 25;
var FONT_GAP = 30;
var TEXT_GAP = 20;
var BAR_WIDTH = 40;
var BAR_HEIGHT = 150;

var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

window.renderStatistics = function(ctx) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';
  ctx.font = '16px PT Mono';
  ctx.fillText('Ура вы победили!', CLOUD_X + TITLE_GAP, GAP + TITLE_GAP);
  ctx.fillText('Список результатов:', CLOUD_X + TITLE_GAP, TITLE_GAP + FONT_GAP);

  var playerIndex = '0';
  var playerName = 'Вы';
  var players = ['Вы', 'Иван', 'Юлия'];

  ctx.fillText('Вы', CLOUD_X + (BAR_GAP * 1) + (BAR_WIDTH * playerIndex), (CLOUD_HEIGHT + GAP) - TEXT_GAP);
  ctx.fillStyle = 'rgba(255, 0, 0, 1)';
  ctx.fillRect(CLOUD_X + (BAR_GAP * 1) + (BAR_WIDTH * playerIndex), (CLOUD_Y + CLOUD_HEIGHT) - BAR_WIDTH - BAR_HEIGHT, BAR_WIDTH, BAR_HEIGHT);

  playerIndex = 1;
  playerName = 'Иван';

  ctx.fillStyle = '#000';
  ctx.fillText(playerName, CLOUD_X + (BAR_GAP * 2) + (BAR_WIDTH * 1), (CLOUD_HEIGHT + GAP) - TEXT_GAP);
  ctx.fillRect(CLOUD_X + (BAR_GAP * 2) + (BAR_WIDTH * 1), (CLOUD_Y + CLOUD_HEIGHT) - BAR_WIDTH - BAR_HEIGHT, BAR_WIDTH, BAR_HEIGHT);

  playerIndex = 2;
  playerName = 'Юлия';

  ctx.fillText(playerName, CLOUD_X + (BAR_GAP * 3) + (BAR_WIDTH * 2), (CLOUD_HEIGHT + GAP) - TEXT_GAP);
  ctx.fillRect(CLOUD_X + (BAR_GAP * 3) + (BAR_WIDTH * 2), (CLOUD_Y + CLOUD_HEIGHT) - BAR_WIDTH - BAR_HEIGHT, BAR_WIDTH, BAR_HEIGHT);
};
