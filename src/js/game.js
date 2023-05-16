import { Actor, Engine, Vector, Label, Color, Font } from "excalibur";
import { Resources, ResourceLoader } from "./resources.js";
import { Background } from "./background.js";
import { Car } from "./car.js";

export class Game extends Engine {
  constructor() {
    super({ width: 1280, height: 640 });
    this.start(ResourceLoader).then(() => this.startGame());
  }

  startGame() {
    
    const backgroundOne = new Background(640, -300)
    this.add(backgroundOne)

    const backgroundTwo = new Background(640, 0)
    this.add(backgroundTwo)

    const backgroundThree = new Background(640, 350 )
    this.add(backgroundThree)
    
    const car = new Car()
    this.add(car);



    const obstacle = new Obstacle()
    this.add(Obstacle)

    obstacle.enableCapturePointer = true;
    
    obstacle.on("pointerup", (event) => {
      obstacle.kill()
    });
    
    obstacle.graphics.use(Resources.Obstacle.toSprite());
    obstacle.pos = new Vector(640, 50);
    obstacle.scale = new Vector(0.2, 0.2);
    this.add(obstacle);
    
  }
}

new Game();
