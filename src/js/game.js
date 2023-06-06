import { Engine, DisplayMode } from "excalibur"
import { ResourceLoader } from "./resources.js";
import { Startscherm } from "./scenes/startscherm"
import { Level1 } from './scenes/level1'
import { GameOver } from './scenes/gameover.js'

export class Game extends Engine {

  constructor(){
    super({ width: 800, height: 600, displayMode: DisplayMode.FitScreen });
    this.start(ResourceLoader).then(() => this.startGame())
  }

  startGame(){
      this.add('Level1', new Level1());

      this.goToScene('Level1')

  }
}

new Game();