import { injectable } from "inversify";

import { IThrowableWeapon } from "../interfaces/throwable-weapon";

@injectable()
export class Shuriken implements IThrowableWeapon {
  public throw() {
    return "hit!";
  }
}
