import { AppError, IUseCase } from '@server/Application';
import { ModulesRepository } from '../Modules.repository';
import { IUpdateModule } from '../Modules.interfaces';
import { Module } from '../Modules.entity';

export class UpdateModule implements IUseCase<Module> {
  constructor(private readonly modulesRepository: ModulesRepository) {}

  async execute({ input, requestContext }: IUpdateModule): Promise<Module> {
    const { id, denominacion } = input;
    const updModule = Module.create({
      id,
      denominacion,
    });
    const module = await this.modulesRepository.create({
      module: updModule,
      requestContext,
    });

    if (!module) {
      throw new AppError('No se pudo Actualizar Registro');
    }
    return module;
  }
}
