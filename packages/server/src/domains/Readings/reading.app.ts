import { container } from '@server/utils/Container';
import { ReadingsService } from './Application';
import { asClass } from 'awilix';
import {
  GetAllReadings,
  GetReading,
  CreateReading,
  DeleteReading,
  UpdateReading,
} from './Domain';
import {
  ReadingController,
  ReadingsRepositoryImplementation,
} from './Infrastructure';

container.register({
  readingsRepository: asClass(ReadingsRepositoryImplementation),
  readingsService: asClass(ReadingsService),
  readingController: asClass(ReadingController),
  _getAllReadings: asClass(GetAllReadings),
  _getReading: asClass(GetReading),
  _Create: asClass(CreateReading),
  _Delete: asClass(DeleteReading),
  _Update: asClass(UpdateReading),
});

export const readingController =
  container.resolve<ReadingController>('readingController');
