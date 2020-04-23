var baseColor = {
    r: Math.random() * 200,
    g: Math.random() * 200,
    b: Math.random() * 200
}

var mainConfig = {
    flowers: {
        color: {
            r: baseColor.r,
            g: baseColor.g,
            b: baseColor.b,
            colorOff: Math.random() * (255 - -10) + -10,
            pistilColor: [baseColor.r + 200, baseColor.g + 200, baseColor.b + 25]
        },
        density: Math.floor(Math.random() * (2 - 1) + 1),
        petalControlPoints: {
            cp1x: Math.random() * (45 - (-45) + -45),
            cp1y: 0,
            cp2x: Math.random() * (45 - (-30) + -30),
            cp2y: Math.random() * (45 - (-45) + -45),
            cp3x: Math.random() * (45 - (-30) + -30),
            cp3y: Math.random() * (45 - (-45) + -45),
            cp4x: 0,
            cp4y: 0,
        },
        petalCount: {
            min: 1,
            max: 5,
            randomOffset: 1
        },
        pistilRadius: Math.random() * 30,
    },
    stems: {
        color: {
            r: Math.random() * (120 - 90) + 90,
            g: Math.random() * (120 - 90) + 90,
            b: Math.random() * (50)
        },
        count: Math.floor(Math.random() * (8 - 4) + 4),
        randomSeed: Math.floor(Math.random() * (2.5 - 2) + 2),
        strokeWeight: 1.25
    }
}