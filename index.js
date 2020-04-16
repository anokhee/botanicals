// variables: A B 
// axiom: A 
// rules: (A > AB), (B > A)

var angle; 
var axiom = "F";
var sentence = axiom;
var len = 100;

var rules = [];
rules[0] = {
	a: "F",
	b: "FF+[+F-F-F]-[-F+F+F]"
}

function generate(){
	len *= .5;
	var nextSentence = "";
	for (var i = 0; i < sentence.length; i++){
		var current = sentence.charAt(i);
		var found = false;
		for (var j =0; j < rules.length; j++){
			if(current == rules[j].a){
			nextSentence += rules[j].b;
			break;
			}
		}
		if (!found) {
			nextSentence += current;
		}
	}
		sentence = nextSentence;
		// createP(sentence);
		turtle();
}

function turtle() {
	background(51);
	stroke(255);
	translate(width/2, height);
	for (var i = 0; i < sentence.length; i++){
		var current = sentence.charAt(i);
		
		if (current == "F"){
			line(0, 0, 0, -len);
			translate(0, -len);
		} else if (current == "+"){
			rotate(PI/6);
		} else if (current == "-"){
			rotate(-PI/6);
		} else if (current == "["){
			push();
		} else if (current == "]"){
			pop();
		}
	}
}

function setup() {
	background(51);
	stroke(255);
	createCanvas(windowWidth, windowHeight);
	angle = radians(25);
	background(51);
	// createP(axiom);
	turtle();
	var button = createButton("generate");
	button.mousePressed(generate);
}

function draw() {

}