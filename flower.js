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
        xMax: 20,
        xMin: 10,

        yMax: 20,
        yMin: 10
    },
    innerRadius: {
        xMax: 10,
        xMin: 10,

        yMax: 10,
        yMin: 10
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

    beginShape();
    for (let i = 0; i < numVertices + 1; i++) {
        const angle = i * spacing;
        const x = cos(radians(angle)) * innerRadiusX;
        const y = sin(radians(angle)) * innerRadiusY;
        if (i == 0) {
            vertex(x, y);
        } else {
            const cAngle = angle - spacing / 2;
            const cX = cos(radians(cAngle)) * outerRadiusX;
            const cY = sin(radians(cAngle)) * outerRadiusY;
            quadraticVertex(cX, cY, x, y)
        }
    }
    endShape();

    fill(255, 255, 0);
    ellipse(0, 0, Math.random() * 7);
}