import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@app/Aplication/';

import { MODULES_NEW_ROUTE } from '../Modules.routes';

export const NewModuleButton = () => (
  <Link to={MODULES_NEW_ROUTE}>
    <Button icon={faUser} showIcon>
      Agregar
    </Button>
  </Link>
);
