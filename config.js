var baseColor = {
    r: Math.random() * (200 - 100) + 100,
    g: Math.random() * (200 - 100) + 100,
    b: Math.random() * (200 - 100) + 100
}

var mainConfig = {
    flowers: {
        color: {
            r: baseColor.r,
            g: baseColor.g,
            b: baseColor.b,
            brightOff: {
                max: 100,
                min: -100
            },
            colorOff: Math.random() * (80 - -100) + -100,
            pistilColor: [baseColor.r + 180, baseColor.g + 200, baseColor.b + 25],
        },
        scale: {
            min: 10,
            max: 22
        },
        density: 1,
        petalControlPoints: {
            cp1x: Math.random() * (35 - (-35) + -25),
            cp1y: 0,
            cp2x: Math.random() * (35 - (-20) + -20),
            cp2y: Math.random() * (35 - (-35) + -25),
            cp3x: Math.random() * (35 - (-20) + -20),
            cp3y: Math.random() * (35 - (-35) + -25),
            cp4x: 0,
            cp4y: 0,
        },
        petalCount: {
            min: 1,
            max: 4,
            randomOffset: 1
        },
        pistilRadius: Math.random() * 35,
    },
    stems: {
        angle : {
            max: 32,
            min: 10
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