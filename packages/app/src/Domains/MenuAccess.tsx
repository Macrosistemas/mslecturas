import { Container } from '@app/Aplication';
import { MenuUsers } from './Users';
import { MenuMain } from './Main';
import { MenuAuth } from './Auth';
import { MenuModules } from './Modules/MenuModules';
import { MenuReadins } from './Readings/MenuReadins';
import { MenuStreets } from './Streets/MenuStreets';

export const styleLink =
  'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary';

export const MenuAccess = () => (
  <>
    <Container id="sections" space="small">
      <MenuMain />
      <MenuUsers />
      <MenuModules />
      <MenuReadins />
      <MenuStreets />
    </Container>
    <Container id="footer" space="small">
      <MenuAuth />
    </Container>
  </>
);
