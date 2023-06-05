import { ImageSource, Sound, Resource, Loader } from "excalibur";
import backgroundImage from "../images/background.jpeg"
import carImage from "../images/car1.png"
import obstacleImage from "../images/car2.png"

const Resources = { 
  Background: new ImageSource(backgroundImage),
  Car: new ImageSource(carImage),
  Obstacle: new ImageSource(obstacleImage)
};
const ResourceLoader = new Loader([Resources.Background, Resources.Car, Resources.Obstacle]);

export { Resources, ResourceLoader };