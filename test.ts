function SplashText(parentSprite: Sprite, text: string) {
    tempText = textsprite.create(text, 0, 8)
    tempText.bottom = parentSprite.y
    tempText.x = parentSprite.x
    tempText.ay = 500
    tempText.vy = -130
    tempText.vx = randint(-35, 35)
    tempText.z = parentSprite.z + 1
    tempText.lifespan = randint(600, 700)
    tempText.setFlag(SpriteFlag.AutoDestroy, true)
    tempText.setFlag(SpriteFlag.Ghost, true)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    damageIndicators.showIndicator(mySprite, "-1")
})
let tempText: TextSprite = null
let mySprite: Sprite = null
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . b 5 5 b . . . 
    . . . . . . b b b b b b . . . . 
    . . . . . b b 5 5 5 5 5 b . . . 
    . b b b b b 5 5 5 5 5 5 5 b . . 
    . b d 5 b 5 5 5 5 5 5 5 5 b . . 
    . . b 5 5 b 5 d 1 f 5 d 4 f . . 
    . . b d 5 5 b 1 f f 5 4 4 c . . 
    b b d b 5 5 5 d f b 4 4 4 4 b . 
    b d d c d 5 5 b 5 4 4 4 4 4 4 b 
    c d d d c c b 5 5 5 5 5 5 5 b . 
    c b d d d d d 5 5 5 5 5 5 5 b . 
    . c d d d d d d 5 5 5 5 5 d b . 
    . . c b d d d d d 5 5 5 b b . . 
    . . . c c c c c c c c b b . . . 
    `, SpriteKind.Player)
controller.moveSprite(mySprite)
