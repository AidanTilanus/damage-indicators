enum IndicatorProperties {
    fontsize,
    gravity,
    initialvelocity,
    randomspread
}

enum IndicatorPropertiesGet {
    fontsize,
    gravity,
    initialvelocity,
    randomspread,
    color
}

//% color="#328da8" icon="⚔"
//% block="Damage Indicators"
//% groups="['Basic', 'Customization']"
namespace damageIndicators {
    let indicatorSprite: Sprite

    export class Indicator {
        text: string
        color: number
        fontSize: number
        gravity: number
        initialVelocity: number
        randomSpread: number

        constructor(text: string, color: number) {
            this.text = text
            this.color = color

            this.fontSize = 1
            this.gravity = 500
            this.initialVelocity = 130
            this.randomSpread = 35
        }

        show(x: number, y: number){
            indicatorSprite = textsprite.create(this.text, 0, this.color)
            indicatorSprite.setScale(this.fontSize, ScaleAnchor.Middle)
            indicatorSprite.bottom = y
            indicatorSprite.x = x
            indicatorSprite.ay = this.gravity
            indicatorSprite.vy = -this.initialVelocity
            indicatorSprite.vx = randint(-this.randomSpread, this.randomSpread)
            indicatorSprite.lifespan = randint(600, 700)
            indicatorSprite.setFlag(SpriteFlag.AutoDestroy, true)
            indicatorSprite.setFlag(SpriteFlag.Ghost, true)
        }
    }

    //% block="indicator with text $text and color $color"
    //% blockId="damageIndicatorsMakeIndicator"
    //% blockSetVariable="myIndicator"
    //% group="Basic"
    //% weight=100
    //% color.shadow="colorindexpicker"
    //% color.defl=1
    export function makeIndicator(text: string, color: number) {
        return new Indicator(text, color)
    }

    //% block="$sprite show $indicator"
    //% blockId="damageIndicatorsShowIndicatorOnSprite"
    //% group="Basic"
    //% sprite.shadow=variables_get
    //% sprite.defl=mySprite
    //% indicator.shadow=variables_get
    //% indicator.defl=myIndicator
    export function showIndicatorSprite(sprite: Sprite, indicator: Indicator) {
        indicator.show(sprite.x, sprite.y)
    }

    //% block="set $indicator $property to $value"
    //% blockId="damageIndicatorsSetProperty"
    //% weight=100
    //% group="Customization"
    //% indicator.shadow=variables_get
    //% indicator.defl=myIndicator
    export function setIndicatorProperty(indicator: Indicator, property: IndicatorProperties, value: number) {
        switch(property) {
            case IndicatorProperties.fontsize: {
                indicator.fontSize = value
            }
            case IndicatorProperties.gravity: {
                indicator.gravity = value
            }
            case IndicatorProperties.initialvelocity: {
                indicator.initialVelocity = value
            }
            case IndicatorProperties.randomspread: {
                indicator.randomSpread = value
            }
        }
    }

    //% block="change $indicator $property by $value"
    //% blockId="damageIndicatorsChangeProperty"
    //% weight=99
    //% group="Customization"
    //% indicator.shadow=variables_get
    //% indicator.defl=myIndicator
    export function changeIndicatorProperty(indicator: Indicator, property: IndicatorProperties, value: number) {
        switch (property) {
            case IndicatorProperties.fontsize: {
                indicator.fontSize += value
            }
            case IndicatorProperties.gravity: {
                indicator.gravity += value
            }
            case IndicatorProperties.initialvelocity: {
                indicator.initialVelocity += value
            }
            case IndicatorProperties.randomspread: {
                indicator.randomSpread += value
            }
        }
    }

    //% block="set $indicator text to $text"
    //% blockId="damageIndicatorsSetText"
    //% group="Customization"
    //% indicator.shadow=variables_get
    //% indicator.defl=myIndicator
    export function setIndicatorText(indicator: Indicator, text: string) {
        indicator.text = text
    }

    //% block="set $indicator color to $color"
    //% blockId="damageIndicatorsSetColor"
    //% group="Customization"
    //% indicator.shadow=variables_get
    //% indicator.defl=myIndicator
    //% color.shadow=colorindexpicker
    //% color.defl=1
    export function setIndicatorColor(indicator: Indicator, color: number) {
        indicator.color = color
    }

    //% block="$indicator $property"
    //% blockId="damageIndicatorsGetProperty"
    //% group="Customization"
    //% indicator.shadow=variables_get
    //% indicator.defl=myIndicator
    export function getIndicatorProperty(indicator: Indicator, property: IndicatorPropertiesGet) {
        switch (property) {
            case IndicatorPropertiesGet.fontsize: {
                return indicator.fontSize
            }
            case IndicatorPropertiesGet.gravity: {
                return indicator.gravity
            }
            case IndicatorPropertiesGet.initialvelocity: {
                return indicator.initialVelocity
            }
            case IndicatorPropertiesGet.randomspread: {
                return indicator.randomSpread
            }
            case IndicatorPropertiesGet.color: {
                return indicator.color
            }
        }
    }

    //% block="$indicator text"
    //% blockId="damageIndicatorsGetText"
    //% group="Customization"
    //% indicator.shadow=variables_get
    //% indicator.defl=myIndicator
    export function getIndicatorText(indicator: Indicator) {
        return indicator.text
    }
}
