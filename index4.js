var angle;
var axiom = 'F';
var sentence = axiom;
var len = 100;

var count = 0;
var count2 = 0;
var flowerArr = [];

var rules = [];
// rules[0] = {
//     a: 'F',
//     b: 'G[+F][-F]GF'
// };

// rules[1] = {
//     a: 'G',
//     b: 'GG'
// };

/* Fern-Style Plants */
rules[0] = {
    a: 'F',
    b: 'FF[-F][+F-F]'
};



function setup() {
    createCanvas(window.innerWidth, window.innerHeight);
    stroke(10);
    smooth();
}


function turtle() {
    resetMatrix();
    background(255);
    angle = radians(Math.random() * (25 - 15) + 15);
    translate(width / 2, height);
    let v = new p5.Vector(0, 0);
    flowerArr.push(v);
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        if (current == 'F' || current == 'G') {
            console.log('len', len);
            line(0, 0, 0, -len);
            line(-1, 0, 1, 0);
            translate(0, -len);
        } else if (current == '+') {
            let positiveRotation = angle;
            rotate(positiveRotation);
        } else if (current == '-') {
            let negativeRotation = -angle;
            rotate(negativeRotation);
        } else if (current == '[') {
            push();
        } else if (current == ']') {
            pop();
            count++;
        }
    }
}

function generateStems(iterations) {
    for (i = iterations; i > 0; i--) {
        branch();
        len *= .5;
    }
}

function generateFlowers() {
    for (i = 0; i < flowerArr.length; i++) {
        ellipse(flowerArr[i].x, flowerArr[i].y, 10);
    }
}

function draw() {
    generateStems(3);
    generateFlowers();
    translate(0, 0);
    noLoop();
}