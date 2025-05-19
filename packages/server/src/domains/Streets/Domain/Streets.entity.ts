import { IStreet } from './Streets.interfaces';
export class Street {
  constructor(
    private readonly _id: number,
    private readonly _denominacion?: string,
  ) {}

  static create({ id, denominacion }: IStreet): Street {
    return new Street(id, denominacion);
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
