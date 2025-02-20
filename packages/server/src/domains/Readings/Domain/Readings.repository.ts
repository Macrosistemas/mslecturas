import { IRequestContext } from '@server/Application';
import { Reading } from './Readings.entity';

export interface IGetReadingsRepository extends IRequestContext {
  filters?: {
    denominacion_cliente?: string;
    denominacion_calle?: string;
    piso?: string;
    dpto?: string;
    bis?: string;
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
  getAllReadings(params: IGetReadingsRepository): Promise<Reading[]>;
  create(params: ICreateReadingRepository): Promise<Reading | null>;
  update(params: IUpdateReadingRepository): Promise<number | null>;
  delete(params: IDeleteReadingRepository): Promise<number | null>;
  getReading(params: IGetReadingRepository): Promise<Reading | null>;
}
