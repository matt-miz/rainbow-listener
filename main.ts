radio.onReceivedValue(function (name, value) {
    if (name == "acc") {
        acceleration = value
    }
})
let acceleration = 0
radio.setGroup(77)
let strip = neopixel.create(DigitalPin.P1, 150, NeoPixelMode.RGB)
basic.forever(function () {
    basic.showNumber(acceleration)
})
basic.forever(function () {
    strip.showBarGraph(acceleration, 15)
    strip.show()
})
