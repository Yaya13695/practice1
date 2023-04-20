radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber >= dice) {
        basic.showIcon(IconNames.Sad)
    }
    music.playMelody("C5 A B G A F G E ", 120)
    if (receivedNumber == dice) {
        basic.showIcon(IconNames.Happy)
    }
    music.playMelody("E D G F B A C5 B ", 120)
})
input.onGesture(Gesture.Shake, function () {
    dice = randint(1, 6)
    basic.showNumber(dice)
    radio.sendNumber(dice)
})
let dice = 0
radio.setGroup(185)
