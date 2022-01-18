import { inject, injectable } from "inversify";

import { IThrowableWeapon } from "../interfaces/throwable-weapon";
import { IWarrior } from "../interfaces/warrior";
import { IWeapon } from "../interfaces/weapon";

import { TYPES } from "../types";

@injectable()
export class Ninja implements IWarrior {
  constructor(
    @inject(TYPES.Weapon)
    private readonly katana: IWeapon,
    @inject(TYPES.ThrowableWeapon)
    private readonly shuriken: IThrowableWeapon,
  ) {}

  public fight(): string {
    return this.katana.hit();
  }

  public sneak(): string {
    return this.shuriken.throw();
  }
}