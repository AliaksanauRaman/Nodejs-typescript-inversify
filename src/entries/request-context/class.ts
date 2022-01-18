import { injectable } from "inversify";
import { IRequestContext } from "./interface";
import "reflect-metadata";

@injectable()
export class RequestContext implements IRequestContext {
  constructor(
    readonly id: string,
    readonly body: unknown,
  ) {}
}