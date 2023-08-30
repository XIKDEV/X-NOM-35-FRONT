import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes, HomeRoutes } from '../auth/routes';

export const AppRouter = () => {
  //! TODO: Variable temporal hasta agregar sistema Login
  const authenticated = 'auth';
  return (
    <Routes>
      {authenticated === 'auth' ? (
        <Route path="/*" element={<HomeRoutes />} />
      ) : (
        <Route
          data-testid="some-element-in-auth-routes"
          path="/auth/*"
          element={<AuthRoutes />}
        />
      )}

      <Route path="/*" element={<Navigate to="/auth/login" />} />
    </Routes>
  );
};
