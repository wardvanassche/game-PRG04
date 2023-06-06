import { Actor, Engine, Vector, GraphicsGroup } from "excalibur";
import { Resources } from "../resources.js";

export class Obstacle extends Actor {

    constructor() {
        super({
            width: Resources.Obstacle.width, 
            height: Resources.Obstacle.height,
        })
    }

    onInitialize(engine) {
        let obstacleImage = Resources.Obstacle.toSprite()
        this.graphics.anchor = new Vector(0, 0)
        this.graphics.add(obstacleImage)
        this.pos = new Vector(1000, 250)
        this.vel = new Vector(-500, 0)
        this.scale = new Vector(0.15, 0.15)

        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.on("exitviewport", (event) => this.resetPosition())
        this.on("pointerup", (event) => this.resetPosition())
    }

    resetPosition(){
        let yPos = 0;
        if (Math.random() * 10 < 5 ){
            yPos = 250;
        } else {
            yPos = 300;
        }

        this.pos = new Vector(Math.random() * (1500-800) + 800, yPos);
    }
}