import { IUseCase } from '@server/Application';
import { Module } from '../Modules.entity';
import { ModulesRepository } from '../Modules.repository';
import { IGetAllModules } from '../Modules.interfaces';

export class GetAllModules implements IUseCase<Module[]> {
  constructor(private readonly modulesRepository: ModulesRepository) {}

  async execute({ input, requestContext }: IGetAllModules): Promise<Module[]> {
    console.log(input);

    return await this.modulesRepository.getAllModules({
      filters: input,
      requestContext,
    });
  }
}
