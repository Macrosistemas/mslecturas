import { AppError, IUseCase } from '@server/Application';
import { ReadingsRepository } from '../Readings.repository';
import { Reading } from '../Readings.entity';
import { IGetReading } from '../Readings.interfaces';

export class GetReading implements IUseCase<Reading | null> {
  constructor(private readonly readingsRepository: ReadingsRepository) {}

  async execute({
    input,
    requestContext,
  }: IGetReading): Promise<Reading | null> {
    const id = input;
    const reading = await this.readingsRepository.getReading({
      id,
      requestContext,
    });

    if (!reading) throw new AppError('Registro no encontrado', 404);
    return reading;
  }
}
