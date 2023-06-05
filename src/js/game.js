import '../css/style.css'
import { Actor, Engine, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { ScrollingBackground } from './background.js'
import { Car } from './car.js'
import { Obstacle } from './obstacle.js'

export class Game extends Engine {

    constructor() {
        super({ width: 800, height: 600 })
        this.start(ResourceLoader).then(() => this.startGame())
    }

    startGame() {
      const background = new ScrollingBackground();
      const car = new Car();
      const obstacle = new Obstacle();

      this.add(background);
      this.add(car);
      this.add(obstacle);
    }
}

new Game()