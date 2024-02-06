import { Navigate, Route, Routes } from 'react-router-dom';
import { LayoutMainPage } from '../../layouts/pages';
import { UsersPage } from '../../users/pages';
import { EnterprisesPage } from '../../enterprises/pages';

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route
        path="/nom035/empresas"
        element={<LayoutMainPage page={EnterprisesPage} />}
      />

      <Route
        path="/nom035/usuarios"
        element={<LayoutMainPage page={UsersPage} />}
      />
      <Route path="/*" element={<Navigate to="/nom035/empresas" />} />
    </Routes>
  );
};
