import { MainLayout } from "..";
import { Outlet } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

export const AuthLayout = () => {
  // useAuth();
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};
