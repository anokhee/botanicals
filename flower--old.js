var flower = {
    baseColor: {
        rMax: Math.random() * 255,
        rMin: Math.random() * 250,

        gMax: Math.random() * 255,
        gMin: Math.random() * 255,

        bMax: Math.random() * 250,
        bMin: Math.random() * 100
    },
    density: 1,
    numVertices: {
        max: 5,
        min: 5
    },
    outerRadius: {
        xMax: 25,
        xMin: 0,

        yMax: 25,
        yMin: 0
    },
    innerRadius: {
        xMax: 25,
        xMin: 0,

        yMax: 25,
        yMin: 0
    }
}

function makeFlower(sides, sideLength) {
    let r = (Math.random() * (flower.baseColor.rMax - flower.baseColor.rMin) + flower.baseColor.rMin);
    let g = (Math.random() * (flower.baseColor.gMax - flower.baseColor.gMin) + flower.baseColor.gMin);
    let b = (Math.random() * (flower.baseColor.bMax - flower.baseColor.bMin) + flower.baseColor.bMin)

    let numVertices = Math.floor(Math.random() * (flower.numVertices.max - flower.numVertices.min) + flower.numVertices.min);

    let outerRadiusX = Math.random() * (flower.outerRadius.xMax - flower.outerRadius.xMin) + flower.outerRadius.xMin;
    let outerRadiusY = Math.random() * (flower.outerRadius.yMax - flower.outerRadius.yMin) + flower.outerRadius.yMin;

    let innerRadiusX = Math.random() * (flower.innerRadius.xMax - flower.innerRadius.xMin) + flower.innerRadius.xMin;
    let innerRadiusY = Math.random() * (flower.innerRadius.yMax - flower.innerRadius.yMin) + flower.innerRadius.yMin;


    fill(r, g, b);
    const spacing = 360 / numVertices;

    for (let i = 0; i <= 5; i++) {
        makePetal();
        
    }
}

function makePetal() {
  
}