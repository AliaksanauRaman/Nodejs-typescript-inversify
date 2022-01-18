import { injectable } from "inversify";

import { IDbClient } from "../interfaces/db-client";

import { User } from "../types/user";

@injectable()
export class MockDbClient implements IDbClient {
  private readonly mockUsers = [
    new User('Roman'),
    new User('Darya'),
    new User('Andrey'),
    new User('Stas'),
  ];
  private readonly latencyDurationInMs = 500;

  async getUsers(): Promise<Array<User>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.mockUsers);
      }, this.latencyDurationInMs);
    });
  }

  async getUsersFilteredByName(userName: string): Promise<Array<User>> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.mockUsers.filter(user => user.name.toLowerCase() === userName.toLowerCase()));
      }, this.latencyDurationInMs);
    });
  }
}
