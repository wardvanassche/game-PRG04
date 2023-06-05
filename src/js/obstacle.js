import { Actor, Engine, Vector } from "excalibur";
import { Resources } from "./resources.js";

export class Obstacle extends Actor {
    
    constructor() {
        super()
        let obstacleImage = Resources.Obstacle.toSprite()
        this.graphics.add(obstacleImage)
        this.anchor = new Vector(0, 0)
        this.pos = new Vector(1000 , 250)
        this.scale = new Vector(0.15, 0.15)
        this.vel = new Vector(-500, 0)
    }
}