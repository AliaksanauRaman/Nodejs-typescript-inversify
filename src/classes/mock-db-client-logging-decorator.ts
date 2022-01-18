import { inject, injectable } from "inversify";
import { LOGGER } from "../handlers/get-users/injection-tokens/logger";

import { IDbClient } from "../interfaces/db-client";
import { User } from "../types/user";

interface ILogger {
  log: (message: string) => void;
}

@injectable()
export class MockDbClientLoggingDecorator implements IDbClient {
  constructor(
    @inject(LOGGER) private readonly logger: ILogger,
    private readonly dbClient: IDbClient,
  ) {}

  async getUsers(): Promise<User[]> {
    const users = await this.dbClient.getUsers();
    this.logger.log(`Fetched users: ${JSON.stringify(users)}`);
    return users;
  }

  async getUsersFilteredByName(userName: string): Promise<User[]> {
    const filteredUsers = await this.dbClient.getUsersFilteredByName(userName);
    this.logger.log(`Fetched users: ${JSON.stringify(filteredUsers)}`);
    return filteredUsers;
  }
}
