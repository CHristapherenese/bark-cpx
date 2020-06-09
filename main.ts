function barkTone () {
    music.playTone(40000, music.beat(BeatFraction.Breve))
    light.showRing(
    `red red red red red red black red red red`
    )
    light.setPixelColor(6, 0xffff00)
    pause(5000)
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
