import { IReading } from './Readings.interfaces';
export class Reading {
  constructor(
    private readonly _numero_medidor: number,
    private readonly _numero_cliente: number,
    private readonly _denominacion_cliente: string,
    private readonly _codigo_calle: number,
    private readonly _denominacion_calle: string,
    private readonly _altura: number,
    private readonly _piso: string,
    private readonly _dpto: string,
    private readonly _fecha_lectura: Date,
    private readonly _fecha_lectura_ant: Date,
    private readonly _lectura: number,
    private readonly _lectura_ant: number,
    private readonly _bis: string,
    private readonly _id_usuario: number,
    private readonly _id?: number,
    private readonly _fecha_sincronizacion?: Date,
  ) {}

  static create({
    numero_medidor,
    numero_cliente,
    denominacion_cliente,
    codigo_calle,
    denominacion_calle,
    altura,
    piso,
    dpto,
    fecha_lectura,
    fecha_lectura_ant,
    lectura,
    lectura_ant,
    bis,
    id_usuario,
    id,
    fecha_sincronizacion,
  }: IReading): Reading {
    return new Reading(
      numero_medidor,
      numero_cliente,
      denominacion_cliente,
      codigo_calle,
      denominacion_calle,
      altura,
      piso,
      dpto,
      fecha_lectura,
      fecha_lectura_ant,
      lectura,
      lectura_ant,
      bis,
      id_usuario,
      id,
      fecha_sincronizacion,
    );
  }

  toJSON() {
    return this.values;
  }

  get values() {
    return {
      id: this._id,
      numero_medidor: this._numero_medidor,
      numero_cliente: this._numero_cliente,
      denominacion_cliente: this._denominacion_cliente,
      codigo_calle: this._codigo_calle,
      denominacion_calle: this._denominacion_calle,
      altura: this._altura,
      piso: this._piso,
      dpto: this._dpto,
      fecha_lectura: this._fecha_lectura,
      fecha_lectura_ant: this._fecha_lectura_ant,
      lectura: this._lectura,
      lectura_ant: this._lectura_ant,
      bis: this._bis,
      fecha_sincronizacion: this._fecha_sincronizacion,
      id_usuario: this._id_usuario,
    };
  }
}
