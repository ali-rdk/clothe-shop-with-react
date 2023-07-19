import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import { instance } from "../../api/constants";

export const useAuth = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  useEffect(() => {
    if (!Cookies.get("token")) {
      navigate("auth/register");
    } else {
      instance.defaults.headers.common.Authorization = Cookies.get("token");
      if (pathname === "auth/register") {
        navigate("/home");
      }
    }
  }, []);
};
