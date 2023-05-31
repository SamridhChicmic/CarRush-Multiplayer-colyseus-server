import { Room, Client } from "colyseus";
import { MyRoomState, Vec3 } from "./schema/MyRoomState";

export class MyRoom extends Room<MyRoomState> {
  onCreate(options: any) {
    this.setState(new MyRoomState());

    this.onMessage("moveCar", (client, data) => {
      console.log("Car Movement");
      let currCar = this.state.Car;
      let newpos = new Vec3();
      let newangle = new Vec3();
      newpos.x = data.position.x;
      newpos.y = data.position.y;
      newpos.z = data.position.z;
      newangle.x = data.Angle.x;
      newangle.y = data.Angle.y;
      newangle.z = data.Angle.z;
      currCar.position = newpos;
      currCar.eularAngle = newangle;
    });
    this.onMessage("weaponThrow", (client, data) => {
      let currCar = this.state.Car;
      currCar.weaponThrow = data.weaponthrow;
    });
    this.onMessage("groundItemRandomNumber", (client, data) => {
      console.log("data-->", data.randomNumberArray);
      let curritem = this.state.GroundItem;
      curritem.RandomNumberArray = data.randomNumberArray;
    });
  }

  // Authorize client based on provided options before WebSocket handshake is complete
  // onAuth (client: Client, options: any) { }

  onJoin(client: Client, options: any) {
    console.log(client.sessionId, "joined!");
  }

  onLeave(client: Client, consented: boolean) {
    console.log(client.sessionId, "left!");
  }

  onDispose() {
    console.log("room", this.roomId, "disposing...");
  }
}
