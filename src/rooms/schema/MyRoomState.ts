import { Schema, Context, type } from "@colyseus/schema";
export class Vec3 extends Schema {
  @type("number") x: number;
  @type("number") y: number;
  @type("number") z: number;
  constructor() {
    super();
    this.x = 0;
    this.y = 0;
    this.z = 0;
  }
}
class Car extends Schema {
  @type(Vec3) position: Vec3;
  @type(Vec3) eularAngle: Vec3;
  @type("number") weaponThrow: number;
  // @type("number") x: number;
  // @type("number") y: number;
  // @type("number") z: number;
  // @type("number") rotationx: number;
  // @type("number") rotationy: number;
  // @type("number") rotationz: number;
}
export class MyRoomState extends Schema {
  @type("string") mySynchronizedProperty: string = "Hello world";
  @type(Car) Car = new Car();
}
