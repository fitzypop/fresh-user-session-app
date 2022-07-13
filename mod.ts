export interface UserInterface {
  name: string;
  password: string;
}

export class User implements UserInterface {
  constructor(public name: string, public password: string) {}
}
