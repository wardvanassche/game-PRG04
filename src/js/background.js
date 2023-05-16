import { Actor, Vector } from "excalibur"
import { Resources, ResourceLoader } from "./resources.js";

export class Background extends Actor {

    constructor(posX, posY) {
        super();

        this.graphics.use(Resources.Background.toSprite())
        this.pos = new Vector(posX, posY)
        this.vel = new Vector(0, 600)
    }

    onInitialize(engine) {
        this.on("exitviewport", (event) => this.resetPosition())
    }

    resetPosition() {
        this.pos = new Vector(640, -300)  
    }
}