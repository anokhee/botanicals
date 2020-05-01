var baseColor = {
    r: Math.random() * 200,
    g: Math.random() * 200,
    b: Math.random() * 205
}

var mainConfig = {
    flowers: {
        color: {
            r: baseColor.r,
            g: baseColor.g,
            b: baseColor.b,
            brightOff: {
                max: 200,
                min: -200
            },
            colorOff: Math.random() * (100 - -60) + -60,
            pistilColor: [baseColor.r + 200, baseColor.g + 200, baseColor.b + 55],
        },
        scale: {
            min: 10,
            max: 25
        },
        density: 1,
        petalControlPoints: {
            cp1x: Math.random() * (45 - (-45) + -45),
            cp1y: 0,
            cp2x: Math.random() * (35 - (-30) + -30),
            cp2y: Math.random() * (55 - (-55) + -55),
            cp3x: Math.random() * (35 - (-30) + -30),
            cp3y: Math.random() * (0 - (-35) + -35),
            cp4x: 0,
            cp4y: 0,
        },
        petalCount: {
            min: 1,
            max: 4,
            randomOffset: 1
        },
        pistilRadius: Math.random() * 30,
    },
    stems: {
        angle : {
            max: 32,
            min: 18
        },
        color: {
            r: Math.random() * (120 - 90) + 90,
            g: Math.random() * (120 - 90) + 90,
            b: Math.random() * (80)
        },
        count: Math.floor(Math.random() * (8 - 6) + 6),
        randomSeed: Math.floor(Math.random() * (3 - 2.25) + 2.25),
        strokeWeight: 1.25
    }
}