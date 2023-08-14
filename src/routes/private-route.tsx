import { useAuthenticated } from '@services/auth/useAuthenticated';
import { isInRoles } from '@utils/auth';
import { Navigate } from 'react-router-dom';
import { Route } from 'react-router-dom';

interface PrivateRoute {
  roles: number[] | number;
}

export const PrivateRoute: React.FC<PrivateRoute> = ({ roles, ...props }) => {
  const authenticated = useAuthenticated();

  if (!authenticated) {
    <Navigate to="/login" />;
  }

  if (authenticated && !isInRoles(roles)) {
    return <Navigate to={'/401'} />;
  }

  if (authenticated && !isInRoles(roles)) {
    return <Route {...props} />;
  }
};
