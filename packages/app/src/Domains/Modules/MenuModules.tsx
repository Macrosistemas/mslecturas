import { MenuItem } from '@app/Aplication/Components/Molecules';
import { MODULES_ROUTE } from './Modules.routes';
import { faUsers } from '@fortawesome/free-solid-svg-icons';

export const MenuModules = () => (
  <MenuItem to={MODULES_ROUTE} icon={faUsers} text="Modulos" />
);
