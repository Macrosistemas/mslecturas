import { TReadingsRouter } from '@server/domains/Readings';
import { createTRPCReact } from '@trpc/react-query';

export const _readingsService = createTRPCReact<TReadingsRouter>();
export const ReadingsService = _readingsService.readings;
