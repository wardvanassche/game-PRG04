import {Color, Font, FontUnit, Label, Scene, Vector, Actor, CollisionType, vec} from "excalibur";
import {Resources, ResourceLoader } from './resources.js'

export class gameOver extends Scene {
    constructor() {
        super();
    }
    engine
    score
    onInitialize(_engine) {
        super.onInitialize(_engine);
        this.button = new Actor({
            z: 100,
            x: 700,
            y: 520,
            width: Resources.retryButton.width,
            height: Resources.retryButton.height,
            collisionType: CollisionType.PreventCollision
        })
        this.button.graphics.use(Resources.retryButton.toSprite())
        this.button.actions.scaleTo(vec(3.5,3.5),vec(7,7))
        this.button.on('pointerup', () => {
            location.reload();
        })
        this.add(this.button)
    }
}