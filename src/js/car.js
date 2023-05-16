import { Actor, Vector } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";

export class Car extends Actor {
    
    constructor(){
        super();

        this.graphics.use(Resources.Car.toSprite())
        this.pos = new Vector(750, 440)
        this.scale = new Vector(0.3, 0.3)
    }
}