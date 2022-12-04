const gui = new dat.GUI();

const init = () => {
  const html = document.getElementsByTagName("html").item(0),
    canvas = document.getElementsByTagName("canvas").item(0),
    c = canvas.getContext("2d");

  let params = {
    iterations: 4,
    flower: {
      size: 12,
      sides: 6,
    },
  };

  let plant;

  function line(x1, y1, x2, y2, color) {
    c.strokeStyle = color;
    c.beginPath();
    c.moveTo(x1, y1);
    c.lineTo(x2, y2);
    c.stroke();
  }

  class Plant {
    constructor(x, y, iterations, len) {
      this.x = x;
      this.y = y;
      this.len = len;
      this.iterations = iterations;

      this.angle = (Math.PI / 180) * 25;
      this.axiom = "F";
      this.sentence = this.axiom;
      this.rules = [];
      this.rules[0] = {
        a: "F",
        b: "G[+F][-F]GF*",
      };
      this.rules[1] = {
        a: "G",
        b: "GG",
      };

      this.lenMultiplier = 0.5;

      this.flowerSize = params.flower.size;
      this.flowerSides = params.flower.sides;
    }

    generateLSystem() {
      this.len *= this.lenMultiplier;
      let nextSentence = "";
      for (let i = 0; i < this.sentence.length; i++) {
        let current = this.sentence[i];
        let found = false;
        for (let j = 0; j < this.rules.length; j++) {
          if (current == this.rules[j].a) {
            found = true;
            nextSentence += this.rules[j].b;
            break;
          }
        }
        if (!found) {
          nextSentence += current;
        }
      }
      this.sentence = nextSentence;
      console.log(this.sentence);
      this.turtle();
    }

    turtle() {
      c.resetTransform();
      c.translate(getResolution().w / 2, getResolution().h);

      for (let i = 0; i < this.sentence.length; i++) {
        const current = this.sentence[i];

        if (current === "F" || current === "G") {
          line(0, 0, 0, -this.len);
          c.translate(0, -this.len);
        } else if (current === "*") {
          this.flower(this.flowerSides, this.flowerSize * 0.6);
        } else if (current === "+") {
          c.rotate(this.angle);
        } else if (current === "-") {
          c.rotate(-this.angle);
        } else if (current === "[") {
          c.save();
        } else if (current === "]") {
          c.restore();
        }
      }
    }

    flower(sides, sideLength) {
      c.fillStyle = "red";
      c.beginPath();
      let angleIncrement = (Math.PI * 2) / sides;
      for (let i = 0; i <= sides; i++) {
        c.lineTo(
          Math.cos(angleIncrement * i) * sideLength,
          Math.sin(angleIncrement * i) * sideLength
        );
      }
      c.fill();
      c.stroke();
    }

    make() {
      for (let i = 0; i < this.iterations; i++) {
        plant.generateLSystem();
      }
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

  const getIterations = () => {
    return params.iterations;
  };

  const setup = () => {
    plant = new Plant(
      getResolution().w,
      getResolution().h,
      getIterations(),
      200
    );

    gui.add(plant, "len", 0, params.iterations * 4);

    gui.add(plant, "angle", -1.8, 1.8, 0.05);
    gui.add(plant, "flowerSize", 0, 100);
    gui.add(plant, "flowerSides", 0, 12, 1);

    plant.make();
  };

  const draw = (t) => {
    c.resetTransform();
    c.fillStyle = "white";
    c.rect(0, 0, getResolution().w, getResolution().h);
    c.fill();

    plant.turtle();
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
  setup();
  window.requestAnimationFrame(draw);
};

window.addEventListener("load", init);
