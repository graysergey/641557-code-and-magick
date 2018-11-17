

window.renderStatistics = function(ctx){

  ctx.fillStyle = '#8d9178';
  ctx.beginPath();
  ctx.moveTo(120, 150);
  ctx.bezierCurveTo(105, 105, 140, 55, 250, 70);
  ctx.bezierCurveTo(295, 15, 405, 10, 450, 70);
  ctx.bezierCurveTo(500, 55, 575, 90, 550, 140);
  ctx.bezierCurveTo(600, 140, 600, 180, 550, 210);
  ctx.bezierCurveTo(570, 240, 490, 280, 430, 270);
  ctx.bezierCurveTo(380, 300, 300, 300, 250, 270);
  ctx.bezierCurveTo(195, 280, 105, 260, 120, 220);
  ctx.bezierCurveTo(65, 195, 65, 155, 120, 150);
  ctx.closePath();
  ctx.fill();

  ctx.fillStyle = '#eeedd9';
  ctx.beginPath();
  ctx.moveTo(120, 140);
  ctx.bezierCurveTo(105, 105, 140, 55, 250, 60);
  ctx.bezierCurveTo(295, 15, 405, 10, 450, 60);
  ctx.bezierCurveTo(500, 55, 575, 90, 550, 130);
  ctx.bezierCurveTo(600, 140, 600, 180, 550, 200);
  ctx.bezierCurveTo(570, 240, 490, 280, 430, 260);
  ctx.bezierCurveTo(380, 300, 300, 300, 250, 260);
  ctx.bezierCurveTo(195, 280, 105, 260, 120, 210);
  ctx.bezierCurveTo(65, 195, 65, 155, 120, 140);
  ctx.closePath();
  ctx.fill();
};
