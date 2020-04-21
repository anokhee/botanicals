// Declares a flower variable - this represents the entire flower, 
// including all its petals and the pistil. 
var flower;

var flowerConfig = {
    petalCount: {
        min: 2,
        max: 5,
        randomOffset: 1
    },
    baseColor: {
        r: Math.random() * 150, 
        g: Math.random() * 150, 
        b: Math.random() * 150
    }
}

function Flower() {
    this.petalCount = Math.floor(Math.random() * (flowerConfig.petalCount.max - flowerConfig.petalCount.min) + flowerConfig.petalCount.min);
    this.pistilRadius = Math.random() * 20;
    this.cp1x = Math.random() * (45 - (-45) + -45);
    this.cp1y = 0;
    this.cp2x = Math.random() * (45 - (-20) + -20);
    this.cp2y = Math.random() * (45 - (-45) + -45);
    this.cp3x = Math.random() * (45 - (-20) + -20);
    this.cp3y = Math.random() * (45 - (-45) + -45);
    this.cp4x = 0;
    this.cp4y = 0;

    this.color = [255, 255, 255];
    this.stroke = [];
}


function makePetals() {
    beginShape();
    vertex(flower.cp1x, flower.cp1y);
    bezierVertex(flower.cp2x, flower.cp2y, flower.cp3x, flower.cp3y, flower.cp4x, flower.cp4y);
    bezierVertex(flower.cp3x, -flower.cp3y, flower.cp2x, -flower.cp2y, flower.cp1x, flower.cp1y); // if first 2 numbers are changed to 20, 130 it becomes continuous
    endShape();
}

function makeFlower() {
    let colorOff = Math.random() * 200;
    noStroke();
    fill(flowerConfig.baseColor.r + colorOff, flowerConfig.baseColor.g + colorOff, flowerConfig.baseColor.b + colorOff);
    for (let i = 0; i < flower.petalCount * 2; i++) {
        strokeWeight(.5);
        makePetals();
        rotate(PI / flower.petalCount);
    }
    fill(230, 230, 0);
    ellipse(0, 0, flower.pistilRadius);
    noLoop();
}