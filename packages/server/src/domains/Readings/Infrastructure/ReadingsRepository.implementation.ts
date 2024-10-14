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
        ...(filters?.id && {
          id: {
            [Op.eq]: filters.id,
          },
        }),
        ...(filters?.numero_medidor && {
          numero_medidor: {
            [Op.eq]: filters.numero_medidor,
          },
        }),
        ...(filters?.numero_cliente && {
          numero_cliente: {
            [Op.eq]: filters.numero_cliente,
          },
        }),
        ...(filters?.denominacion_cliente && {
          denominacion_cliente: {
            [Op.substring]: filters.denominacion_cliente,
          },
        }),
        ...(filters?.codigo_calle && {
          codigo_calle: {
            [Op.eq]: filters.codigo_calle,
          },
        }),
        ...(filters?.denominacion_calle && {
          denominacion_calle: {
            [Op.substring]: filters.denominacion_calle,
          },
        }),
        ...(filters?.altura && {
          altura: {
            [Op.eq]: filters.altura,
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
        ...(filters?.fecha_lectura && {
          fecha_lectura: {
            [Op.eq]: filters.fecha_lectura,
          },
        }),
        ...(filters?.fecha_lectura_ant && {
          fecha_lectura_ant: {
            [Op.eq]: filters.fecha_lectura_ant,
          },
        }),
        ...(filters?.lectura && {
          lectura: {
            [Op.eq]: filters.lectura,
          },
        }),
        ...(filters?.lectura_ant && {
          lectura_ant: {
            [Op.eq]: filters.lectura_ant,
          },
        }),
        ...(filters?.bis && {
          bis: {
            [Op.substring]: filters.bis,
          },
        }),
        ...(filters?.fecha_sincronizacion && {
          fecha_sincronizacion: {
            [Op.eq]: filters.fecha_sincronizacion,
          },
        }),
        ...(filters?.id_usuario && {
          id_usuario: {
            [Op.eq]: filters.id_usuario,
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
