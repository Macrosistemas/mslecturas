import { AppError, IUseCase } from '@server/Application';
import { ModulesRepository } from '../Modules.repository';
import { ICreateModule } from '../Modules.interfaces';
import { Module } from '../Modules.entity';

export class CreateModule implements IUseCase<Module> {
  constructor(private readonly modulesRepository: ModulesRepository) {}

  async execute({ input, requestContext }: ICreateModule): Promise<Module> {
    const { id, denominacion } = input;
    const newModule = Module.create({
      id,
      denominacion,
    });
    const module = await this.modulesRepository.create({
      module: newModule,
      requestContext,
    });

    if (!module) {
      throw new AppError('No se puede Ingresar Registro');
    }
    return module;
  }
}
