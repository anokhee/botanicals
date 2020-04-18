var axiom = 'F';
var sentence = axiom;
var len = Math.random() * (350 - 250) + 250;

var count = 0;
var flowerArr = [];

var rules = [];
rules[0] = {
    a: 'F',
    b: 'G[+F][-F]GF*'
};

rules[1] = {
    a: 'G',
    b: 'GG'
};



function setup() {
    createCanvas(windowWidth, windowHeight);
    stroke(100, 100, 50);
    noFill();
    turtle();
}


function turtle() {
    background(10);

    angle = radians(Math.random() * (25 - 15) + 15);
    resetMatrix();
    translate(width / 2, height);
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        var randomSeed = Math.random() * (3 - (-3) + -3);
        if (current == '*' && i % flower.density === 0) {
            noStroke();
            makeFlower();
        } else if (current == 'o') {
            noStroke();
            fill(0, 255, 0);
            leaf(15, len * .15)
        } else if (current == 'F' || current == 'G') {
            stroke(30, 100, 44);
            line(0, 0, 0, -len);
            translate(0, -len);
        } else if (current == '+') {
            strokeWeight(1);
            stroke(100, 100, 50);
            let positiveRotation = angle * Math.random() * randomSeed;
            rotate(positiveRotation);
        } else if (current == '-') {
            strokeWeight(1);
            stroke(100, 100, 50);
            let negativeRotation = -angle * Math.random() * randomSeed;
            rotate(negativeRotation);
        } else if (current == '[') {
            stroke(100, 100, 50);
            push();
        } else if (current == ']') {
            stroke(100, 100, 50);
            pop();
            count++;
        }
    }
    if (i >= sentence.length) {
        finished = true;
    }
}

function leaf(leafWidth, leafHeight) {
    rect(-leafWidth, 0, leafWidth, leafHeight);
    rect(0, 0, leafWidth, leafHeight);
    // rect(leafWidth, 0, leafWidth, leafHeight);
}

function generateStems(iterations) {
    for (i = iterations - 1; i > 0; i--) {
        branch();
    }
}

function branch() {
    len *= Math.random() * (.52 - .45) + .45;
    var nextSentence = '';
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        var found = false;
        for (var j = 0; j < rules.length; j++) {
            if (current == rules[j].a) {
                found = true;
                nextSentence += rules[j].b;
                break;
            }
        }
        if (!found) {
            nextSentence += current;
        }
    }
    sentence = nextSentence;
    turtle();
}


function draw() {
    background(10);
    generateStems(5);
    noLoop();
}