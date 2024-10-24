import { Op } from 'sequelize';
import {
  IDeleteModuleRepository,
  IGetModuleRepository,
  IGetModulesRepository,
  ICreateModuleRepository,
  IUpdateModuleRepository,
  Module,
  ModulesRepository,
} from '../Domain';

import { ModuleModel } from './Database';

export class ModulesRepositoryImplementation implements ModulesRepository {
  async getAllModules({ filters }: IGetModulesRepository): Promise<Module[]> {
    const modules = await ModuleModel.findAll({
      attributes: ['id', 'denominacion'],
      where: {
        ...(filters?.denominacion && {
          denominacion: {
            [Op.substring]: filters.denominacion,
          },
        }),
      },
    });
    return modules.map(({ id, denominacion }) =>
      Module.create({
        id,
        denominacion,
      }),
    );
  }

  async create({ module }: ICreateModuleRepository): Promise<Module | null> {
    if (!module) {
      return null;
    }
    const { id, denominacion } = module.values;
    const newModule = await ModuleModel.create({
      id,
      denominacion,
    });
    if (!newModule) return null;
    return Module.create({
      id,
      denominacion,
    });
  }

  async getModule({ id }: IGetModuleRepository): Promise<Module | null> {
    const moduleFound = await ModuleModel.findOne({ where: { id } });
    if (!moduleFound) {
      return null;
    }
    const { denominacion } = moduleFound;
    return Module.create({
      id,
      denominacion,
    });
  }

  async update({ module }: IUpdateModuleRepository): Promise<number | null> {
    const { id, denominacion } = module.values;
    const rowsAffected = await ModuleModel.update(
      {
        id,
        denominacion,
      },
      { where: { id } },
    );

    if (!id || !rowsAffected[0]) return null;
    return id;
  }

  async delete({ id }: IDeleteModuleRepository): Promise<number | null> {
    const rowsAffected = await ModuleModel.destroy({ where: { id } });
    if (rowsAffected === 0) return null;
    return id;
  }
}
