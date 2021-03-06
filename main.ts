namespace SpriteKind {
    export const redprojectile = SpriteKind.create()
    export const blueGuy = SpriteKind.create()
    export const blueProjectile = SpriteKind.create()
}
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
sprites.onOverlap(SpriteKind.redprojectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (otherSprite == blueGuy) {
        info.player2.changeLifeBy(-1)
        sprite.destroy()
    }
})
controller.player2.onButtonEvent(ControllerButton.B, ControllerButtonEvent.Pressed, function () {
    if (redGuy.image == redGuyrightimage) {
        projectile = sprites.createProjectileFromSprite(img`
. . 2 2 2 2 . . 
. 2 5 5 5 5 2 . 
2 5 . . . . 5 2 
2 5 . . . . 5 2 
2 5 . . . . 5 2 
2 5 . . . . 5 2 
. 2 5 5 5 5 2 . 
. . 2 2 2 2 . . 
`, redGuy, RING_VX, 0)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
. . 2 2 2 2 . . 
. 2 5 5 5 5 2 . 
2 5 . . . . 5 2 
2 5 . . . . 5 2 
2 5 . . . . 5 2 
2 5 . . . . 5 2 
. 2 5 5 5 5 2 . 
. . 2 2 2 2 . . 
`, redGuy, -1 * RING_VX, 0)
    }
    projectile.setKind(SpriteKind.redprojectile)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (blueGuy.image == blueGuy_right_image) {
        projectile = sprites.createProjectileFromSprite(img`
. . 8 8 8 8 . . 
. 8 5 5 5 5 8 . 
8 5 . . . . 5 8 
8 5 . . . . 5 8 
8 5 . . . . 5 8 
8 5 . . . . 5 8 
. 8 5 5 5 5 8 . 
. . 8 8 8 8 . . 
`, blueGuy, RING_VX, 0)
    } else {
        projectile = sprites.createProjectileFromSprite(img`
. . 8 8 8 8 . . 
. 8 5 5 5 5 8 . 
8 5 . . . . 5 8 
8 5 . . . . 5 8 
8 5 . . . . 5 8 
8 5 . . . . 5 8 
. 8 5 5 5 5 8 . 
. . 8 8 8 8 . . 
`, blueGuy, -1 * RING_VX, 0)
    }
    projectile.setKind(SpriteKind.blueProjectile)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.hazardLava0, function (sprite, location) {
    sprite.vy = 0
    tiles.placeOnRandomTile(sprite, sprites.builtin.forestTiles0)
    if (sprite == redGuy) {
        info.changeLifeBy(-1)
    } else {
        info.player2.changeLifeBy(-1)
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (blueJumpCount <= 1) {
        blueGuy.vy = JUMPSPEED
        blueJumpCount += 1
    }
})
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    if (redJumpCount <= 1) {
        redGuy.vy = JUMPSPEED
        redJumpCount += 1
    }
})
info.onLifeZero(function () {
    game.splash("blueGuy", "win")
    game.over(true)
})
function createBlueGuy () {
    blueGuyleftimage = img`
. . . . f f f f f . . . . . . . 
. . . f 8 8 8 8 8 f . . . . . . 
. . f d d d d 8 8 8 f . . . . . 
. c d f d d f d 8 8 f f . . . . 
. c d f d d f d 8 8 d d f . . . 
c d e e d d d d 8 8 b d c . . . 
c d d d d c d d 8 8 b d c . f f 
c c c c c d d d 8 8 f c . f 8 f 
. f d d d d d 8 8 f f . . f 8 f 
. . f f f f f 8 8 8 8 f . f 8 f 
. . . . f 8 8 8 8 8 8 8 f f 8 f 
. . . f 8 f f 8 f 8 8 8 8 f f . 
. . . f 8 f f 8 f 8 8 8 8 f . . 
. . . f d b f d b f f 8 f . . . 
. . . f d d c d d b b d f . . . 
. . . . f f f f f f f f f . . . 
`
    blueGuy_right_image = blueGuyleftimage.clone()
    blueGuy_right_image.flipX()
    blueGuy = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f 8 8 8 8 8 f . . . . . . 
. . f d d d d 8 8 8 f . . . . . 
. c d f d d f d 8 8 f f . . . . 
. c d f d d f d 8 8 d d f . . . 
c d e e d d d d 8 8 b d c . . . 
c d d d d c d d 8 8 b d c . f f 
c c c c c d d d 8 8 f c . f 8 f 
. f d d d d d 8 8 f f . . f 8 f 
. . f f f f f 8 8 8 8 f . f 8 f 
. . . . f 8 8 8 8 8 8 8 f f 8 f 
. . . f 8 f f 8 f 8 8 8 8 f f . 
. . . f 8 f f 8 f 8 8 8 8 f . . 
. . . f d b f d b f f 8 f . . . 
. . . f d d c d d b b d f . . . 
. . . . f f f f f f f f f . . . 
`, SpriteKind.Player)
    controller.moveSprite(blueGuy, 100, 0)
    blueGuy.setPosition(136, 16)
    blueGuy.ay = GRAVITY
    info.setLife(10)
}
function createRedGuy () {
    redGuyleftimage = img`
. . . . f f f f f . . . . . . . 
. . . f 2 2 2 2 2 f . . . . . . 
. . f d d d d 2 2 2 f . . . . . 
. c d f d d f d 2 2 f f . . . . 
. c d f d d f d 2 2 d d f . . . 
c d e e d d d d 2 2 b d c . . . 
c d d d d c d d 2 2 b d c . f f 
c c c c c d d d 2 2 f c . f 2 f 
. f d d d d d 2 2 f f . . f 2 f 
. . f f f f f 2 2 2 2 f . f 2 f 
. . . . f 2 2 2 2 2 2 2 f f 2 f 
. . . f 2 f f 2 f 2 2 2 2 f f . 
. . . f 2 f f 2 f 2 2 2 2 f . . 
. . . f d b f d b f f 2 f . . . 
. . . f d d c d d b b d f . . . 
. . . . f f f f f f f f f . . . 
`
    redGuyrightimage = redGuyleftimage.clone()
    redGuyrightimage.flipX()
    redGuy = sprites.create(img`
. . . . f f f f f . . . . . . . 
. . . f 2 2 2 2 2 f . . . . . . 
. . f d d d d 2 2 2 f . . . . . 
. c d f d d f d 2 2 f f . . . . 
. c d f d d f d 2 2 d d f . . . 
c d e e d d d d 2 2 b d c . . . 
c d d d d c d d 2 2 b d c . f f 
c c c c c d d d 2 2 f c . f 2 f 
. f d d d d d 2 2 f f . . f 2 f 
. . f f f f f 2 2 2 2 f . f 2 f 
. . . . f 2 2 2 2 2 2 2 f f 2 f 
. . . f 2 f f 2 f 2 2 2 2 f f . 
. . . f 2 f f 2 f 2 2 2 2 f . . 
. . . f d b f d b f f 2 f . . . 
. . . f d d c d d b b d f . . . 
. . . . f f f f f f f f f . . . 
`, SpriteKind.Player)
    redGuy.ay = GRAVITY
    redGuy.setPosition(23, 16)
    controller.player2.moveSprite(redGuy, 100, 0)
    info.player2.setLife(10)
}
info.player2.onLifeZero(function () {
    game.splash("redGuy", "win")
    game.over(true)
})
sprites.onOverlap(SpriteKind.blueProjectile, SpriteKind.Player, function (sprite, otherSprite) {
    if (otherSprite == redGuy) {
        info.player1.changeLifeBy(-1)
        sprite.destroy()
    }
})
let redGuyleftimage: Image = null
let blueGuyleftimage: Image = null
let blueGuy_right_image: Image = null
let projectile: Sprite = null
let redGuyrightimage: Image = null
let redGuy: Sprite = null
let blueGuy: Sprite = null
let redJumpCount = 0
let blueJumpCount = 0
let JUMPSPEED = 0
let GRAVITY = 0
let RING_VX = 0
RING_VX = 120
GRAVITY = 250
JUMPSPEED = -120
blueJumpCount = 2
redJumpCount = 0
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(
            hex`0a000b000005000000000000050000000000000000000000000000000000000000000000000000000000000000000303000003030000000000000000000000000000000000000000000000000303030303030000000300000000000003000606060606060606060600000000000000000000`,
            img`
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . 2 2 . . 2 2 . . 
. . . . . . . . . . 
. . . . . . . . . . 
. . 2 2 2 2 2 2 . . 
. 2 . . . . . . 2 . 
. . . . . . . . . . 
. . . . . . . . . . 
`,
            [myTiles.tile0,myTiles.tile1,sprites.builtin.crowd3,sprites.builtin.brick,sprites.dungeon.darkGroundNorth,sprites.builtin.forestTiles0,sprites.dungeon.hazardLava0],
            TileScale.Sixteen
        ))
scene.centerCameraAt(80, 98)
createBlueGuy()
createRedGuy()
game.onUpdate(function () {
    if (blueGuy.vx < 0) {
        blueGuy.setImage(blueGuyleftimage)
    } else if (blueGuy.vx > 0) {
        blueGuy.setImage(blueGuy_right_image)
    }
})
game.onUpdate(function () {
    if (blueGuy.isHittingTile(CollisionDirection.Bottom)) {
        blueJumpCount = 0
    }
})
game.onUpdate(function () {
    if (redGuy.isHittingTile(CollisionDirection.Bottom)) {
        redJumpCount = 0
    }
})
game.onUpdate(function () {
    if (redGuy.vx < 0) {
        redGuy.setImage(redGuyleftimage)
    } else if (redGuy.vx > 0) {
        redGuy.setImage(redGuyrightimage)
    }
})
