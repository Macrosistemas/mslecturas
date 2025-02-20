import { readingController } from '../../reading.app';
const {
  getAllReadings,
  createReading,
  deleteReading,
  getReading,
  updateReading,
} = readingController;

export const ReadingRoutes = {
  readings: {
    getAll: getAllReadings,
    create: createReading,
    delete: deleteReading,
    update: updateReading,
    get: getReading,
  },
};
