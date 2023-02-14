let index2 = 0
function Vert_leftToRight () {
    for (let index = 0; index <= 4; index++) {
        led.plot(0, index)
    }
}
function topDown () {
    for (let index = 0; index <= 4; index++) {
        for (let index2 = 0; index2 <= 4; index2++) {
            led.plot(index2, index)
        }
        basic.pause(100)
    }
    basic.clearScreen()
}
function bottomToTop () {
    index2 = 4
    for (let index = 0; index <= 4; index++) {
        for (let index = 0; index <= 4; index++) {
            led.plot(index, index2)
        }
        basic.pause(100)
        index2 += -1
    }
    basic.clearScreen()
}
function rightToLeft () {
    for (let index = 0; index <= 4; index++) {
        led.plot(4 - index, 2)
        basic.pause(100)
    }
    basic.clearScreen()
}
function blinkLine () {
    led.plot(2, 2)
    led.plot(1, 2)
    led.plot(3, 2)
    led.plot(0, 2)
    led.plot(4, 2)
    basic.pause(100)
    basic.clearScreen()
}
function middleOut () {
    led.plot(2, 2)
    basic.pause(100)
    led.plot(3, 2)
    led.plot(1, 2)
    basic.pause(100)
    led.plot(4, 2)
    led.plot(0, 2)
    basic.pause(100)
    basic.clearScreen()
}
function leftToRight () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 2)
        basic.pause(100)
    }
    basic.clearScreen()
}
basic.forever(function () {
	
})
loops.everyInterval(200, function () {
    Vert_leftToRight()
})
