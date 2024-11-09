import PageTemplate from '../PagesTemplate/Template';
import Registration from '../../components/Registration/Registration';
import { AuthRoute } from '../../components/Routes/AuthRoute';

export default function RegistrationPage() {
  return (
    <AuthRoute>
      <PageTemplate title='Registration'>
        <Registration />
      </PageTemplate>
    </AuthRoute>
  );
}
