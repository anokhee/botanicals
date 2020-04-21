var axiom = 'F';
var sentence = axiom;
var len = 300;

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
    flower = new Flower();
    stroke(10);
    noFill();
    smooth();
    turtle();
    
}


function turtle() {
    background(11);
    strokeWeight(2);
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
            fill(Math.random() * 255, Math.random() * 255, Math.random() * 255);
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
    for (i = iterations - 1; i > 0 ; i--) {
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
    background(11);
    generateStems(5);
    noLoop();
}