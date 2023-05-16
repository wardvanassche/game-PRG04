import { Actor } from "excalibur";

export class Obstacle extends Actor {

    constructor() {
        super();

        this.graphics.use(Resources.Obstacle.toSprite())
        this.width = Resources.Obstacle.width
        this.height = Resources.Obstacle.height
    }


}