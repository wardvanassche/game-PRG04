import { Actor, Vector, Input } from "excalibur";
import { Resources } from "./resources.js";

export class Car extends Actor {
    
    constructor() {
        super()
    }

    onInitialize(engine) {
        let carImage = Resources.Car.toSprite()
        this.graphics.add(carImage)
        this.anchor = new Vector(0, 0)
        this.pos = new Vector(30, 250)
        this.scale = new Vector(0.1, 0.1)
    }

    onPreUpdate(engine) {

        let kb = engine.input.keyboard

        if (kb.isHeld(Input.Keys.W) || kb.isHeld(Input.Keys.Up)) {
            this.pos = new Vector(30, 250)
        }
        if (kb.isHeld(Input.Keys.S) || kb.isHeld(Input.Keys.Down)) {
            this.pos = new Vector(30, 300)
        }
    }
}