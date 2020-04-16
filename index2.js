var tree;
var max_dist = 100;
var min_dist = 10;

function setup() {
  createCanvas(400, 400);
  tree = new Tree();
}

function draw() {
  background(51);
  tree.show();
  tree.grow();
}
