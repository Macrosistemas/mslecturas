import { _streetsService } from '../Streets.service';

export const useCacheStreets = () => _streetsService.useUtils().streets.getAll;
