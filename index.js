let stemAnglesArr = [];
let plant;
let container;

const init = () => {
  mainCanvas = document.getElementById("mainContainer");
  flowerCanvas = document.getElementById("flowerContainer");
  c = mainCanvas.getContext("2d");
  flowerCtx = flowerCanvas.getContext("2d");

  class Plant {
    constructor(x, y, iterations) {
      this.iterations = iterations;

      // x & y position
      this.x = x;
      this.y = y;

      this.axiom = "F";
      this.sentence = this.axiom;
      this.rules = [];
      this.rules[0] = {
        a: "F",
        b: "G[+F*][-F*]GF*",
      };
      this.rules[1] = {
        a: "G",
        b: "GG",
      };
    }

    generateLSystem() {
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
      let angleOff = (Math.PI / 180) * params.angleOff.value;
      c.resetTransform();
      c.translate(getResolution().w / 2, getResolution().h);

      for (let i = 0; i < this.sentence.length; i++) {
        const current = this.sentence[i];
        let randomSeed = new Math.seedrandom(this.sentence[i]);
        stemAnglesArr.push(randomSeed() * 2);

        if (current === "F" || current === "G") {
          line(c, 0, 0, 0, -params.plantLength.value);
          c.translate(0, -params.plantLength.value);
        } else if (current === "*") {
          makeFlower(c, params.flowerSides.value, params.flowerSize.value, 1);
        } else if (current === "/") {
          makeFlower(
            c,
            params.flowerSides.value,
            params.flowerSize.value * 0.5,
            1
          );
        } else if (current === "o") {
          this.leaf(angleOff);
        } else if (current === "+") {
          let positiveAngleOff = angleOff * stemAnglesArr[i];
          c.rotate(angleOff + positiveAngleOff * params.seedRange.value);
        } else if (current === "-") {
          let negativeAngleOff = angleOff * stemAnglesArr[i];
          c.rotate(-angleOff - negativeAngleOff * params.seedRange.value);
        } else if (current === "[") {
          c.save();
        } else if (current === "]") {
          c.restore();
        }
      }
    }

    make() {
      for (let i = 0; i < this.iterations; i++) {
        plant.generateLSystem();
      }
    }
  }

  const createFlowerMaker = () => {
    flowerCtx.translate(flowerCanvas.width / 2, flowerCanvas.height / 2);
    makeFlower(flowerCtx, params.flowerSides.value, params.flowerSize.value, 5);
  };

  const resize = () => {
    mainCanvas.width = w = window.innerWidth * 0.6;
    mainCanvas.height = h = window.innerHeight * 0.95;

    flowerCanvas.width = window.innerWidth * 0.35;
    flowerCanvas.height = 350;
    window.requestAnimationFrame(draw);

    console.log(`screen resolution: ${w}px × ${h}px`);
  };

  const getResolution = () => {
    return { w: mainCanvas.width, h: mainCanvas.height };
  };

  const makeGUI = () => {
    container = document.getElementById("the-gui");

    for (const item in params) {
      let inputContainer = document.createElement("DIV");

      if (params[item].typeOfInput === "range") {
        let rangeSlider = document.createElement("INPUT");
        let inputLabel = document.createElement("LABEL");

        rangeSlider.setAttribute("type", "range");
        rangeSlider.setAttribute("min", params[item].inputRange[0]);
        rangeSlider.setAttribute("max", params[item].inputRange[1]);
        rangeSlider.setAttribute("step", params[item].inputStep);

        inputLabel.innerHTML = `${params[item].inputLabel}`;

        container.appendChild(inputContainer);
        inputContainer.appendChild(inputLabel);
        inputContainer.appendChild(rangeSlider);

        rangeSlider.addEventListener("input", function () {
          draw();

          params[item].default = params[item].value;
          params[item].value = this.value;
        });
      }
      inputContainer.style.display = "flex";
    }
  };

  const setup = () => {
    plant = new Plant(
      getResolution().w,
      getResolution().h,
      params.iterations.value
    );

    makeGUI();
    plant.make();
    draw();
  };

  const draw = (t) => {
    c.resetTransform();
    flowerCtx.resetTransform();
    setBackground(c, "white", getResolution().w, getResolution().h);
    setBackground(flowerCtx, "white", getResolution().w, getResolution().h);
    plant.turtle();

    createFlowerMaker();
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
