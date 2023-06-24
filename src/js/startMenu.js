import {Actor, CollisionType, Scene, vec} from "excalibur"
import {Resources,ResourceLoader} from "./resources.js";

export class startMenu extends Scene {

    game
    engine

    onInitialize(engine) {
        this.game = engine

        this.StartButton = new Actor({
            z: 100,
            x: 720,
            y: 550,
            width: Resources.StartButton.width,
            height: Resources.StartButton.height,
            collisionType: CollisionType.PreventCollision
        })
        this.StartButton.graphics.use(Resources.StartButton.toSprite())
        this.StartButton.actions.scaleTo(vec(1.2,1.2),vec(1.2,1.2))
        this.StartButton.on('pointerup', () => {
            this.game.goToScene("gameScene")
            this.game.removeScene("gameScene")
        })

        this.add(this.StartButton)
    }
}