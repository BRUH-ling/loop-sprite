input.onGesture(Gesture.Shake, function () {
    basic.pause(500)
    for (let index = 0; index < 10000000000; index++) {
        basic.pause(500)
        Sprite.change(LedSpriteProperty.X, 1)
        if (Sprite.get(LedSpriteProperty.X) == 4) {
            Sprite.change(LedSpriteProperty.Y, 1)
        }
    }
})
let Sprite: game.LedSprite = null
Sprite = game.createSprite(0, 0)
basic.forever(function () {
	
})
