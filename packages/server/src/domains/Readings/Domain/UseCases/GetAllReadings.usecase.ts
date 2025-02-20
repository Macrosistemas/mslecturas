import { IUseCase } from '@server/Application';
import { Reading } from '../Readings.entity';
import { ReadingsRepository } from '../Readings.repository';
import { IGetAllReadings } from '../Readings.interfaces';

export class GetAllReadings implements IUseCase<Reading[]> {
  constructor(private readonly readingsRepository: ReadingsRepository) {}

  async execute({
    input,
    requestContext,
  }: IGetAllReadings): Promise<Reading[]> {
    return await this.readingsRepository.getAllReadings({
      filters: input,
      requestContext,
    });
  }
}
