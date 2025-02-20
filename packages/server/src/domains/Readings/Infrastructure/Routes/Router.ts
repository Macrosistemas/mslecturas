import { router } from '@server/Infrastructure/trpc';
import { ReadingRoutes } from './ReadingRoutes';

const ReadingsRouter = router(ReadingRoutes);
export type TReadingsRouter = typeof ReadingsRouter;
