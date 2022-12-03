var baseColor = {
  r: Math.random() * 100,
  g: Math.random() * 100,
  b: Math.random() * 100,
};

var mainConfig = {
  flowers: {
    color: {
      r: baseColor.r,
      g: baseColor.g,
      b: baseColor.b,
      brightOff: {
        max: 100,
        min: 50,
      },
      colorOff: Math.random() * (100 - -60) + -60,
      pistilColor: [baseColor.r + 255, baseColor.g + 255, baseColor.b + 255],
    },
    scale: {
      min: 20,
      max: 20,
    },
    density: 1,
    petalControlPoints: {
      cp1x: Math.random() * (45 - -45 + -45),
      cp1y: 0,
      cp2x: Math.random() * (35 - -30 + -30),
      cp2y: Math.random() * (55 - -55 + -55),
      cp3x: Math.random() * (35 - -30 + -30),
      cp3y: Math.random() * (0 - -35 + -35),
      cp4x: 0,
      cp4y: 0,
    },
    petalCount: {
      min: 1,
      max: 5,
      randomOffset: 5,
    },
    pistilRadius: Math.random() * 30,
  },
  stems: {
    angle: {
      max: 32,
      min: 18,
    },
    color: {
      r: Math.random() * (120 - 90) + 90,
      g: Math.random() * (120 - 90) + 90,
      b: Math.random() * 80,
    },
    count: Math.floor(Math.random() * (8 - 6) + 6),
    randomSeed: Math.floor(Math.random() * (3 - 2.25) + 2.25),
    strokeWeight: 1.25,
  },
};
