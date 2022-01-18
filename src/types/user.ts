export class User {
  readonly id: number;
  readonly name: string;

  constructor(name: string) {
    this.id = new Date().getTime();
    this.name = name;
  }
}
