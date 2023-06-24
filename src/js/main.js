import {Actor, DisplayMode, Engine, Input, Physics, Random, Vector,} from "excalibur"
import {Resources, ResourceLoader } from './resources.js'
import { gameScene } from "./gameScene.js";
import { startMenu } from "./startMenu.js";
import { gameOver } from "./gameOver.js";


ResourceLoader.suppressPlayButton = true


export class Game extends Engine {

    constructor() {
        super({width: 1400, height: 700, displayMode: DisplayMode.FitScreen});
        this.start(ResourceLoader).then(() => this.startGame());
        this.random = new Random(1337)
        Physics.useArcadePhysics()
        Physics.gravity = new Vector(0,0)
// this.showDebug(true)
    }

    startGame(engine) {

        this.engine = engine
        this.add("gameScene", new gameScene(this.engine))
        this.add("startMenu", new startMenu(this.engine))
        this.add("gameOver", new gameOver(this.engine))
        this.goToScene("startMenu")

    }

}
new Game()