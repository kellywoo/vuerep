import { requestAniFrame } from '@/util/util';
const requestAnimationFrame = requestAniFrame(20);

export default function () {
  let confetties, i,
    xpos = 0.9,
    h = 0,
    w = 0,
    PI_2 = 2 * Math.PI;
  const NUM_CONFETTI = 30,
    COLORS = [
      [ 81, 192, 191 ],
      [ 89, 173, 208],
      [ 112, 149, 225],
      // [ 65, 184, 131 ],
      [ 159, 163, 227 ],
      [ 243, 190, 205]
    ],
    canvas = document.getElementById('index_view'),
    context = canvas.getContext('2d');

  window.addEventListener('resize', resizeWindow, false);
  window.onload = function () {
    return setTimeout(resizeWindow, 0)
  }

  function resizeWindow () {
    w = canvas.width = window.innerWidth;
    return h = canvas.height = window.innerHeight
  }

  function range (a, b) {
    return (b - a) * Math.random() + a
  }

  function drawCircle (a, b, c, d) {
    context.beginPath();
    context.moveTo(a, b);
    context.bezierCurveTo(a - 17, b + 14, a + 13, b + 5, a - 5, b + 22);
    context.lineWidth = 2;
    context.strokeStyle = d;
    return context.stroke()
  }

  function drawCircle2 (a, b, c, d) {
    context.beginPath();
    context.moveTo(a, b);
    context.lineTo(a + 6, b + 9);
    context.lineTo(a + 12, b);
    context.lineTo(a + 6, b - 9);
    context.closePath();
    context.fillStyle = d;
    return context.fill()
  }

  function drawCircle3 (a, b, c, d) {
    context.beginPath();
    context.moveTo(a, b);
    context.lineTo(a + 5, b + 5);
    context.lineTo(a + 10, b);
    context.lineTo(a + 5, b - 5);
    context.closePath();
    context.fillStyle = d;
    return context.fill()
  }

  document.onmousemove = function (a) {
    return xpos = a.pageX / w
  };

  function Confetti () {
    this.style = COLORS[ ~~range(0, 5) ];
    this.rgb = 'rgba(' + this.style[ 0 ] + ',' + this.style[ 1 ] + ',' + this.style[ 2 ];
    this.r = ~~range(2, 6);
    this.r2 = 2 * this.r;
    this.replace()
  }

  Confetti.prototype.replace = function () {
    this.opacity = 0;
    this.dop = 0.03 * range(1, 4);
    this.x = range(-this.r2, w - this.r2);
    this.y = range(-20, h - this.r2);
    this.xmax = w - this.r;
    this.ymax = h - this.r;
    this.vx = range(0, 2) + 8 * xpos - 5;
    return this.vy = 0.7 * this.r + range(-1, 1)
  };
  Confetti.prototype.draw = function () {
    var a;
    this.x += this.vx;
    this.y += this.vy;
    this.opacity += this.dop;
    if ( this.opacity > 1 ) {
      this.opacity = 1;
      this.dop *= -1
    }
    if ( this.opacity < 0 || this.y > this.ymax ) {
      this.replace();
    }
    if ( !( (a = this.x) > 0 && a < this.xmax) ) {
      this.x = (this.x + this.xmax) % this.xmax;
    }
    drawCircle(~~this.x, ~~this.y, this.r, this.rgb + ',' + this.opacity + ')');
    drawCircle3(0.5 * ~~this.x, ~~this.y, this.r, this.rgb + ',' + this.opacity + ')');
    return drawCircle2(1.5 * ~~this.x, 1.5 * ~~this.y, this.r, this.rgb + ',' + this.opacity + ')')
  };

  function getConfetti () {
    var a, b, c;
    c = [];
    i = a = 1;
    for ( b = NUM_CONFETTI; b >= 1 ? a <= b : a >= b; i = b >= 1 ? ++a : --a ) c.push(new Confetti());
    return c;
  }

  confetties = getConfetti();
  function step () {
    var a, b, c, d;
    requestAnimationFrame(step);
    context.clearRect(0, 0, w, h);
    d = [];
    b = 0;
    for ( c = confetties.length; b < c; b++ ) {
      a = confetties[ b ];
      d.push(a.draw());
    }
    return d
  }

  step();
}
