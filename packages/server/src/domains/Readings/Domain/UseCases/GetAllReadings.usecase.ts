import { IUseCase } from '@server/Application';
import { Reading } from '../Readings.entity';
import {
  IGetReadingsRepository,
  ReadingsRepository,
} from '../Readings.repository';

export class GetAllReadings implements IUseCase<Reading[]> {
  constructor(private readonly readingsRepository: ReadingsRepository) {}

  async execute({
    filters,
    requestContext,
  }: IGetReadingsRepository): Promise<Reading[]> {
    return await this.readingsRepository.getAllReadings({
      filters,
      requestContext,
    });
  }
}
