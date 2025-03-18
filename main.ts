input.onButtonPressed(Button.A, function () {
    serial.writeLine(lastMsg)
})
radio.onReceivedValue(function (name, value) {
    lastMsg = "" + name + ": " + value
    serial.writeLine(lastMsg)
})
let lastMsg = ""
radio.setGroup(42)
lastMsg = "x"
serial.redirectToUSB()
basic.forever(function () {
    basic.showString(lastMsg)
})
