import {
  Box,
  Button,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import image from "../../../assets/images/login.png";
import svg from "../../../assets/images/Saly-35.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoadingButton } from "@mui/lab";
import { instance } from "../../../api/constants";
import { toast } from "react-hot-toast";
import Cookies from "js-cookie";

const LoginSchema = yup.object({
  userName: yup.string().required(),
  password: yup.string().required(),
});

interface ILoginData {
  userName: string;
  password: string;
}

export const LoginScreen = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILoginData>({
    resolver: yupResolver(LoginSchema),
  });
  const navigate = useNavigate();
  const [passtype, setpasstype] = useState<"password" | "text">("password");
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = useCallback((data: ILoginData) => {
    console.log(data);

    instance
      .post("/api/login", data)
      .then((res) => {
        console.log(res);
        setLoading(false);
        toast.success("you are logged in successfully");
        Cookies.set("token", res.data.token, {
          expires: 7,
        });
        navigate("/home");
      })
      .catch((res) => {
        console.log(res.response.data.error);

        setLoading(true);
        toast.error(res.response.data.error);
      });
  }, []);

  return (
    <>
      <Box sx={{ width: "100vw", display: "flex" }}>
        <Box
          sx={{
            width: "60vw",
            backgroundImage: `linear-gradient(to right, rgba(13, 13, 13, 0.46), rgba(13, 13, 13, 0.46)) ,url(${image})`,
            objectFit: "unset",
            backgroundRepeat: "no-repeat",
          }}
        >
          <Box sx={{ color: "white", mt: "21rem", pl: 4 }}>
            <Typography sx={{ fontSize: "40px" }}>
              “1st Fashion Brand in <br /> Indonesia”
            </Typography>
            <Typography>fashionholic.com</Typography>
          </Box>
        </Box>
        <Box
          sx={{
            width: "20vw",
            backgroundColor: "white",
            height: "60rem",
            alignItems: "center",
            ml: "8rem",
          }}
        >
          <Box
            component="img"
            src={svg}
            sx={{ width: "16rem", height: "16rem" }}
          ></Box>

          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 3 }}
            onSubmit={handleSubmit(handleLogin)}
          >
            <Typography component="h1" sx={{ textAlign: "center" }}>
              Login
            </Typography>
            <TextField
              label="Email or Username"
              sx={{ backgroundColor: "#F5F4F2", p: 1, borderRadius: "5px" }}
              InputProps={{
                ...register("userName"),
              }}
              error={Boolean(errors.userName?.message)}
              helperText={errors.userName?.message}
            />
            <TextField
              label="Password"
              sx={{ backgroundColor: "#F5F4F2", p: 1 }}
              type={passtype}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      onClick={() => {
                        setpasstype((perv) => {
                          if (perv === "password") return "text";
                          return "password";
                        });
                      }}
                    >
                      {passtype === "text" ? (
                        <VisibilityIcon />
                      ) : (
                        <VisibilityOffIcon />
                      )}
                    </IconButton>
                  </InputAdornment>
                ),
                ...register("password"),
              }}
              error={Boolean(errors.password?.message)}
              helperText={errors.password?.message}
            />
            <LoadingButton
              type="submit"
              variant="contained"
              sx={{ backgroundColor: "#E42C14", color: "white" }}
              loading={loading}
            >
              Login
            </LoadingButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              mt: 2,
              alignItems: "center",
              gap: 3,
            }}
          >
            <Typography>
              <Link to="" style={{ color: "blue", textDecoration: "none" }}>
                Forget Password?
              </Link>
            </Typography>
            <Typography>Or login with</Typography>
          </Box>
          <Box
            sx={{
              display: "flex",
              gap: 4,
              justifyContent: "center",
              my: 2,
              alignItems: "center",
            }}
          >
            <IconButton>
              <GoogleIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", gap: 3 }}>
            <Typography>Don’t have an account yet?</Typography>
            <Typography>
              <Link
                to="/auth/register"
                style={{ textDecoration: "none", color: "blue" }}
              >
                Sign UP
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
