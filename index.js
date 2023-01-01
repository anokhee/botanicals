let gui = new dat.GUI();

let stemAnglesArr = [];

let params = {
  iterations: 1,
  angleOff: Math.random() * 20,
  seedRange: 3,
  lenMultiplier: 10,
  flower: {
    color: "red",
    size: 15,
    sides: 6,
  },
  stems: {
    randomOff: Math.random() * 10,
  },
};

let plant;

const init = () => {
  const html = document.getElementsByTagName("html").item(0),
    canvas = document.getElementsByTagName("canvas").item(0),
    c = canvas.getContext("2d");

  class Plant {
    constructor(x, y, iterations, len) {
      this.iterations = iterations;

      // x & y position
      this.x = x;
      this.y = y;

      // length of the stem
      this.len = len;
      this.lenMultiplier = params.lenMultiplier;

      // l-system
      this.angle = (Math.PI / 180) * params.angleOff;
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
    }

    generateLSystem() {
      this.len / params.lenMultiplier;
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
      this.turtle();
    }

    turtle() {
      c.resetTransform();
      c.translate(getResolution().w / 2, getResolution().h);

      for (let i = 0; i < this.sentence.length; i++) {
        const current = this.sentence[i];
        let randomSeed = new Math.seedrandom(this.sentence[i]);
        stemAnglesArr.push(randomSeed() * 2);

        if (current === "F" || current === "G") {
          line(c, 0, 0, 0, -this.len);
          c.translate(0, -this.len);
        } else if (current === "*") {
          this.flower(params.flower.sides, params.flower.size * 0.6);
        } else if (current === "o") {
          this.leaf(this.angle);
        } else if (current === "+") {
          let positiveAngleOff = this.angle * stemAnglesArr[i];
          c.rotate(this.angle + positiveAngleOff * params.seedRange);
        } else if (current === "-") {
          let negativeAngleOff = this.angle * stemAnglesArr[i];
          c.rotate(-this.angle - negativeAngleOff * params.seedRange);
        } else if (current === "[") {
          c.save();
        } else if (current === "]") {
          c.restore();
        }
      }
    }

    flower(sides, sideLength) {
      c.fillStyle = params.flower.color;
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
    window.requestAnimationFrame(draw);

    console.log(`screen resolution: ${w}px × ${h}px`);
  };

  const getResolution = () => {
    return { w: canvas.width, h: canvas.height };
  };

  const setBackground = () => {
    c.fillStyle = "white";
    c.rect(0, 0, getResolution().w, getResolution().h);
    c.fill();
  };

  const getIterations = () => {
    return params.iterations;
  };

  const makeGUI = () => {
    gui.destroy();
    gui = new dat.GUI();

    gui.add(params, "iterations", [1, 2, 3, 4, 5, 6]).onChange(setup);
    gui.add(plant, "len", 0, 100, 1).onChange(draw);
    gui.add(plant, "angle", 0, 1, 0.01).onChange(draw);
    gui.add(params, "seedRange", 0, 10, 0.05).onChange(draw);
    gui.add(params.flower, "size", 0, 100, 1).onChange(draw);
    gui.add(params.flower, "sides", 0, 12, 1).onChange(draw);
  };

  const setup = () => {
    plant = new Plant(
      getResolution().w,
      getResolution().h,
      getIterations(),
      50 / getIterations()
    );

    makeGUI();

    setBackground();
    plant.make();
    draw();
  };

  const draw = (t) => {
    c.resetTransform();
    setBackground();

    plant.turtle();
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
};

window.addEventListener("load", init);
