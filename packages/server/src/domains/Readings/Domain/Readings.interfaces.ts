import { IRequestContext } from '@server/Application';
export interface IGetAllReadings extends IRequestContext {
  input?: {
    denominacion_cliente: string;
    denominacion_calle: string;
    piso: string;
    dpto: string;
    bis: string;
  };
}
export interface ICreateReading extends IRequestContext {
  input: {
    numero_medidor: number;
    numero_cliente: number;
    denominacion_cliente: string;
    codigo_calle: number;
    denominacion_calle: string;
    altura: number;
    piso: string;
    dpto: string;
    fecha_lectura: Date;
    fecha_lectura_ant: Date;
    lectura: number;
    lectura_ant: number;
    bis: string;
    id_usuario: number;
    id?: number;
    fecha_sincronizacion?: Date;
  };
}
export interface IGetReading extends IRequestContext {
  input: number;
}
export interface IUpdateReading extends IRequestContext {
  input: {
    id: number;
    numero_medidor: number;
    numero_cliente: number;
    denominacion_cliente: string;
    codigo_calle: number;
    denominacion_calle: string;
    altura: number;
    piso: string;
    dpto: string;
    fecha_lectura: Date;
    fecha_lectura_ant: Date;
    lectura: number;
    lectura_ant: number;
    bis: string;
    fecha_sincronizacion: Date;
    id_usuario: number;
  };
}
export interface IDeleteReading extends IRequestContext {
  input: number;
}
export interface IReading {
  numero_medidor: number;
  numero_cliente: number;
  denominacion_cliente: string;
  codigo_calle: number;
  denominacion_calle: string;
  altura: number;
  piso: string;
  dpto: string;
  fecha_lectura: Date;
  fecha_lectura_ant: Date;
  lectura: number;
  lectura_ant: number;
  bis: string;
  id_usuario: number;
  id?: number;
  fecha_sincronizacion?: Date;
}
