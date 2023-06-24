import { Actor, Engine, Vector, GraphicsGroup, Label, Font, FontUnit, Color } from "excalibur";
import { Resources } from "./resources.js";

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
        this.pos = new Vector(1800, 315)
        this.vel = new Vector(-500, 0)
        this.scale = new Vector(0.15, 0.15)

        this.enableCapturePointer = true
        this.pointer.useGraphicsBounds = true
        this.on("exitviewport", (event) => this.resetPosition())
        this.on("pointerup", (event) => this.resetPosition())
    }

    resetPosition(){
        //this.engine.currentScene.scoreCounter
        let yPos = 0;
        if (Math.random() * 10 < 5 ){
            yPos = 270;
        } else {
            yPos = 315;
        }

        this.pos = new Vector(Math.random() * (1800-1500) + 1500, yPos);
    }
}