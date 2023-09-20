import { useSelector } from 'react-redux';
import { Navigate, Route, Routes } from 'react-router-dom';
import { AuthRoutes, HomeRoutes } from '../auth/routes';
import { useAppRouter } from './hooks';
import { RootState } from '../interfaces';

export const AppRouter = () => {
  useAppRouter();
  const { auth } = useSelector((state: RootState) => state.auth);

  return (
    <Routes>
      {auth === 'auth' ? (
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
