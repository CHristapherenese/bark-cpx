function barkTone () {
    pins.A1.digitalWrite(true)
    light.setPixelColor(6, 0xffff00)
    pause(5000)
    pins.A1.digitalWrite(false)
    light.setPixelColor(6, 0x000000)
}
input.onLoudSound(function () {
    barkTone()
})
input.buttonA.onEvent(ButtonEvent.Click, function () {
    barkTone()
})
forever(function () {
    input.setLoudSoundThreshold(150)
})
