(function(){
    "use strict";
    var ՐՏ_Temp;
    function ՐՏ_Iterable(iterable) {
        if (Array.isArray(iterable) || iterable instanceof String || typeof iterable === "string") {
            return iterable;
        }
        return Object.keys(iterable);
    }
    function ՐՏ_bind(fn, thisArg) {
        var ret;
        if (fn.orig) {
            fn = fn.orig;
        }
        if (thisArg === false) {
            return fn;
        }
        ret = function() {
            return fn.apply(thisArg, arguments);
        };
        ret.orig = fn;
        return ret;
    }
    function range(start, stop, step) {
        var length, idx, range;
        if (arguments.length <= 1) {
            stop = start || 0;
            start = 0;
        }
        step = arguments[2] || 1;
        length = Math.max(Math.ceil((stop - start) / step), 0);
        idx = 0;
        range = new Array(length);
        while (idx < length) {
            range[idx++] = start;
            start += step;
        }
        return range;
    }
    function len(obj) {
        if (Array.isArray(obj) || typeof obj === "string") {
            return obj.length;
        }
        return Object.keys(obj).length;
    }
    function eq(a, b) {
        var i;
        "\n    Equality comparison that works with all data types, returns true if structure and\n    contents of first object equal to those of second object\n\n    Arguments:\n        a: first object\n        b: second object\n    ";
        if (a === b) {
            return true;
        }
        if (Array.isArray(a) && Array.isArray(b) || a instanceof Object && b instanceof Object) {
            if (a.constructor !== b.constructor || a.length !== b.length) {
                return false;
            }
            if (Array.isArray(a)) {
                for (i = 0; i < len(a); i++) {
                    if (!eq(a[i], b[i])) {
                        return false;
                    }
                }
            } else {
                var ՐՏ_Iter0 = ՐՏ_Iterable(a);
                for (var ՐՏ_Index0 = 0; ՐՏ_Index0 < ՐՏ_Iter0.length; ՐՏ_Index0++) {
                    i = ՐՏ_Iter0[ՐՏ_Index0];
                    if (!eq(a[i], b[i])) {
                        return false;
                    }
                }
            }
            return true;
        }
        return false;
    }
    function ՐՏ_in(val, arr) {
        if (Array.isArray(arr) || typeof arr === "string") {
            return arr.indexOf(val) !== -1;
        } else {
            if (arr.hasOwnProperty(val)) {
                return true;
            }
            return false;
        }
    }
    function dir(item) {
        var arr;
        arr = [];
        for (var i in item) {
            arr.push(i);
        }
        return arr;
    }
    function ՐՏ_extends(child, parent) {
        child.prototype = Object.create(parent.prototype);
        child.prototype.constructor = child;
    }
    var ՐՏ_modules = {};
    ՐՏ_modules["Physer"] = {};

    (function(){
        var __name__ = "Physer";
        var Sprite, Keyboard, Physics, ScaleManager, Tilemap, AUTO, CANVAS, WEBGL, random;
        function log() {
            var args = [].slice.call(arguments, 0);
            console.log.apply(console, args);
        }
        function onload(fn) {
            window.onload = fn;
        }
        function Game(width, height, renderer, parent, state, transparent, antialias, physicsConfig) {
            if (typeof width === "undefined") width = 800;
            if (typeof height === "undefined") height = 800;
            if (typeof renderer === "undefined") renderer = Phaser.AUTO;
            if (typeof parent === "undefined") parent = "";
            if (typeof state === "undefined") state = null;
            if (typeof transparent === "undefined") transparent = false;
            if (typeof antialias === "undefined") antialias = true;
            if (typeof physicsConfig === "undefined") physicsConfig = null;
            return new Phaser.Game(width, height, renderer, parent, state, transparent, antialias, physicsConfig);
        }
        function Rectangle(x, y, w, h) {
            return new Phaser.Rectangle(x, y, w, h);
        }
        Sprite = Phaser.Sprite;
        function sprite_init(self, game, x, y, texture) {
            self.game = game;
            Phaser.Sprite.call(self, game, x, y, texture);
        }
        Sprite.__init__ = sprite_init;
        Keyboard = Phaser.Keyboard;
        Physics = Phaser.Physics;
        ScaleManager = Phaser.ScaleManager;
        Tilemap = Phaser.Tilemap;
        AUTO = Phaser.AUTO;
        CANVAS = Phaser.CANVAS;
        WEBGL = Phaser.WEBGL;
        random = Math.random;
        function to_number(number) {
            return new Number(number);
        }
        function State() {
            State.prototype.__init__.apply(this, arguments);
        }
        State.prototype.__init__ = function __init__(game){
            var self = this;
        };
        State.prototype.init = function init(){
            var self = this;
        };
        State.prototype.preload = function preload(){
            var self = this;
        };
        State.prototype.create = function create(){
            var self = this;
        };
        State.prototype.update = function update(){
            var self = this;
        };

        ՐՏ_modules["Physer"]["Sprite"] = Sprite;

        ՐՏ_modules["Physer"]["Keyboard"] = Keyboard;

        ՐՏ_modules["Physer"]["Physics"] = Physics;

        ՐՏ_modules["Physer"]["ScaleManager"] = ScaleManager;

        ՐՏ_modules["Physer"]["Tilemap"] = Tilemap;

        ՐՏ_modules["Physer"]["AUTO"] = AUTO;

        ՐՏ_modules["Physer"]["CANVAS"] = CANVAS;

        ՐՏ_modules["Physer"]["WEBGL"] = WEBGL;

        ՐՏ_modules["Physer"]["random"] = random;

        ՐՏ_modules["Physer"]["log"] = log;

        ՐՏ_modules["Physer"]["onload"] = onload;

        ՐՏ_modules["Physer"]["Game"] = Game;

        ՐՏ_modules["Physer"]["Rectangle"] = Rectangle;

        ՐՏ_modules["Physer"]["sprite_init"] = sprite_init;

        ՐՏ_modules["Physer"]["to_number"] = to_number;

        ՐՏ_modules["Physer"]["State"] = State;
    })();

    (function(){

        var __name__ = "__main__";


        var Physer = ՐՏ_modules["Physer"];
        
        function Example() {
            Example.prototype.__init__.apply(this, arguments);
        }
        ՐՏ_extends(Example, Physer.State);
        Example.prototype.preload = function preload(){
            var self = this;
            self.game.load.tilemap("level1", "assets/games/starstruck/level1.json", null, Physer.Tilemap.TILED_JSON);
            self.game.load.image("tiles-1", "assets/games/starstruck/tiles-1.png");
            self.game.load.spritesheet("dude", "assets/games/starstruck/dude.png", 32, 48);
            self.game.load.spritesheet("droid", "assets/games/starstruck/droid.png", 32, 32);
            self.game.load.image("starSmall", "assets/games/starstruck/star.png");
            self.game.load.image("starBig", "assets/games/starstruck/star2.png");
            self.game.load.image("background", "assets/games/starstruck/background2.png");
        };
        Example.prototype.create = function create(){
            var self = this;
            self.facing = "left";
            self.jumpTimer = 0;
            self.game.physics.startSystem(Physer.Physics.ARCADE);
            self.game.stage.backgroundColor = "#000000";
            self.bg = self.game.add.tileSprite(0, 0, 800, 600, "background");
            self.bg.fixedToCamera = true;
            self.map = self.game.add.tilemap("level1");
            self.map.addTilesetImage("tiles-1");
            self.map.setCollisionByExclusion([ 13, 14, 15, 16, 46, 47, 48, 49, 50, 51 ]);
            self.layer = self.map.createLayer("Tile Layer 1");
            self.layer.resizeWorld();
            self.game.physics.arcade.gravity.y = 250;
            self.player = self.game.add.sprite(32, 32, "dude");
            self.game.physics.enable(self.player, Physer.Physics.ARCADE);
            self.player.body.bounce.y = .2;
            self.player.body.collideWorldBounds = true;
            self.player.body.setSize(20, 32, 5, 16);
            self.player.animations.add("left", [ 0, 1, 2, 3 ], 10, true);
            self.player.animations.add("turn", [ 4 ], 20, true);
            self.player.animations.add("right", [ 5, 6, 7, 8 ], 10, true);
            self.game.camera.follow(self.player);
            self.cursors = self.game.input.keyboard.createCursorKeys();
            self.jumpButton = self.game.input.keyboard.addKey(Physer.Keyboard.SPACEBAR);
        };
        Example.prototype.update = function update(){
            var self = this;
            self.game.physics.arcade.collide(self.player, self.layer);
            self.player.body.velocity.x = 0;
            if (self.cursors.left.isDown) {
                self.player.body.velocity.x = -150;
                if (self.facing !== "left") {
                    self.player.animations.play("left");
                    self.facing = "left";
                }
            } else if (self.cursors.right.isDown) {
                self.player.body.velocity.x = 150;
                if (self.facing !== "right") {
                    self.player.animations.play("right");
                    self.facing = "right";
                }
            } else {
                if (self.facing !== "idle") {
                    self.player.animations.stop();
                    if (self.facing === "left") {
                        self.player.frame = 0;
                    } else {
                        self.player.frame = 5;
                    }
                }
                self.facing = "idle";
            }
            if (self.jumpButton.isDown && self.player.body.onFloor() && self.game.time.now > self.jumpTimer) {
                self.player.body.velocity.y = -250;
                self.jumpTimer = self.game.time.now + 750;
            }
        };
        Example.prototype.render = function render(){
            var self = this;
        };

        function main() {
            var game;
            Physer.log("Starting game");
            game = Physer.Game(800, 600, Physer.CANVAS, "physer-example", null, false, false);
            game.state.add("Example", Example);
            game.state.start("Example");
        }
        if (__name__ === "__main__") {
            Physer.onload(main);
        }
    })();
})();