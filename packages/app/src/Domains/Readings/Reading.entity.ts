import { IReading } from '@server/domains/Readings';

export type TReading = IReading;

export type TReadingSearch = {
  denominacion_cliente?: string;
  denominacion_calle?: string;
  piso?: string;
  dpto?: string;
  bis?: string;
};
