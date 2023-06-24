import { Actor, Vector, Input, Engine, Scene } from "excalibur";
import { Resources } from "./resources.js";
import { Obstacle } from "./obstacle.js"

export class Car extends Actor {
    
    constructor() {
        super({ 
            width: Resources.Car.width/2, 
            height: Resources.Car.height/2,
        })
    }

    game
    engine

    onInitialize(engine) {
        this.game = engine
        let carImage = Resources.Car.toSprite()
        this.graphics.add(carImage)
        this.anchor = new Vector(0, 0)
        this.pos = new Vector(30, 315)
        this.scale = new Vector(0.1, 0.1)
        this.on('collisionstart', (event) => this.hitSomething(event))
    }

    hitSomething(event){
        if (event.other instanceof Obstacle) {
            console.log('hit');
            this.game.goToScene("gameOver")
        }
    }

    onPreUpdate(engine) {

        let kb = engine.input.keyboard

        if (kb.isHeld(Input.Keys.W) || kb.isHeld(Input.Keys.Up)) {
            this.pos = new Vector(30, 270)
        }
        if (kb.isHeld(Input.Keys.S) || kb.isHeld(Input.Keys.Down)) {
            this.pos = new Vector(30, 315)
        }
    }
}