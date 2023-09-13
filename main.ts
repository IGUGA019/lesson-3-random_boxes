input.onButtonPressed(Button.B, function () {
    Button_pressed = Button_pressed + 1
    if (Button_pressed == 1) {
        led.plot(randint(0, 4), 0)
    }
    if (Button_pressed == 2) {
        led.plot(randint(0, 4), 1)
        led.plot(randint(0, 4), 1)
    }
    if (Button_pressed == 3) {
        led.plot(randint(0, 4), 2)
        led.plot(randint(0, 4), 2)
        led.plot(randint(0, 4), 2)
    }
    if (Button_pressed == 4) {
        led.plot(randint(0, 4), 3)
        led.plot(randint(0, 4), 3)
        led.plot(randint(0, 4), 3)
        led.plot(randint(0, 4), 3)
    }
    if (Button_pressed == 5) {
        led.plot(randint(0, 4), 4)
        led.plot(randint(0, 4), 4)
        led.plot(randint(0, 4), 4)
        led.plot(randint(0, 4), 4)
        led.plot(randint(0, 4), 4)
        Button_pressed = 0
    }
})
let Button_pressed = 0
Button_pressed = 0
loops.everyInterval(500, function () {
    led.setBrightness(randint(0, 255))
    basic.showIcon(IconNames.SmallDiamond)
})
basic.forever(function () {
    music.play(music.stringPlayable("C D E F G A B C5 ", 120), music.PlaybackMode.UntilDone)
    basic.pause(1000)
    music.play(music.stringPlayable("C C5 C C5 C C5 C C5 ", 120), music.PlaybackMode.UntilDone)
    basic.pause(1000)
    music.play(music.stringPlayable("C5 B A G F E D C ", 120), music.PlaybackMode.UntilDone)
    basic.pause(1000)
})
