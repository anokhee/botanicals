const axiom = 'F';
let len = Math.random() * ((window.innerHeight / 2) - window.innerHeight / 2.8) + window.innerHeight / 2.8;
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

var mainConfig = {
    stems: {
        stemCount: Math.floor(Math.random() * (8 - 4) + 4)
    }
}


function setup() {
    createCanvas(windowWidth, windowHeight);
    flower = new Flower();
    stroke(10);
    noFill();
    smooth();
    turtle();

}


function turtle() {
    background(flowerConfig.baseColor.r - 150, flowerConfig.baseColor.g - 150, flowerConfig.baseColor.b - 150);
    strokeWeight(1.5);
    angle = radians(Math.random() * (25 - 15) + 15);
    resetMatrix();
    translate(width / 2, height);
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        var randomSeed = 2;
        if (current == 'F' || current == 'G') {
            line(0, 0, 0, -len);
            translate(0, -len);
        } else if (current == '*') {
            scale(Math.random() * (len / 25));
            makeFlower();

        } else if (current == '+') {
            let positiveRotation = angle * Math.random() * randomSeed;
            rotate(positiveRotation);
        } else if (current == '-') {
            let negativeRotation = -angle * Math.random() * randomSeed;
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
        // console.log("done", count);
    }
}

function generateStems(iterations) {
    for (i = iterations - 1; i > 0; i--) {
        stroke(100, 100, 50);
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
    background(flowerConfig.baseColor.r - 50, flowerConfig.baseColor.g - 50, flowerConfig.baseColor.b - 50);
    generateStems(mainConfig.stems.stemCount);
    noLoop();
}