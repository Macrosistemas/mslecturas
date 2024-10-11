import { AppError, IUseCase } from '@server/Application';
import { ReadingsRepository } from '../Readings.repository';
import { IDeleteReading } from '../Readings.interfaces';

export class DeleteReading implements IUseCase<number | null> {
  constructor(private readonly readingsRepository: ReadingsRepository) {}

  async execute({
    input,
    requestContext,
  }: IDeleteReading): Promise<number | null> {
    const reading = await this.readingsRepository.getReading({
      id: input,
      requestContext,
    });
    if (reading) {
      await this.readingsRepository.delete({
        id: input,
        requestContext,
      });
      const id = input;
      return id;
    } else {
      throw new AppError('No se puede Ingresar Registro');
    }
  }
}
