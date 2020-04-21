function setup() {
    createCanvas(windowWidth, windowHeight);

    // Instantiates the variable flower as a new Flower() object. 
    flower = new Flower();

    // The createGUI function creates a dat.GUI in the top right corner of the screen.
    // dat.GUI allows us to easily play around with attributes of the flower for testing/debugging.
    createGUI(); 
}

// Responsively resizes the canvas so that the flower is always in the middle.
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(12);

    strokeWeight(1);
    stroke(200, 200, 255);
    // Creates the grid, which in this case is just the x and y axes cutting through the origin. 
    generateGrid();

    // Sets the origin to the center of the screen. 
    translate(windowWidth / 2, windowHeight / 2);
    scale(5);
    makeFlower();


}

function makeFlower() {
    noStroke();
    for (let i = 0; i < flower.petalCount * 2; i++) {
        fill(flower.color);
        makePetals();
        rotate(PI / flower.petalCount);
    }
    fill(230, 230, 0);
    ellipse(0, 0, flower.pistilRadius);
    noLoop();
}

function makePetals() {
    beginShape();
    vertex(flower.cp1x, flower.cp1y);
    bezierVertex(flower.cp2x, -flower.cp2y, flower.cp3x, -flower.cp3y, flower.cp4x, flower.cp4y);
    bezierVertex(flower.cp3x, flower.cp3y, flower.cp2x, flower.cp2y, flower.cp1x, flower.cp1y); // if first 2 numbers are changed to 20, 130 it becomes continuous
    endShape();
}

function generateGrid() {
    line(windowWidth / 2, 0, windowWidth / 2, windowHeight);
    line(0, windowHeight / 2, windowWidth, windowHeight / 2);
}

function createGUI() {
    let gui = new dat.GUI();
    gui.add(flower, 'pistilRadius', 0, 100).name("Pistil Radius").onChange(redraw);
    gui.add(flower, 'petalCount', 0, 10).name("Petal Count").onChange(redraw);
    gui.addColor(flower, 'color').onChange(redraw);

    gui.add(flower, 'cp1x', -100, 100).name('ControlPoint1 - X').onChange(redraw);
    gui.add(flower, 'cp1y', -100, 100).name('ControlPoint1 - Y').onChange(redraw);

    gui.add(flower, 'cp2x', -100, 100).name('ControlPoint2 - X').onChange(redraw);
    gui.add(flower, 'cp2y', -100, 100).name('ControlPoint2 - Y').onChange(redraw);

    gui.add(flower, 'cp3x', -100, 100).name('ControlPoint3 - X').onChange(redraw);
    gui.add(flower, 'cp3y', -100, 100).name('ControlPoint3 - Y').onChange(redraw);

    gui.add(flower, 'cp4x', -100, 100).name('ControlPoint4 - X').onChange(redraw);
    gui.add(flower, 'cp4y', -100, 100).name('ControlPoint4 - Y').onChange(redraw);
}