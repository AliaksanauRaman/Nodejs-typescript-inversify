import { Container } from "inversify";
import "reflect-metadata";

import { Logger } from "../../classes/logger";
import { MockDbClient } from "../../classes/mock-db-client";
import { Car } from "../../entries/car/class";
import { CAR } from "../../entries/car/injection-token";
import { ICar } from "../../entries/car/interface";

import { DB_CLIENT } from "./injection-tokens/db-client";
import { LOGGER } from "./injection-tokens/logger";

import { IDbClient } from "./interfaces/db-client";
import { ILogger } from "./interfaces/logger";

const container = new Container();

container.bind<IDbClient>(DB_CLIENT).to(MockDbClient);
container.bind<ILogger>(LOGGER).to(Logger);
container.bind<ICar>(CAR).to(Car);

export { container };
