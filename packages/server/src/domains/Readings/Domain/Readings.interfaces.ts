import { IRequestContext } from '@server/Application';

export interface IGetReadings extends IRequestContext {
  input?: {
    id: number;
    id_usuario: number;
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
  };
}
export interface ICreateReading extends IRequestContext {
  input: {
    id_usuario: number;
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
    id_usuario: number;
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
  };
}
export interface IDeleteReading extends IRequestContext {
  input: number;
}

export interface IReading {
  id_usuario: number;
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
  id?: number;
  fecha_sincronizacion?: Date;
}
