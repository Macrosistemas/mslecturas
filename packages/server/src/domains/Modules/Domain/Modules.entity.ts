import { IModule } from './Modules.interfaces';
export class Module {
  constructor(
    private readonly _denominacion: string,
    private readonly _id?: number,
  ) {}

  static create({ denominacion, id }: IModule): Module {
    return new Module(denominacion, id);
  }

  toJSON() {
    return this.values;
  }

  get values() {
    return {
      id: this._id,
      denominacion: this._denominacion,
    };
  }
}
