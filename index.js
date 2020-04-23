const axiom = 'F';
let len = Math.random() * ((window.innerHeight / 2.45) - window.innerHeight / 2.6) + window.innerHeight / 2.6;
let sentence = axiom;
let count = 0;

const rules = [];
rules[0] = {
    a: 'F',
    b: 'G[+F][-F]GF*'
};

rules[1] = {
    a: 'G',
    b: 'GG'
};

function setup() {
    createCanvas(windowWidth, windowHeight - 25);
}

function turtle() {
    background(11);
    angle = radians(Math.random() * (25 - 15) + 15);
    resetMatrix();
    translate(width / 2, height);
    for (var i = 0; i < sentence.length; i++) {
        strokeWeight(mainConfig.stems.strokeWeight);
        stroke(mainConfig.stems.color.r, mainConfig.stems.color.g, mainConfig.stems.color.b);
        var current = sentence.charAt(i);
        if (current == 'F' || current == 'G') {
            line(0, 0, 0, -len);
            translate(0, -len);
        } else if (current == '*') {
            if (i % mainConfig.flowers.density === 0) {
                scale(Math.random() * (len / (Math.random() * (45 - 10) + 10)));
                makeFlower();
            }
        } else if (current == '+') {
            let positiveRotation = angle * Math.random() * mainConfig.stems.randomSeed;
            rotate(positiveRotation);
        } else if (current == '-') {
            let negativeRotation = -angle * Math.random() * mainConfig.stems.randomSeed;
            rotate(negativeRotation);
        } else if (current == '[') {
            push();
        } else if (current == ']') {
            pop();
            count++;
        }
    }
    if (i >= sentence.length) {
        finished = true;
    }
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
    noFill();
    smooth();
    turtle();
    background(3, 3, 3);
    generateStems(mainConfig.stems.count);
    noLoop();
}