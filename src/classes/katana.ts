import { injectable } from "inversify";

import { IWeapon } from "../interfaces/weapon";

@injectable()
export class Katana implements IWeapon {
  public hit(): string {
    return "cut!";   
  }
}
