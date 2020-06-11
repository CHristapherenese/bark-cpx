def barkTone():
    music.set_volume(255)
    music.play_tone(17500, music.beat(BeatFraction.BREVE))
    light.show_ring("red red red red red red black red red red")
    light.set_pixel_color(6, 0xffff00)
    pause(1000)
    light.set_all(0x000000)

def on_loud_sound():
    barkTone()
input.on_loud_sound(on_loud_sound)

def on_switch_moved_right():
    pass
input.on_switch_moved(SwitchDirection.RIGHT, on_switch_moved_right)

def boot():
    light.show_animation(light.rainbow_animation, 1000)
    light.stop_all_animations()
    light.set_all(0x000000)

def on_button_a_click():
    barkTone()
input.button_a.on_event(ButtonEvent.CLICK, on_button_a_click)

input.set_loud_sound_threshold(200)
boot()