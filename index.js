const init = () => {
  const html = document.getElementsByTagName("html").item(0),
    canvas = document.getElementsByTagName("canvas").item(0),
    c = canvas.getContext("2d");

  let flower;
  const gui = new dat.GUI();

  class Flower {
    constructor(x, y, size) {
      this.x = x;
      this.y = y;
      this.size = size;
    }

    buildFlower() {
      c.beginPath();
      c.rect(
        getResolution().w / 2 - this.size / 2,
        getResolution().h / 2 - this.size / 2,
        this.size,
        this.size
      );
      c.stroke();
    }
  }

  const resize = () => {
    canvas.width = w = window.innerWidth;
    canvas.height = h = window.innerHeight;
    console.log(`screen resolution: ${w}px × ${h}px`);
  };

  const getResolution = () => {
    return { w: canvas.width, h: canvas.height };
  };

  const setup = () => {
    c.clearRect(0, 0, getResolution().w, getResolution().h);
    flower = new Flower(getResolution().w, getResolution().h, 200);
    gui.add(flower, "size", 0, 200);
  };

  setup();

  const draw = (t) => {
    c.fillStyle = "rgba(255, 255, 255, .5)";
    c.fillRect(0, 0, w, h);

    flower.buildFlower();

    window.requestAnimationFrame(draw);
  };

  let w,
    h,
    last,
    i = 0,
    start = 0;

  window.removeEventListener("load", init);
  window.addEventListener("resize", resize);
  resize();
  window.requestAnimationFrame(draw);
};

window.addEventListener("load", init);
