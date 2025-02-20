import { Link } from 'react-router-dom';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@app/Aplication/';

import { READINGS_NEW_ROUTE } from '../Readings.routes';

export const NewReadingButton = () => (
  <Link to={READINGS_NEW_ROUTE}>
    <Button icon={faUser} showIcon>
      Agregar
    </Button>
  </Link>
);
