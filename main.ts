input.onSound(DetectedSound.Loud, function () {
    basic.showIcon(IconNames.Yes)
    basic.pause(200)
    pocet += 1
    if (pocet == 1) {
        Rover.MotorRunDual(255, 255)
    } else {
        Rover.MotorStopAll(MotorActions.Stop)
    }
    basic.clearScreen()
})
let pocet = 0
pocet = 0
input.setSoundThreshold(SoundThreshold.Loud, 140)
