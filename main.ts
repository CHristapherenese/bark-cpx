function barkTone () {
    music.pewPew.play()
    light.showRing(
    `red red red red red red black red red red`
    )
    pins.A1.digitalWrite(true)
    light.setPixelColor(6, 0xffff00)
    pause(5000)
    pins.A1.digitalWrite(false)
    light.setAll(0x000000)
}
input.onLoudSound(function () {
    barkTone()
})
function boot () {
    for (let index = 0; index < 3; index++) {
        music.playTone(988, music.beat(BeatFraction.Whole))
        pause(1000)
    }
    light.showAnimation(light.rainbowAnimation, 1000)
    light.stopAllAnimations()
    light.setAll(0x000000)
}
input.buttonA.onEvent(ButtonEvent.Click, function () {
    barkTone()
})
input.setLoudSoundThreshold(200)
music.setVolume(100)
boot()
