import { format } from 'date-fns';

export const formatInputDate = (value: Date) =>
  value ? format(value, 'yyyy-MM-dd') : '';

export const formatDate = (value: Date) =>
  value ? format(value, 'dd-MM-yyyy') : '';
