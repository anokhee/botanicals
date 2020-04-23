// This function creates a single petal from two continuous Bezier curves.
function makePetal() {
    let fcp = mainConfig.flowers.petalControlPoints;
    beginShape();
    vertex(fcp.cp1x, fcp.cp1y);
    bezierVertex(fcp.cp2x, fcp.cp2y, fcp.cp3x, fcp.cp3y, fcp.cp4x, fcp.cp4y);
    bezierVertex(fcp.cp3x, -fcp.cp3y, fcp.cp2x, -fcp.cp2y, fcp.cp1x, fcp.cp1y); // if first 2 numbers are changed to 20, 130 it becomes continuous
    endShape();
}

// This function creates a flower by rotating the petal created in 
// makePetals() around the pistal `petalCount * 2` number of times
function makeFlower() {
    stroke(baseColor.r, baseColor.g, baseColor.b, .5);
    strokeWeight(.25);
    let f = mainConfig.flowers.color;
    let rOff = Math.random() * (f.colorOff - f.colorOff) + f.colorOff;
    let gOff = Math.random() * (f.colorOff - f.colorOff) + f.colorOff;
    let bOff = Math.random() * (f.colorOff - f.colorOff) + f.colorOff;
    let brightOff = Math.random() * (200 - -200) + -200;
    fill(f.r + rOff + brightOff, f.g + gOff + brightOff, f.b + bOff + brightOff);

    let petalCount = (mainConfig.flowers.petalCount.max - mainConfig.flowers.petalCount.min) + mainConfig.flowers.petalCount.min;
    for (let i = 0; i < petalCount * 2; i++) {
        makePetal();
        rotate(PI / petalCount);
    }
    fill(f.pistilColor);
    ellipse(0, 0, mainConfig.flowers.pistilRadius);
    noLoop();
}