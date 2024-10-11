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
    const reading = await this.readingsRepository.getReading({
      id: input,
      requestContext,
    });

    if (!reading) throw new AppError('Reading no encontrado', 404);
    return reading;
  }
}
