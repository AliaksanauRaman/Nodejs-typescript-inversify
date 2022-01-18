import express from "express";
import { CAR } from "../../entries/car/injection-token";
import { ICar } from "../../entries/car/interface";
import { RequestContext } from "../../entries/request-context/class";
import { REQUEST_CONTEXT } from "../../entries/request-context/injection-token";
import { IRequestContext } from "../../entries/request-context/interface";
// import { MockDbClientLoggingDecorator } from "../../classes/mock-db-client-logging-decorator";
import { container } from "./container";

import { DB_CLIENT } from "./injection-tokens/db-client";
import { LOGGER } from "./injection-tokens/logger";

import { IDbClient } from "./interfaces/db-client";
import { ILogger } from "./interfaces/logger";

export const getUsersHandler = async (req: express.Request, res: express.Response): Promise<void> => {
  container.bind<IRequestContext>(REQUEST_CONTEXT).toConstantValue(new RequestContext('123', { name: 'roman' }));

  const logger = container.get<ILogger>(LOGGER);
  const dbClient = container.get<IDbClient>(DB_CLIENT);
  const car = container.get<ICar>(CAR);

  car.run();

  logger.log("Handle get users request");

  if (Object.keys(req.query).length !== 0) {
    logger.log(`Got the following query params: ${JSON.stringify(req.query)}`);

    if (typeof req.query.name === 'string') {
      const users = await dbClient.getUsersFilteredByName(req.query.name);
      logger.log(`Fetched users: ${JSON.stringify(users)}`);
      res.status(200).send(users);
      return;
    }
  }

  const users = await dbClient.getUsers();
  logger.log(`Fetched users: ${JSON.stringify(users)}`);
  res.status(200).send(users);
  return;
}