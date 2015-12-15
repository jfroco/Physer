# Physer
Physer is a WIP wrapper for Phaser for RapydScript

DISCLAIMER: I'm coding Physer according to the games I'm making, large portions of Phaser are not covered yet.

## Motivation

I love to create web (and native) games, but also I love Python.

Unfortunately Python is not very strong at the client-side. Javascript seems to be the winner. So I was resigned to learn JS.

Fortunately, I found [RapydScript](https://github.com/atsepkov/RapydScript). RapydScript is a translator from a subset/special version of Python to Javascript. The generated code is very easy to understand and it is very similar to plain JS.

Physer is a super simple "wrapper" for [Phaser](http://phaser.io). Phaser is one of the most important game frameworks in the JS/HTML5 arena and the documentation and examples are great.

I made Physer as a proof of concept, and to hide non-standard Python notation in my code editor (Sublime Text), like "new", but at the end of the day I was using it to make simple and fun games.

## Goal

I want to translate all [Phaser examples](http://phaser.io/examples) to RapydScript... I started with two that, I believe, are easy to understand and show how Physer works:


# How to use it

* Install node
* Install Rapydscript
* Download from here: Physer.pyj and copy in the same folder than your own pyj files
* Dowload from here: index.html (use it as an example)
* Import Physer
* Run: rapydscript your_file.pyj -o your_file.js -p
* Copy your_file.js, index.html and your game assets to your web server, or test it with "python -m SimpleHTTPServer"

# Examples

### One way collision

This example shows how to use Arcade Physics in a simple way

[Original example](http://phaser.io/examples/v2/arcade-physics/one-way-collision)

[Physer version](http://jfroco.github.io/one-way-collision.html)

```python
import Physer


class Example(Physer.State):

    def preload(self):
        self.game.load.spritesheet('gameboy',
                                   'assets/sprites/gameboy_seize_color_40x60.png',
                                   40, 60)
        self.game.load.image('atari', 'assets/sprites/atari130xe.png')

    def create(self):

        self.game.physics.startSystem(Physer.Physics.ARCADE)
        self.game.stage.backgroundColor = '#124184'

        self.sprite = self.game.add.sprite(300, 200, 'atari')
        self.sprite.name = 'atari'
        self.game.physics.enable(self.sprite, Physer.Physics.ARCADE)
        self.sprite.body.collideWorldBounds = True
        self.sprite.body.checkCollision.up = False
        self.sprite.body.checkCollision.down = False
        self.sprite.body.immovable = True

        self.sprite2 = self.game.add.sprite(350, 400, 'gameboy', 2)
        self.sprite2.name = 'gameboy'

        self.game.physics.enable(self.sprite2, Physer.Physics.ARCADE)
        self.sprite2.body.collideWorldBounds = True
        self.sprite2.body.bounce.setTo(1, 1)

        self.sprite3 = self.game.add.sprite(0, 210, 'gameboy', 4)

        self.game.physics.enable(self.sprite3, Physer.Physics.ARCADE)

        self.sprite3.name = 'gameboy2'
        self.sprite3.body.collideWorldBounds = True
        self.sprite3.body.bounce.setTo(1, 1)

        self.sprite2.body.velocity.y = -200
        self.sprite3.body.velocity.x = 200

    def update(self):
        self.game.physics.arcade.collide(self.sprite, self.sprite2)
        self.game.physics.arcade.collide(self.sprite, self.sprite3)

    def render(self):
        # self.game.debug.bodyInfo(self.sprite, 16, 24)
        self.game.debug.bodyInfo(self.sprite)
        # self.game.debug.bodyInfo(self.sprite2)


def main():
    Physer.log("Starting game")
    game = Physer.Game(800, 600,
                       Physer.CANVAS,
                       'physer-example',
                       None, False, False)
    game.state.add("Example", Example)
    game.state.start("Example")

if __name__ == '__main__':
    Physer.onload(main)


```

## Extending Sprites demo 2

This example is very complex in Javascript, but trivial to understand in Python/RapydScript

[Original version](http://phaser.io/examples/v2/sprites/extending-sprite-demo-2)

[Physer version](http://jfroco.github.io/extending-sprite-demo-2.html)

```python
import Physer


class MonsterBunny(Physer.Sprite):

    def __init__(self, game, rotate_speed):
        Physer.Sprite.__init__(self,
                               game,
                               game.world.randomX,
                               game.world.randomY,
                               'bunny')
        self.anchor.setTo(0.5, 0.5)
        self.rotateSpeed = rotate_speed
        random_scale = 0.1 + Physer.random()
        self.scale.setTo(random_scale, random_scale)
        game.add.existing(self)

    def update(self):
        self.angle += self.rotateSpeed


class Example(Physer.State):

    def preload(self):
        self.game.load.image('bunny', 'assets/sprites/bunny.png')

    def create(self):
        for i in range(0.1, 2, 0.1):
            MonsterBunny(self.game, i)


def main():
    Physer.log("Starting game")
    game = Physer.Game(800, 600,
                       Physer.CANVAS,
                       'physer-example',
                       None, False, False)
    game.state.add("Example", Example)
    game.state.start("Example")

if __name__ == '__main__':
    Physer.onload(main)

```

## Starstruck game

This example shows how to load a tiled map and apply simple Arcade Physics.

[Original version](http://phaser.io/examples/v2/games/starstruck)

[Physer vesion](http://jfroco.github.io/game-starstruck.html)

```python
import Physer


class Example(Physer.State):

    def preload(self):
        self.game.load.tilemap('level1', 'assets/games/starstruck/level1.json',
                               None, Physer.Tilemap.TILED_JSON)
        self.game.load.image('tiles-1', 'assets/games/starstruck/tiles-1.png')
        self.game.load.spritesheet('dude', 'assets/games/starstruck/dude.png',
                                   32, 48)
        self.game.load.spritesheet('droid',
                                   'assets/games/starstruck/droid.png',
                                   32, 32)
        self.game.load.image('starSmall', 'assets/games/starstruck/star.png')
        self.game.load.image('starBig', 'assets/games/starstruck/star2.png')
        self.game.load.image('background',
                             'assets/games/starstruck/background2.png')

    def create(self):

        self.facing = 'left'
        self.jumpTimer = 0
        self.game.physics.startSystem(Physer.Physics.ARCADE)

        self.game.stage.backgroundColor = '#000000'

        self.bg = self.game.add.tileSprite(0, 0, 800, 600, 'background')
        self.bg.fixedToCamera = True

        self.map = self.game.add.tilemap('level1')

        self.map.addTilesetImage('tiles-1')

        self.map.setCollisionByExclusion([13, 14, 15, 16, 46, 47, 48, 49, 50,
                                          51])

        self.layer = self.map.createLayer('Tile Layer 1')
        self.layer.resizeWorld()
        self.game.physics.arcade.gravity.y = 250

        self.player = self.game.add.sprite(32, 32, 'dude')
        self.game.physics.enable(self.player, Physer.Physics.ARCADE)

        self.player.body.bounce.y = 0.2
        self.player.body.collideWorldBounds = True
        self.player.body.setSize(20, 32, 5, 16)

        self.player.animations.add('left', [0, 1, 2, 3], 10, True)
        self.player.animations.add('turn', [4], 20, True)
        self.player.animations.add('right', [5, 6, 7, 8], 10, True)

        self.game.camera.follow(self.player)

        self.cursors = self.game.input.keyboard.createCursorKeys()
        self.jumpButton = self.game.input.keyboard.addKey(Physer.Keyboard.SPACEBAR)

    def update(self):

        self.game.physics.arcade.collide(self.player, self.layer)

        self.player.body.velocity.x = 0

        if self.cursors.left.isDown:
            self.player.body.velocity.x = -150
            if self.facing != 'left':
                self.player.animations.play('left')
                self.facing = 'left'
        elif self.cursors.right.isDown:
            self.player.body.velocity.x = 150
            if self.facing != 'right':
                self.player.animations.play('right')
                self.facing = 'right'
        else:
            if self.facing != 'idle':
                self.player.animations.stop()
                if self.facing == 'left':
                    self.player.frame = 0
                else:
                    self.player.frame = 5
            self.facing = 'idle'

        if self.jumpButton.isDown and \
           self.player.body.onFloor() and \
           self.game.time.now > self.jumpTimer:
            self.player.body.velocity.y = -250
            self.jumpTimer = self.game.time.now + 750

    def render(self):
        # self.game.debug.bodyInfo(self.player, 16, 24)
        pass


def main():
    Physer.log("Starting game")
    game = Physer.Game(800, 600,
                       Physer.CANVAS,
                       'physer-example',
                       None, False, False)
    game.state.add("Example", Example)
    game.state.start("Example")

if __name__ == '__main__':
    Physer.onload(main)

```
