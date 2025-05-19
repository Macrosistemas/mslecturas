import { TStreetRouter } from '@server/domains/Streets';
import { createTRPCReact } from '@trpc/react-query';

export const _streetsService = createTRPCReact<TStreetRouter>();
export const StreetsService = _streetsService.streets;
