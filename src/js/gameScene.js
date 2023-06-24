import { Actor, Engine, Scene, Vector } from "excalibur"
import { Resources, ResourceLoader } from './resources.js'
import { ScrollingBackground } from './background.js'
import { Car } from './car.js'
import { Obstacle } from './obstacle.js'

export class gameScene extends Scene {
    constructor() {
        super();
    }

    //score

    onInitialize(Engine) {
       this.StartLevel()
    }

    StartLevel(){
        const background = new ScrollingBackground();
        const car = new Car();
        const obstacle = new Obstacle();
        //score = 0;

        this.add(background);
        this.add(car);
        this.add(obstacle);
    }

    //scoreCounter(){
    //    this.score++
    //    console.log('${this.score}')
    //}
}