'use strict';
(function () {

  window.renderStatistics = function (ctx, players, times) {
    window.util.renderCloud(ctx, window.const.CLOUD_X + window.const.GAP, window.const.CLOUD_Y
      + window.const.GAP, 'rgba(0, 0, 0, 0.7)');
    window.util.renderCloud(ctx, window.const.CLOUD_X, window.const.CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';
    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', window.const.CLOUD_X + window.const.TITLE_GAP, window.const.GAP
      + window.const.TITLE_GAP);
    ctx.fillText('Список результатов:', window.const.CLOUD_X + window.const.TITLE_GAP, window.const.TITLE_GAP
      + window.const.FONT_GAP);

    var maxTime = window.util.getMaxValue(times);

    for (var i = 0; i < players.length; i++) {
      ctx.fillStyle = '#000';

      ctx.fillText(players[i], window.const.CLOUD_X + (window.const.BAR_GAP *
        (i + window.const.INDEX_MORE)) + (window.const.BAR_WIDTH * i), (window.const.CLOUD_HEIGHT + window.const.GAP)
          - window.const.TEXT_GAP);

      ctx.fillText(Math.round(times[i]), window.const.CLOUD_X + (window.const.BAR_GAP
        * (i + window.const.INDEX_MORE)) + (window.const.BAR_WIDTH * i), (window.const.CLOUD_Y
          + window.const.CLOUD_HEIGHT) - window.const.BAR_WIDTH - (window.const.BAR_HEIGHT
            * Math.round(times[i]) / maxTime) - window.const.GAP);

      if (players[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'rgba(0, 54, 255, ' + Math.random() + ')';
      }

      ctx.fillRect(window.const.CLOUD_X + (window.const.BAR_GAP * (i + window.const.INDEX_MORE))
        + (window.const.BAR_WIDTH * i), (window.const.CLOUD_Y + window.const.CLOUD_HEIGHT)
          - window.const.BAR_WIDTH - (window.const.BAR_HEIGHT * Math.round(times[i])
            / maxTime), window.const.BAR_WIDTH, (window.const.BAR_HEIGHT * Math.round(times[i]) / maxTime));
    }
  };
})();
