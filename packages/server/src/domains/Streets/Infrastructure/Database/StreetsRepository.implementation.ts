import { Op } from 'sequelize';
import {
  IDeleteStreetRepository,
  IGetStreetRepository,
  IGetStreetsRepository,
  ICreateStreetRepository,
  IUpdateStreetRepository,
  Street,
  StreetsRepository,
} from '../../Domain';

import { StreetModel } from './Street.model';

export class StreetsRepositoryImplementation implements StreetsRepository {
  async getAllStreets({ filters }: IGetStreetsRepository): Promise<Street[]> {
    const streets = await StreetModel.findAll({
      attributes: ['id', 'denominacion'],
      where: {
        ...(filters?.denominacion && {
          denominacion: {
            [Op.substring]: filters.denominacion,
          },
        }),
      },
    });
    return streets.map(({ id, denominacion }) =>
      Street.create({
        id,
        denominacion,
      }),
    );
  }

  async create({ street }: ICreateStreetRepository): Promise<Street | null> {
    if (!street) {
      return null;
    }
    const { id, denominacion } = street.values;
    const newStreet = await StreetModel.create({
      id,
      denominacion,
    });
    if (!newStreet) return null;
    return Street.create({
      id,
      denominacion,
    });
  }

  async getStreet({ id }: IGetStreetRepository): Promise<Street | null> {
    const streetFound = await StreetModel.findOne({ where: { id } });
    if (!streetFound) {
      return null;
    }
    const { denominacion } = streetFound;
    return Street.create({
      id,
      denominacion,
    });
  }

  async update({ street }: IUpdateStreetRepository): Promise<number | null> {
    const { id, denominacion } = street.values;
    const rowsAffected = await StreetModel.update(
      {
        denominacion,
      },
      { where: { id } },
    );

    if (!id || !rowsAffected[0]) return null;
    return id;
  }

  async delete({ id }: IDeleteStreetRepository): Promise<number | null> {
    const rowsAffected = await StreetModel.destroy({ where: { id } });
    if (rowsAffected === 0) return null;
    return id;
  }
}
