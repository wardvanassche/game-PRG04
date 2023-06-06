import { Actor, Engine, Vector, GraphicsGroup, Input } from "excalibur";
import { Resources, ResourceLoader } from "../resources.js";

export class ScrollingBackground extends Actor{

    offset

    constructor() {
        super()
    }

    onInitialize(engine) {
        let scrollImage = Resources.Background.toSprite()
        this.offset = scrollImage.width

        const group = new GraphicsGroup({
            members: [
                {
                    graphic: scrollImage,
                    pos: new Vector(0, 0)
                },
                {
                    graphic: scrollImage,
                    pos: new Vector(scrollImage.width, 0)
                },
                {
                    graphic: scrollImage,
                    pos: new Vector(scrollImage.width*2, 0)
                }
            ]
        })

        this.graphics.anchor = new Vector(0, 0)
        this.graphics.add(group)
        this.pos = new Vector(0, 0)
        this.vel = new Vector(-300, 0)
    }

    onPreUpdate(engine) {
        let kb = engine.input.keyboard

        if (engine.input.keyboard.wasPressed(Input.Keys.Space)) {
            this.vel = new Vector(-100, 0)
        }
    }

    onPostUpdate(engine) {
        if (this.pos.x < -this.offset) {
            this.pos = new Vector(0, 0)
        }
    }
}