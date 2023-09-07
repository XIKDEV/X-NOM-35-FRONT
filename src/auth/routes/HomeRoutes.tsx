import { Navigate, Route, Routes } from 'react-router-dom';
import { LayoutMainPage } from '../../layouts/pages';
import { UserInfoPage, UsersPage } from '../../users/pages';
import { EnterpriseInfoPage, EnterprisesPage } from '../../enterprises/pages';

export const HomeRoutes = () => {
  return (
    <Routes>
      <Route
        path="/nom035/enterprises"
        element={<LayoutMainPage page={EnterprisesPage} />}
      />
      <Route
        path="/nom035/enterprise"
        element={<LayoutMainPage page={EnterpriseInfoPage} />}
      />
      <Route
        path="/nom035/users"
        element={<LayoutMainPage page={UsersPage} />}
      />
      <Route
        path="/nom035/user"
        element={<LayoutMainPage page={UserInfoPage} />}
      />
      <Route path="/*" element={<Navigate to="/nom035/enterprises" />} />
    </Routes>
  );
};
