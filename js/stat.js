'use strict';
(function () {

  var renderCloud = function (ctx, x, y, color) {
    ctx.fillStyle = color;
    ctx.fillRect(x, y, Window.const.CLOUD_WIDTH, Window.const.CLOUD_HEIGHT);
  };

  window.renderStatistics = function (ctx, players, times) {
    renderCloud(ctx, Window.const.CLOUD_X + Window.const.GAP, Window.const.CLOUD_Y + Window.const.GAP, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, Window.const.CLOUD_X, Window.const.CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', Window.const.CLOUD_X + Window.const.TITLE_GAP, Window.const.GAP
      + Window.const.TITLE_GAP);
    ctx.fillText('Список результатов:', Window.const.CLOUD_X + Window.const.TITLE_GAP, Window.const.TITLE_GAP
      + Window.const.FONT_GAP);

    var maxTime = window.util.getMaxValue(times);

    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = '#000';

      ctx.fillText(players[i], Window.const.CLOUD_X + (Window.const.BAR_GAP *
        (i + Window.const.INDEX_MORE)) + (Window.const.BAR_WIDTH * i), (Window.const.CLOUD_HEIGHT + Window.const.GAP)
          - Window.const.TEXT_GAP);

      ctx.fillText(Math.round(times[i]), Window.const.CLOUD_X + (Window.const.BAR_GAP
        * (i + Window.const.INDEX_MORE)) + (Window.const.BAR_WIDTH * i), (Window.const.CLOUD_Y
          + Window.const.CLOUD_HEIGHT) - Window.const.BAR_WIDTH - (Window.const.BAR_HEIGHT
            * Math.round(times[i]) / maxTime) - Window.const.GAP);

      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 54, 255, ' + Math.random() + ')';
      }

      ctx.fillRect(Window.const.CLOUD_X + (Window.const.BAR_GAP * (i + Window.const.INDEX_MORE))
        + (Window.const.BAR_WIDTH * i), (Window.const.CLOUD_Y + Window.const.CLOUD_HEIGHT)
          - Window.const.BAR_WIDTH - (Window.const.BAR_HEIGHT * Math.round(times[i])
            / maxTime), Window.const.BAR_WIDTH, (Window.const.BAR_HEIGHT * Math.round(times[i]) / maxTime));
    }
  };
})();
