function sensor () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 1)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    distance = pins.pulseIn(DigitalPin.P2, PulseValue.High) / 58
    basic.pause(2000)
}
let distance = 0
basic.showIcon(IconNames.Heart)
distance = 0
basic.forever(function () {
    sensor()
    basic.showNumber(distance)
    if (distance < 10) {
        basic.showIcon(IconNames.Happy)
    } else {
        basic.showIcon(IconNames.Sad)
    }
})
