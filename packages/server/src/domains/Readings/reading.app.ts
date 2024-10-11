import { container } from '@server/utils/Container';
import { ReadingsService } from './Application';
import { ReadingController } from './Infrastructure/Controllers/Reading.controller';

import { asClass } from 'awilix';
import {
  GetAllReadings,
  GetReading,
  CreateReading,
  DeleteReading,
  UpdateReading,
} from './Domain';
import { ReadingsRepositoryImplementation } from './Infrastructure';

container.register({
  readingsRepository: asClass(ReadingsRepositoryImplementation).scoped(),
  readingsService: asClass(ReadingsService).scoped(),
  ReadingController: asClass(ReadingController).scoped(),
  _getAllReadings: asClass(GetAllReadings).scoped(),
  _getReading: asClass(GetReading).scoped(),
  _Create: asClass(CreateReading).scoped(),
  _Delete: asClass(DeleteReading).scoped(),
  _Update: asClass(UpdateReading).scoped(),
});

export const readingController =
  container.resolve<ReadingController>('ReadingController');
