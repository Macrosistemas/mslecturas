import { IUseCase } from '@server/Application';
import { Module } from '../Modules.entity';
import {
  IGetModulesRepository,
  ModulesRepository,
} from '../Modules.repository';

export class GetAllModules implements IUseCase<Module[]> {
  constructor(private readonly modulesRepository: ModulesRepository) {}

  async execute({
    filters,
    requestContext,
  }: IGetModulesRepository): Promise<Module[]> {
    return await this.modulesRepository.getAllModules({
      filters,
      requestContext,
    });
  }
}
