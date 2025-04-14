import { router } from '@server/Infrastructure/trpc';
import { ReadingRoutes } from './ReadingRoutes';

const ReadingRouter = () => router(ReadingRoutes());
export type TReadingRouter = ReturnType<typeof ReadingRouter>;
