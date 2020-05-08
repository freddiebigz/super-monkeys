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
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (blueJumpCount <= 1) {
        blueGuy.vy = JUMPSPEED
        blueJumpCount += 1
    }
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.darkGroundNorth, function (sprite, location) {
    sprite.vy = 0
    tiles.placeOnRandomTile(sprite, sprites.builtin.forestTiles0)
})
let blueGuy: Sprite = null
let blueJumpCount = 0
let JUMPSPEED = 0
let GRAVITY = 250
JUMPSPEED = -120
blueJumpCount = 2
scene.setBackgroundColor(9)
tiles.setTilemap(tiles.createTilemap(
            hex`0a000b000005000000000000050000000000000000000000000000000000000000000000000000000000000000000303000003030000000000000000000000000000000000000000000000000303030303030000000300000000000003000000000000000000000004040404040404040404`,
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
            [myTiles.tile0,myTiles.tile1,sprites.builtin.crowd3,sprites.builtin.brick,sprites.dungeon.darkGroundNorth,sprites.builtin.forestTiles0],
            TileScale.Sixteen
        ))
let blueGuyleftimage = img`
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
let blueGuy_right_image = blueGuyleftimage.clone()
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
blueGuy.ay = GRAVITY
scene.centerCameraAt(80, 98)
game.onUpdate(function () {
    if (blueGuy.isHittingTile(CollisionDirection.Bottom)) {
        blueJumpCount = 0
    }
})
game.onUpdate(function () {
    if (blueGuy.vx < 0) {
        blueGuy.setImage(blueGuyleftimage)
    } else {
        blueGuy.setImage(blueGuy_right_image)
    }
})
