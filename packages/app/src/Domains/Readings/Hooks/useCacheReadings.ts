import { _readingsService } from '../Readings.service';

export const useCacheReadings = () =>
  _readingsService.useUtils().readings.getAll;
