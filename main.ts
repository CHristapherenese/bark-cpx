function barkTone () {
    music.setVolume(255)
    music.playTone(17500, music.beat(BeatFraction.Breve))
    light.showRing(
    "red red red red red red black red red red"
    )
    light.setPixelColor(6, 0xffff00)
    pause(1000)
    light.setAll(0x000000)
}
input.onLoudSound(function () {
    barkTone()
})
function boot () {
    light.showAnimation(light.rainbowAnimation, 1000)
    light.stopAllAnimations()
    light.setAll(0x000000)
}
input.buttonA.onEvent(ButtonEvent.Click, function () {
    barkTone()
})
input.setLoudSoundThreshold(200)
music.stopAllSounds()
boot()
