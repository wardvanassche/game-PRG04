import { ImageSource, Sound, Resource, Loader } from "excalibur";
import backgroundImage from "../images/background.jpeg"
import carImage from "../images/car1.png"
import obstacleImage from "../images/car2.png"
import StartButton from "../images/StartButton.png"
import RetryButton from "../images/retryButton.png"

const Resources = { 
  Background: new ImageSource(backgroundImage),
  Car: new ImageSource(carImage),
  Obstacle: new ImageSource(obstacleImage),
  StartButton: new ImageSource(StartButton),
  retryButton: new ImageSource(RetryButton),
};
const ResourceLoader = new Loader([Resources.Background, Resources.Car, Resources.Obstacle, Resources.StartButton, Resources.retryButton]);

export { Resources, ResourceLoader };