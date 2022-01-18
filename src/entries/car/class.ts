import { inject, injectable } from "inversify";
import { REQUEST_CONTEXT } from "../request-context/injection-token";
import { IRequestContext } from "../request-context/interface";
import { ICar } from "./interface";

@injectable()
export class Car implements ICar {
  private name = 'My loverly car';

  constructor(
    @inject(REQUEST_CONTEXT)
    private readonly requestContext: IRequestContext,
  ) {}

  public run(): void {
    console.log(this.requestContext.id);
    console.log(this.requestContext.body);
    console.log(`${this.name} runs!`);
  }
}