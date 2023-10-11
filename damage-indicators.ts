//% color="#7e1db3" icon="⚔"
//% block="Damage Indicators"
namespace damageIndicators {
    let indicator: Sprite
    
    //% block="$sprite show a indicator with text $text|| and fontsize $fontSize and gravity $gravity and initial velocity $initialVelocity"
    //% blockId=damageindicatorsshowindicator
    //% inlineInputMode=inline
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% text.defl="-1"
    //% color.shadow="colorindexpicker"
    //% color.defl=1
    //% gravity.defl=500
    //% initialVelocity.defl=130
    //% fontSize.defl=1
    export function showIndicator(sprite: Sprite, text: string, color?: number, gravity?: number, initialVelocity?: number, fontSize?: number) {
        indicator = textsprite.create(text, 0, color)
        indicator.setScale(fontSize, ScaleAnchor.Middle)
        indicator.bottom = sprite.y
        indicator.x = sprite.x
        indicator.ay = gravity
        indicator.vy = -initialVelocity
        indicator.vx = randint(-35, 35)
        indicator.z = sprite.z + 1
        indicator.lifespan = randint(600, 700)
        indicator.setFlag(SpriteFlag.AutoDestroy, true)
        indicator.setFlag(SpriteFlag.Ghost, true)
    }
}