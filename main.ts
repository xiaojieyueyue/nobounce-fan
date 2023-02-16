basic.showIcon(IconNames.Happy)
pins.setPull(DigitalPin.P1, PinPullMode.PullNone)
basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P1) == 1) {
        pins.digitalWritePin(DigitalPin.P2, 0)
    } else {
        pins.digitalWritePin(DigitalPin.P2, 1)
    }
})
