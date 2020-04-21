// Declares a flower variable - this represents the entire flower, 
// including all its petals and the pistil. 
var flower;

function Flower() {
    this.petalCount = 3;
    this.pistilRadius = 5;
    this.cp1x = 0;
    this.cp1y = 0;
    this.cp2x = 30;
    this.cp2y = -25;
    this.cp3x = 6;
    this.cp3y = 15;
    this.cp4x = 0;
    this.cp4y = 0;

    this.color = [255, 255, 255];
}


function makePetals() {
    beginShape();
    vertex(flower.cp1x, flower.cp1y);
    bezierVertex(flower.cp2x, flower.cp2y, flower.cp3x, flower.cp3y, flower.cp4x, flower.cp4y);
    bezierVertex(flower.cp3x, -flower.cp3y, flower.cp2x, -flower.cp2y, flower.cp1x, flower.cp1y); // if first 2 numbers are changed to 20, 130 it becomes continuous
    endShape();
}

function makeFlower() {
    for (let i = 0; i < flower.petalCount * 2; i++) {
        fill(flower.color);
        strokeWeight(.5);
        makePetals();
        rotate(PI / flower.petalCount);
    }
    fill(230, 230, 0);
    ellipse(0, 0, flower.pistilRadius);
    noLoop();
}
