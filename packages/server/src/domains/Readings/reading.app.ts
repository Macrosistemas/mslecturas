import { asClass } from 'awilix';
import { ReadingsService } from './Application';
import {
  ReadingsController,
  ReadingsRepositoryImplementation,
} from './Infrastructure';
import {
  GetAllReadings,
  GetReading,
  CreateReading,
  DeleteReading,
  UpdateReading,
} from './Domain';
import { container } from '@server/utils/Container';

export const readingApp = {
  readingsRepository: asClass(ReadingsRepositoryImplementation),
  readingsService: asClass(ReadingsService),
  readingsController: asClass(ReadingsController),
  _getAllReadings: asClass(GetAllReadings),
  _getReading: asClass(GetReading),
  _create: asClass(CreateReading),
  _delete: asClass(DeleteReading),
  _update: asClass(UpdateReading),
};

export const readingsController = () =>
  container.resolve<ReadingsController>('readingsController');
