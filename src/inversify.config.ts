import { Container } from "inversify";
import "reflect-metadata";

import { IThrowableWeapon } from "./interfaces/throwable-weapon";
import { IWarrior } from "./interfaces/warrior";
import { IWeapon } from "./interfaces/weapon";

import { Katana } from "./classes/katana";
import { Ninja } from "./classes/ninja";
import { Shuriken } from "./classes/shuriken";

import { TYPES } from "./types";

const container = new Container();

container.bind<IWarrior>(TYPES.Warrior).to(Ninja);
container.bind<IWeapon>(TYPES.Weapon).to(Katana);
container.bind<IThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { container };
