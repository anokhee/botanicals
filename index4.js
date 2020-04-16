var angle;
var axiom = 'F';
var sentence = axiom;
var len = Math.random() * (350 - 220) + 220;

var count = 0;
var arr = [];

var iterations = Math.floor(Math.random() * (8 - 4) + 4);

var rules = [];
rules[0] = {
    a: 'F',
    b: 'G[+F][-F]GF'
};

rules[1] = {
    a: 'G',
    b: 'GG'
};

function turtle() {
   
    angle = radians(Math.random() * (25 - 15) + 15);
    noStroke();
    background(250);
    
    resetMatrix();
    translate(width / 2, height);
    stroke(15);
    for (var i = 0; i < sentence.length; i++) {
        finished = false;
        var current = sentence.charAt(i);
        var randomSeed = Math.random() * (2.5 - (-2.5) + -2.5);
        if (current == 'F' || current == 'G') {
            strokeWeight(1);
            line(0, 0, 0, -len - Math.random() * randomSeed);
            // ellipse(0, -len + Math.random() * 15, 3);
            arr.push([0, -len]);
            translate(0, -len);
            count++;
        } else if (current == '+') {
            rotate(angle * Math.random() * randomSeed);
        } else if (current == '-') {
            rotate(-angle * Math.random() * randomSeed);
        } else if (current == '[') {
            push();
        } else if (current == ']') {
            pop();
        }
    }
}

function generateStems(iterations) {
    for (i = 0; i < iterations; i++) {
        turtle();
        branch();
    }
}

function setup() {
    createCanvas(600, 600);
    background(51);
    turtle();
}

function draw() {
    generateStems(iterations);
    console.log(count, arr.length, sentence.length);
    console.log(arr);
    noLoop();
}