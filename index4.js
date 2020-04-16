var angle;
var axiom = 'F';
var sentence = axiom;
var len = Math.random() * (150 - 120) + 120;

var arr = ['a'];

var rules = [];
// rules[0] = {
//     a: 'F',
//     b: 'G[+F][-F]GF'
// };

// rules[1] = {
//     a: 'G',
//     b: 'GG'
// };

rules[0] = {
    a: 'F',
    b: 'FF[+F][-F]'
};



function generate() {
    console.log(arr);
    len *= 0.5;
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
    createP(sentence);
    turtle();
}

function turtle() {
    strokeWeight(1);
    background(250);
    resetMatrix();
    translate(width / 2, height);
    stroke(15);
    for (var i = 0; i < sentence.length; i++) {
        var current = sentence.charAt(i);
        var randomSeed = Math.random() * 6;
        if (current == 'F' || current == 'G') {
            strokeWeight(1);
            line(0, 0, 0, -len - Math.random() * randomSeed);
            // ellipse(0, -len, 1);  
            translate(0, -len);
        } else if (current == '+') {
            rotate(angle * Math.random() * 2);
        } else if (current == '-') {
            rotate(-angle * Math.random() * 2);
        } else if (current == '[') {
            push();
        } else if (current == ']') {
            pop();
        }
    }
}

function setup() {
    createCanvas(400, 400);
    angle = radians(25);
    background(51);
    createP(axiom);
    turtle();
    var button = createButton('generate');
    button.mousePressed(generate);
}