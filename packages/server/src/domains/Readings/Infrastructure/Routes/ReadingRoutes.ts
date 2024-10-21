import { readingController } from '../reading.app';
const { getReadings, createReading, deleteReading, getReading } =
  readingController;

export const ReadingRoutes = {
  readings: {
    getAll: getReadings,
    create: createReading,
    delete: deleteReading,
    get: getReading,
  },
};
