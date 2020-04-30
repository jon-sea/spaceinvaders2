namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
f f f f f f f f f f f f f f f f 
`
    //% blockIdentity=images._tile
    export const tile2 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    sprite.destroy()
    otherSprite.destroy(effects.fire, 50)
    info.changeScoreBy(25)
    varCurrNumInvaders += -1
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (varLastTimeFired < game.runtime() - 500) {
        myLaser = sprites.createProjectileFromSprite(img`
1 
1 
1 
1 
1 
1 
`, myBaseShip, 0, -100)
        varLastTimeFired = game.runtime()
    }
})
function doLargeInvadorSetup () {
    myLargeInvaders = sprites.allOfKind(SpriteKind.Enemy)
    varMyIndex = 0
    for (let index = 0; index <= 5; index++) {
        myLargeInvaders[varMyIndex] = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . 1 f f 1 1 1 1 f f 1 . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . 1 1 1 1 1 f f 1 1 1 1 1 . . 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 . 1 1 . 1 1 . 1 1 . 1 1 . 1 
1 1 . 1 1 . 1 1 . 1 1 . 1 1 . 1 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        myLargeInvaders[varMyIndex].setPosition(20 + 20 * index, 20)
        myLargeInvaders[varMyIndex].setVelocity(varInvaderSpeed, 0)
        varMyIndex += 1
    }
    for (let index = 0; index <= 5; index++) {
        myLargeInvaders[varMyIndex] = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . 1 f f 1 1 1 1 f f 1 . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . 1 1 1 1 1 f f 1 1 1 1 1 . . 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 . 1 1 . 1 1 . 1 1 . 1 1 . 1 
1 1 . 1 1 . 1 1 . 1 1 . 1 1 . 1 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        myLargeInvaders[varMyIndex].setPosition(20 + 20 * index, 35)
        myLargeInvaders[varMyIndex].setVelocity(varInvaderSpeed, 0)
        varMyIndex += 1
    }
    for (let index = 0; index <= 5; index++) {
        myLargeInvaders[varMyIndex] = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . . 1 f f 1 1 1 1 f f 1 . . . 
. . . 1 1 1 1 1 1 1 1 1 1 . . . 
. . 1 1 1 1 1 f f 1 1 1 1 1 . . 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
1 1 . 1 1 . 1 1 . 1 1 . 1 1 . 1 
1 1 . 1 1 . 1 1 . 1 1 . 1 1 . 1 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKind.Enemy)
        myLargeInvaders[varMyIndex].setPosition(20 + 20 * index, 50)
        myLargeInvaders[varMyIndex].setVelocity(varInvaderSpeed, 0)
        varMyIndex += 1
    }
}
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let varMyIndex = 0
let myLargeInvaders: Sprite[] = []
let myLaser: Sprite = null
let varLastTimeFired = 0
let myBaseShip: Sprite = null
let varInvaderSpeed = 0
varInvaderSpeed = 5
doLargeInvadorSetup()
myBaseShip = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . 7 7 . . . . . . . 
. . . . . . . 7 7 . . . . . . . 
. . . . . . . 7 7 . . . . . . . 
. . . . . . . 7 7 . . . . . . . 
. . . . . . . 7 7 . . . . . . . 
. . . . . . 7 7 7 7 . . . . . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
. . 7 7 7 7 7 7 7 7 7 7 7 7 . . 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`, SpriteKind.Player)
myBaseShip.setPosition(80, 112)
myBaseShip.setFlag(SpriteFlag.StayInScreen, true)
controller.moveSprite(myBaseShip, 40, 0)
info.setScore(0)
varLastTimeFired = game.runtime() - 500
let varCurrNumInvaders = 18
let varDropAmount = 8
game.onUpdate(function () {
    varInvaderSpeed = Math.map(varCurrNumInvaders, 18, 1, 5, 50)
    if (varCurrNumInvaders == 0) {
        game.over(true)
    }
})
game.onUpdate(function () {
    for (let index = 0; index <= 17; index++) {
        if (myLargeInvaders[index].x > 150) {
            for (let index = 0; index <= 17; index++) {
                myLargeInvaders[index].y += varDropAmount
                myLargeInvaders[index].x += -2
                myLargeInvaders[index].vx = -1 * varInvaderSpeed
            }
        }
    }
    for (let index = 0; index <= 17; index++) {
        if (myLargeInvaders[index].x < 10) {
            for (let index = 0; index <= 17; index++) {
                myLargeInvaders[index].y += varDropAmount
                myLargeInvaders[index].x += 2
                myLargeInvaders[index].vx = varInvaderSpeed
            }
        }
    }
})
