var axiom = 'F';
var sentence = axiom;
var len = 300;

var count = 0;
var flowerArr = [];

var rules = [];
rules[0] = {
    a: 'F',
    b: 'G[o+F][o-F]GF*'
};

rules[1] = {
    a: 'G',
    b: 'GG'
};


function setup() {
    createCanvas(630, 630);
    stroke(10);
    noFill();
    turtle();
}


function turtle() {
    background(255, 255, 250);
    strokeWeight(1);
    stroke(1);
    angle = radians(Math.random() * (25 - 15) + 15);
    resetMatrix();
    translate(width / 2, height);
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        var randomSeed = 2;
        if (current == 'F' || current == 'G') {
            // ellipse(0, -len, 5);
            line(0, 0, 0, -len);
            translate(0, -len);
            // flower rule 
        } else if (current == '*' && i % 4 === 0) {
            noStroke();
            fill(255, 0, 0);
            flower(6, len * Math.random());
        } else if (current == 'o'){
            noStroke();
            fill(0, 255, 0);
            leaf(15, 5)
        } 
        else if (current == '+') {
            stroke(1);
            let positiveRotation = angle * Math.random() * randomSeed;
            rotate(positiveRotation);
        } else if (current == '-') {
            stroke(1);
            let negativeRotation = -angle * Math.random() * randomSeed;
            rotate(negativeRotation);
        } else if (current == '[') {
            stroke(1);
            push();
        } else if (current == ']') {
            stroke(1);
            pop();
            count++;
        }
    }
    if (i >= sentence.length) {
        finished = true;
    }
}

function flower(sides, sideLength) {
    ellipse(0, 0, sideLength);
}

function leaf(leafWidth, leafHeight){
    rect(0, 0, leafWidth, leafHeight);
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
    background(255, 255, 250);
    generateStems(5);
    noLoop();
}