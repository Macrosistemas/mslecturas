import { MenuItem } from '@app/Aplication/Components/Molecules';
import { STREETS_ROUTE } from './Streets.routes';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export const MenuStreets = () => (
  <MenuItem to={STREETS_ROUTE} icon={faUsers} text="Calles" />
);
