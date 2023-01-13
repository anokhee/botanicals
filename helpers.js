function line(ctx, x1, y1, x2, y2, color) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.stroke();
}

function makeFlower(ctx, sides, sideLength, scale) {
  ctx.fillStyle = params.flower.color;
  ctx.beginPath();
  let angleIncrement = (Math.PI * 2) / sides;
  for (let i = 0; i <= sides; i++) {
    ctx.lineTo(
      Math.cos(angleIncrement * i) * sideLength * scale,
      Math.sin(angleIncrement * i) * sideLength * scale
    );
  }
  ctx.fill();
  ctx.stroke();
}

function setBackground(ctx, color, w, h) {
  ctx.fillStyle = color;
  ctx.rect(0, 0, w, h);
  ctx.fill();
}
