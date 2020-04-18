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

// rules[0] = {
//     a: 'F',
//     b: 'FF[FG][-FG]*'
// };

function setup() {
    createCanvas(630, 630);
    stroke(100, 100, 50);
    noFill();
    turtle();
}


function turtle() {
    background(255, 255, 250);
    strokeWeight(1);
    stroke(100, 100, 50);
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
            fill(random(255), random(255), random(255));
            flower(6, len * Math.random() * 2);
        } else if (current == 'o') {
            noStroke();
            fill(0, 255, 0);
            leaf(15, 5)
        } else if (current == '+') {
            strokeWeight(.5);
            stroke(100, 100, 50);
            let positiveRotation = angle * Math.random() * randomSeed;
            rotate(positiveRotation);
        } else if (current == '-') {
            strokeWeight(.5);
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

function flower(sides, sideLength) {
    const numVertices = 7;
    const spacing = 360 / numVertices;
    beginShape();
    for (let i = 0; i < numVertices + 1; i++) {
        const angle = i * spacing;
        const x = cos(radians(angle)) * sideLength / 2;
        const y = sin(radians(angle)) * sideLength / 2;

        if (i == 0) {
            vertex(x, y);
        } else {
            const cAngle = angle - spacing / 2;
            const cX = cos(radians(cAngle)) * sideLength;
            const cY = sin(radians(cAngle)) * sideLength;
            quadraticVertex(cX, cY, x, y)
        }
    }
    endShape();
    fill(255, 255, 0);
    ellipse(0, 0, sideLength / 2);
}

function leaf(leafWidth, leafHeight) {
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