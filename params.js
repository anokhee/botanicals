let params = {
  iterations: {
    value: 4,
    typeOfInput: "dropdown",
    inputLabel: "Iterations",
    inputRange: [0, 5],
  },
  angleOff: {
    value: 10,
    typeOfInput: "range",
    inputLabel: "Stem Angle Offset",
    inputRange: [0, 100],
    inputStep: 0.1,
  },
  seedRange: {
    value: 1,
    typeOfInput: "range",
    inputLabel: "Stems Offset Seed",
    inputRange: [0, 5],
    inputStep: 0.1,
  },
  plantLength: {
    value: 30,
    typeOfInput: "range",
    inputLabel: "Plant Length",
    inputRange: [0, 100],
    inputStep: 1,
  },
  flowerSize: {
    value: 10,
    typeOfInput: "range",
    inputLabel: "Flower Size",
    inputRange: [0, 50],
    inputStep: 0.1,
  },
  flowerSides: {
    value: 10,
    typeOfInput: "range",
    inputLabel: "Number of Petals",
    inputRange: [0, 15],
    inputStep: 1,
  },
  flower: {
    color: "#FF0000",
  },
};
