import { Actor, Engine, Scene, Vector } from "excalibur"
import { Resources, ResourceLoader } from '../resources.js'
import { ScrollingBackground } from '../objects/background.js'
import { Car } from '../objects/car.js'
import { Obstacle } from '../objects/obstacle.js'

export class Level1 extends Scene {

    onInitialize(Engine) {
       this.StartLevel()
    }

    StartLevel(){
        const background = new ScrollingBackground();
        const car = new Car();
        const obstacle = new Obstacle();

        this.add(background);
        this.add(car);
        this.add(obstacle);
    }
}