import { AppError, IUseCase } from '@server/Application';
import { IDeleteModule } from '../Modules.interfaces';
import { ModulesRepository } from '../Modules.repository';

export class DeleteModule implements IUseCase<number | null> {
  constructor(private readonly modulesRepository: ModulesRepository) {}

  async execute({
    input,
    requestContext,
  }: IDeleteModule): Promise<number | null> {
    const id = input;
    const module = await this.modulesRepository.getModule({
      id,
      requestContext,
    });
    if (module) {
      await this.modulesRepository.delete({
        id,
        requestContext,
      });
      return id;
    } else {
      throw new AppError('No se puede Borrar Registro');
    }
  }
}
