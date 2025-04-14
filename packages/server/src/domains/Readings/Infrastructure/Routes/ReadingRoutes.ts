import { readingsController } from '../../reading.app';

export const ReadingRoutes = () => {
  const {
    getAllReadings,
    createReading,
    deleteReading,
    getReading,
    updateReading,
  } = readingsController();

  return {
    readings: {
      getAll: getAllReadings,
      create: createReading,
      get: getReading,
      delete: deleteReading,
      update: updateReading,
    },
  };
};
