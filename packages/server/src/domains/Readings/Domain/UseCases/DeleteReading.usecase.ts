import { AppError, IUseCase } from '@server/Application';
import { IDeleteReading } from '../Readings.interfaces';
import { ReadingsRepository } from '../Readings.repository';

export class DeleteReading implements IUseCase<number | null> {
  constructor(private readonly readingsRepository: ReadingsRepository) {}

  async execute({
    input,
    requestContext,
  }: IDeleteReading): Promise<number | null> {
    const id = input;
    const reading = await this.readingsRepository.getReading({
      id,
      requestContext,
    });
    if (reading) {
      await this.readingsRepository.delete({
        id,
        requestContext,
      });
      return id;
    } else {
      throw new AppError('No se puede Borrar Registro');
    }
  }
}
