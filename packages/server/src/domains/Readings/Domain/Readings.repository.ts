import { IRequestContext } from '@server/Application';
import { Reading } from './Readings.entity';

export interface IGetReadingsRepository extends IRequestContext {
  filters?: {
    id?: number;
    id_usuario?: number;
    numero_medidor?: number;
    numero_cliente?: number;
    denominacion_cliente?: string;
    codigo_calle?: number;
    denominacion_calle?: string;
    altura?: number;
    piso?: string;
    dpto?: string;
    fecha_lectura?: Date;
    fecha_lectura_ant?: Date;
    lectura?: number;
    lectura_ant?: number;
    bis?: string;
    fecha_sincronizacion?: Date;
  };
}
export interface ICreateReadingRepository extends IRequestContext {
  reading: Reading;
}
export interface IGetReadingRepository extends IRequestContext {
  id: number;
}
export interface IUpdateReadingRepository extends IRequestContext {
  reading: Reading;
}
export interface IDeleteReadingRepository extends IRequestContext {
  id: number;
}
export interface ReadingsRepository {
  getReadings(params: IGetReadingsRepository): Promise<Reading[]>;
  create(params: ICreateReadingRepository): Promise<Reading | null>;
  update(params: IUpdateReadingRepository): Promise<Reading | null>;
  delete(params: IDeleteReadingRepository): Promise<number | null>;
  getReading(params: IGetReadingRepository): Promise<Reading | null>;
}
