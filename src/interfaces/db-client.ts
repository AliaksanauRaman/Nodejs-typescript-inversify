import { User } from "../types/user";

export interface IDbClient {
  getUsers: () => Promise<Array<User>>;
  getUsersFilteredByName: (userName: string) => Promise<Array<User>>;
}
