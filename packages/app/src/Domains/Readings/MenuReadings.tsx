import { MenuItem } from '@app/Aplication/Components/Molecules';
import { READINGS_ROUTE } from './Readings.routes';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export const MenuReadings = () => (
  <MenuItem to={READINGS_ROUTE} icon={faUsers} text="Lecturas" />
);
