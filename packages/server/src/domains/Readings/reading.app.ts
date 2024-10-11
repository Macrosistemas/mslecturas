import { container } from '@server/utils/Container';
import { ReadingsService } from './Application';
import { ReadingController } from './Infrastructure/Controllers/Reading.controller';
import { ReadingsRepositoryImplementation } from './Infrastructure/ReadingsRepository.implementation.localDB';
import { asClass } from 'awilix';
import {
  GetAllReadings,
  GetReading,
  CreateReading,
  DeleteReading,
  UpdateReading,
  GetInfoReading,
} from './Domain';

container.register({
  readingsRepository: asClass(ReadingsRepositoryImplementation).scoped(),
  readingsService: asClass(ReadingsService).scoped(),
  readingsController: asClass(ReadingController).scoped(),
  _getAllReadings: asClass(GetAllReadings).scoped(),
  _getReading: asClass(GetReading).scoped(),
  _createReading: asClass(CreateReading).scoped(),
  _deleteReading: asClass(DeleteReading).scoped(),
  _updateReading: asClass(UpdateReading).scoped(),
  _getInfoReading: asClass(GetInfoReading).scoped(),
});

export const readingController =
  container.resolve<ReadingController>('readingController');
