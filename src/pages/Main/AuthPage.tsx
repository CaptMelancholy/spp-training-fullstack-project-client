import PageTemplate from '../PagesTemplate/Template';
import Auth from '../../components/Auth/Auth';
import { AuthRoute } from '../../components/Routes/AuthRoute';

export default function AuthPage() {
  return (
    <AuthRoute>
      <PageTemplate title='Sign in'>
        <Auth />
      </PageTemplate>
    </AuthRoute>
  );
}
