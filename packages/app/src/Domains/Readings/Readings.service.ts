import { TReadingRouter } from '@server/domains/Readings';
import { createTRPCReact } from '@trpc/react-query';

export const _readingsService = createTRPCReact<TReadingRouter>();
export const ReadingsService = _readingsService.readings;
