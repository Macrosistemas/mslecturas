import { AppError, IUseCase } from '@server/Application';
import { ModulesRepository } from '../Modules.repository';
import { Module } from '../Modules.entity';
import { IGetModule } from '../Modules.interfaces';

export class GetModule implements IUseCase<Module | null> {
  constructor(private readonly modulesRepository: ModulesRepository) {}

  async execute({ input, requestContext }: IGetModule): Promise<Module | null> {
    const id = input;
    const module = await this.modulesRepository.getModule({
      id,
      requestContext,
    });

    if (!module) throw new AppError('Registro no encontrado', 404);
    return module;
  }
}
