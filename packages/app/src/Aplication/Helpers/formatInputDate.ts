import { format } from 'date-fns';

export const formatInputDate = (value: Date) =>
  value ? format(value, 'yyyy-MM-dd') : '';
