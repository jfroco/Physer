(function(){
"use strict";
var ՐՏ_1;
function ՐՏ_extends(child, parent) {
    child.prototype = Object.create(parent.prototype);
    child.prototype.__base__ = parent;
    child.prototype.constructor = child;
}
function ՐՏ_Iterable(iterable) {
    var tmp;
    if (iterable.constructor === [].constructor || iterable.constructor === "".constructor || (tmp = Array.prototype.slice.call(iterable)).length) {
        return tmp || iterable;
    }
    return Object.keys(iterable);
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
function ՐՏ_eq(a, b) {
    var ՐՏitr1, ՐՏidx1;
    var i;
    if (a === b) {
        return true;
    }
    if (Array.isArray(a) && Array.isArray(b) || a instanceof Object && b instanceof Object) {
        if (a.constructor !== b.constructor || a.length !== b.length) {
            return false;
        }
        if (Array.isArray(a)) {
            for (i = 0; i < a.length; i++) {
                if (!ՐՏ_eq(a[i], b[i])) {
                    return false;
                }
            }
        } else {
            if (Object.keys(a).length !== Object.keys(b).length) {
                return false;
            }
            ՐՏitr1 = ՐՏ_Iterable(a);
            for (ՐՏidx1 = 0; ՐՏidx1 < ՐՏitr1.length; ՐՏidx1++) {
                i = ՐՏitr1[ՐՏidx1];
                if (!ՐՏ_eq(a[i], b[i])) {
                    return false;
                }
            }
        }
        return true;
    }
    return false;
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
        width = width === void 0 ? 800 : width;
        height = height === void 0 ? 800 : height;
        renderer = renderer === void 0 ? Phaser.AUTO : renderer;
        parent = parent === void 0 ? "" : parent;
        state = state === void 0 ? null : state;
        transparent = transparent === void 0 ? false : transparent;
        antialias = antialias === void 0 ? true : antialias;
        physicsConfig = physicsConfig === void 0 ? null : physicsConfig;
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
    var State = (ՐՏ_1 = function State() {
        State.prototype.__init__.apply(this, arguments);
    }, Object.defineProperties(ՐՏ_1.prototype, {
        __init__: {
            enumerable: true, 
            writable: true, 
            value: function __init__(game){
                var self = this;
            }
        },
        init: {
            enumerable: true, 
            writable: true, 
            value: function init(){
                var self = this;
            }
        },
        preload: {
            enumerable: true, 
            writable: true, 
            value: function preload(){
                var self = this;
            }
        },
        create: {
            enumerable: true, 
            writable: true, 
            value: function create(){
                var self = this;
            }
        },
        update: {
            enumerable: true, 
            writable: true, 
            value: function update(){
                var self = this;
            }
        }
    }), ՐՏ_1);
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

    var ՐՏ_2;
    var Physer = ՐՏ_modules["Physer"];
    
    var Example = (ՐՏ_2 = function Example() {
        Physer.State.prototype.__init__.apply(this, arguments);
    }, ՐՏ_extends(ՐՏ_2, Physer.State), Object.defineProperties(ՐՏ_2.prototype, {
        preload: {
            enumerable: true, 
            writable: true, 
            value: function preload(){
                var self = this;
                self.game.load.image("title", "assets/pics/catastrophi.png");
                self.game.load.spritesheet("button", "assets/buttons/flixel-button.png", 80, 20);
                self.game.load.bitmapFont("nokia", "assets/fonts/bitmapFonts/nokia16black.png", "assets/fonts/bitmapFonts/nokia16black.xml");
                self.game.load.audio("sfx", "assets/audio/SoundEffects/fx_mixdown.mp3");
            }
        },
        create: {
            enumerable: true, 
            writable: true, 
            value: function create(){
                var self = this;
                self.game.add.image(0, 0, "title");
                self.fx = self.game.add.audio("sfx");
                self.fx.allowMultiple = true;
                self.fx.addMarker("alien death", 1, 1);
                self.fx.addMarker("boss hit", 3, .5);
                self.fx.addMarker("escape", 4, 3.2);
                self.fx.addMarker("meow", 8, .5);
                self.fx.addMarker("numkey", 9, .1);
                self.fx.addMarker("ping", 10, 1);
                self.fx.addMarker("death", 12, 4.2);
                self.fx.addMarker("shot", 17, 1);
                self.fx.addMarker("squit", 19, .3);
                self.makeButton("alien death", 600, 100);
                self.makeButton("boss hit", 600, 140);
                self.makeButton("escape", 600, 180);
                self.makeButton("meow", 600, 220);
                self.makeButton("numkey", 600, 260);
                self.makeButton("ping", 600, 300);
                self.makeButton("death", 600, 340);
                self.makeButton("shot", 600, 380);
                self.makeButton("squit", 600, 420);
            }
        },
        makeButton: {
            enumerable: true, 
            writable: true, 
            value: function makeButton(name, x, y){
                var self = this;
                var button, text;
                function click(button) {
                    self.fx.play(button.name);
                }
                button = self.game.add.button(x, y, "button", click, self, 0, 1, 2);
                button.name = name;
                button.scale.set(2, 1.5);
                button.smoothed = false;
                text = self.game.add.bitmapText(x, y + 7, "nokia", name, 16);
                text.x += button.width / 2 - text.textWidth / 2;
            }
        }
    }), ՐՏ_2);
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
