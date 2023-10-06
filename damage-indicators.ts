//% color="#7e1db3"
//% block="Damage Indicators"
namespace damageIndicators {
    let indicator: Sprite
    
    //% block="$parent show a text indicator with the text $text|| and the color $color with gravity $gravity and a initial velocity of $initialVelocity"
    //% blockId=damageindicatorsshowindicator
    //% inlineInputMode=inline
    //% parent.shadow=variables_get
    //% parent.defl=mySprite
    //% text.defl="-1"
    //% color.shadow="colorindexpicker"
    //% color.defl=1
    //% gravity.defl=500
    //% initialVelocity.defl=130
    export function showIndicator(parent: Sprite, text: string, color?: number, gravity?: number, initialVelocity?: number) {
        indicator = textsprite.create(text, 0, color)
        indicator.bottom = parent.y
        indicator.x = parent.x
        indicator.ay = gravity
        indicator.vy = -initialVelocity
        indicator.vx = randint(-35, 35)
        indicator.z = parent.z + 1
        indicator.lifespan = randint(600, 700)
        indicator.setFlag(SpriteFlag.AutoDestroy, true)
        indicator.setFlag(SpriteFlag.Ghost, true)
    }
}