var tree = [];
var count = 0;
var leaves = [];
var maxBranches = Math.floor(Math.random() * 10);

function setup() {
    createCanvas(400, 400);
    var a = createVector(width / 2, height);
    var b = createVector(width / 2, height - 100);
    var root = new Branch(a, b);

    tree[0] = root;
}

function generate() {
    while (count <= maxBranches) {
        console.log(maxBranches, 'maxbranches');
        console.log(count, 'count');
        for (var i = tree.length - 1; i >= 0; i--) {
            if (!tree[i].finished) {
                tree.push(tree[i].branchA());
                tree.push(tree[i].branchB());
            }
            tree[i].finished = true;
        }
        count++;
        if (count == maxBranches + 1){
            console.log("done");
        }
    }
}


function draw() {
    background(51);

    for (var i = 0; i < tree.length; i++) {
        tree[i].show();
    }

    for (var i = 0; i < leaves.length; i++) {
        noStroke();
        fill(255, 0, 200);
        ellipse(leaves[i].x, leaves[i].y, 8, 8);
    }

    generate();
}

function Branch(begin, end) {
    this.begin = begin;
    this.end = end;
    this.finished = false;

    this.jitter = function () {
        this.end.x += random(-1, 1);
        this.end.y += random(-1, 1);
    }

    this.show = function () {
        stroke(255);
        line(this.begin.x, this.begin.y, this.end.x, this.end.y);
    }

    this.branchA = function () {
        var mult = Math.random();
        var angle = Math.random() * 50;
        var dir = p5.Vector.sub(this.end, this.begin);
        console.log("end", this.end.x, "begin", this.begin.x);
        dir.rotate(radians(angle));
        dir.mult(mult);
        var newEnd = p5.Vector.add(this.end, dir);
        var b = new Branch(this.end, newEnd);
        return b;
    }

    this.branchB = function () {
        var mult = Math.random();
        var angle = Math.random() * 50;
        var dir = p5.Vector.sub(this.end, this.begin);
        dir.rotate(-radians(angle));
        dir.mult(mult);
        var newEnd = p5.Vector.add(this.end, dir);
        var b = new Branch(this.end, newEnd);
        return b;
    }
}