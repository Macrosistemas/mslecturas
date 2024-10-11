import { Op } from 'sequelize';
import {
  IDeleteReadingRepository,
  IGetReadingRepository,
  IGetReadingsRepository,
  ICreateReadingRepository,
  IUpdateReadingRepository,
  Reading,
  ReadingsRepository,
} from '../Domain';

import { ReadingScheme } from './Database';
//https://sequelize.org/docs/v6/core-concepts/model-querying-basics/

export class ReadingsRepositoryImplementation implements ReadingsRepository {
  async getReadings({ filters }: IGetReadingsRepository): Promise<Reading[]> {
    const readings = await ReadingScheme.findAll({
      attributes: [
        'id',
        'id_usuario',
        'numero_medidor',
        'numero_cliente',
        'denominacion_cliente',
        'codigo_calle',
        'denominacion_calle',
        'altura',
        'piso',
        'dpto',
        'fecha_lectura',
        'fecha_lectura_ant',
        'lectura',
        'lectura_ant',
        'bis',
        'fecha_sincronizacion',
      ],
      where: {
        ...(filters?.denominacion_cliente && {
          denominacion_cliente: {
            [Op.substring]: filters.denominacion_cliente,
          },
        }),
        ...(filters?.id_usuario && {
          id_usuario: filters.id_usuario,
        }),
      },
    });
    return readings.map(
      ({
        id,
        id_usuario,
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
        fecha_sincronizacion,
      }) =>
        Reading.create({
          id,
          id_usuario,
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
          fecha_sincronizacion,
        }),
    );
  }

  async create({ reading }: ICreateReadingRepository): Promise<Reading | null> {
    if (!reading) {
      return null;
    }
    const {
      id,
      id_usuario,
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
      fecha_sincronizacion,
    } = reading.values;

    const newReading = await ReadingScheme.create({
      id,
      id_usuario,
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
      fecha_sincronizacion,
    });

    if (!newReading) return null;
    return Reading.create({
      id_usuario,
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
      id,
      fecha_sincronizacion,
    });
  }

  async getReading({ id }: IGetReadingRepository): Promise<Reading | null> {
    const readingFound = await ReadingScheme.findOne({ where: { id } });
    if (!readingFound) {
      return null;
    }
    const {
      id_usuario,
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
      fecha_sincronizacion,
    } = readingFound;

    return Reading.create({
      id: id,
      id_usuario: id_usuario,
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
      fecha_sincronizacion,
    });
  }

  async update({ reading }: IUpdateReadingRepository): Promise<number | null> {
    const {
      id,
      id_usuario,
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
      fecha_sincronizacion,
    } = reading.values;
    const rowsAffected = await ReadingScheme.update(
      {
        id,
        id_usuario,
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
        fecha_sincronizacion,
      },
      { where: { id } },
    );

    if (!id || !rowsAffected[0]) return null;
    return id;
  }

  async delete({ id }: IDeleteReadingRepository): Promise<number | null> {
    const rowsAffected = await ReadingScheme.destroy({ where: { id } });
    if (rowsAffected === 0) return null;
    return id;
  }
}
