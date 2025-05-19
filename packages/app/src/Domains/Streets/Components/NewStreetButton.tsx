import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@app/Aplication/';

import { STREETS_NEW_ROUTE } from '../Streets.routes';

export const NewStreetButton = () => (
  <Link to={STREETS_NEW_ROUTE}>
    <Button icon={faUser} showIcon>
      Agregar
    </Button>
  </Link>
);
