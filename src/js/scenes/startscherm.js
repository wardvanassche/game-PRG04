import { Scene, Label, FontUnit, Font, Vector, Input, Engine, GameStartEvent } from "excalibur";
import { Resources, ResourceLoader } from "../resources";
import { Level1 } from "./level1";

export class Startscherm extends Scene {

    onInitialize(engine) {

        let label = new Label({
            text: 'Start Game',
            pos: new Vector(300, 300),
            font: new Font({
                family: 'impact',
                size: 24,
                unit: FontUnit.Px
            })
        })

        this.add(label)
        label.text = 'Press Enter To Start'

        const Level1 = new Level1();

        if (engine.input.keyboard.wasPressed(Input.Keys.Enter)) {
            game.goToScene('Level1');
        }
    }
}