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

import { ReadingModel } from './Database';

export class ReadingsRepositoryImplementation implements ReadingsRepository {
  async getAllReadings({
    filters,
  }: IGetReadingsRepository): Promise<Reading[]> {
    console.log(filters);
    const readings = await ReadingModel.findAll({
      attributes: [
        'id',
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
        'id_usuario',
      ],
      where: {
        ...(filters?.denominacion_cliente && {
          denominacion_cliente: {
            [Op.substring]: filters.denominacion_cliente,
          },
        }),
        ...(filters?.denominacion_calle && {
          denominacion_calle: {
            [Op.substring]: filters.denominacion_calle,
          },
        }),
        ...(filters?.piso && {
          piso: {
            [Op.substring]: filters.piso,
          },
        }),
        ...(filters?.dpto && {
          dpto: {
            [Op.substring]: filters.dpto,
          },
        }),
        ...(filters?.bis && {
          bis: {
            [Op.substring]: filters.bis,
          },
        }),
      },
    });
    return readings.map(
      ({
        id,
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
        id_usuario,
      }) =>
        Reading.create({
          id,
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
          id_usuario,
        }),
    );
  }

  async create({ reading }: ICreateReadingRepository): Promise<Reading | null> {
    if (!reading) {
      return null;
    }
    const {
      id,
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
      id_usuario,
    } = reading.values;
    const newReading = await ReadingModel.create({
      id,
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
      id_usuario,
    });
    if (!newReading) return null;
    return Reading.create({
      id,
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
      id_usuario,
    });
  }

  async getReading({ id }: IGetReadingRepository): Promise<Reading | null> {
    const readingFound = await ReadingModel.findOne({ where: { id } });
    if (!readingFound) {
      return null;
    }
    const {
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
      id_usuario,
    } = readingFound;
    return Reading.create({
      id,
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
      id_usuario,
    });
  }

  async update({ reading }: IUpdateReadingRepository): Promise<number | null> {
    const {
      id,
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
      id_usuario,
    } = reading.values;
    const rowsAffected = await ReadingModel.update(
      {
        id,
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
        id_usuario,
      },
      { where: { id } },
    );

    if (!id || !rowsAffected[0]) return null;
    return id;
  }

  async delete({ id }: IDeleteReadingRepository): Promise<number | null> {
    const rowsAffected = await ReadingModel.destroy({ where: { id } });
    if (rowsAffected === 0) return null;
    return id;
  }
}
