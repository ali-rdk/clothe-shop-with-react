import {
  Box,
  IconButton,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import image from "../../../assets/images/register.png";
import svg from "../../../assets/images/Saly-33.png";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import GoogleIcon from "@mui/icons-material/Google";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCallback, useState } from "react";
import { LoadingButton } from "@mui/lab";
import { instance } from "../../../api/constants";
import toast from "react-hot-toast";
import Cookies from "js-cookie";

const RegisterSchema = yup
  .object({
    email: yup.string().email().required(),
    password: yup.string().required(),
  })
  .required();

interface IRegisterData {
  email: string;
  password: string;
}
export const RegisterScreen = () => {
  const [passtype, setpasstype] = useState<"password" | "text">("password");
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(RegisterSchema) });
  const handleRegister = useCallback((data: IRegisterData) => {
    console.log(data);

    instance
      .post("/api/register", data)
      .then((res) => {
        console.log(res);
        setLoading(false);
        toast.success("you are registered");
        Cookies.set("token", res.data.token, {
          expires: 7,
        });
        Cookies.set("id", res.data.id, {
          expires: 7,
        });
        navigate(`/home/${res.data.id}`);
      })
      .catch(() => {
        setLoading(true);
        toast.error("somthing wrong");
      });
  }, []);
  return (
    <>
      <Box sx={{ width: "100vw", display: "flex" }}>
        <Box
          sx={{
            width: "60vw",
            backgroundImage: `linear-gradient(to right, rgba(13, 13, 13, 0.46), rgba(13, 13, 13, 0.46)) ,url(${image})`,
            objectFit: "fill",
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
            onSubmit={handleSubmit(handleRegister)}
          >
            <Typography component="h1" sx={{ textAlign: "center" }}>
              Register
            </Typography>
            <TextField
              color="secondary"
              label="Username"
              sx={{ backgroundColor: "#F5F4F2", p: 1 }}
              //   InputProps={{ ...register("username") }}
              //   error={Boolean(errors.username?.message)}
              //   helperText={errors.username?.message}
            />
            <TextField
              color="secondary"
              label="Email"
              sx={{ backgroundColor: "#F5F4F2", p: 1, borderRadius: "5px" }}
              InputProps={{ ...register("email") }}
              error={Boolean(errors.email?.message)}
              helperText={errors.email?.message}
            />
            <TextField
              color="secondary"
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
              variant="contained"
              type="submit"
              sx={{ backgroundColor: "#E42C14", color: "white" }}
              loading={loading}
            >
              Register
            </LoadingButton>
          </Box>
          <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
            <Typography>Or login with</Typography>
          </Box>
          <Box
            sx={{ display: "flex", gap: 4, justifyContent: "center", mt: 3 }}
          >
            <IconButton>
              <GoogleIcon />
            </IconButton>
            <IconButton>
              <FacebookIcon />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", gap: 3 }}>
            <Typography>Already have an account ?</Typography>
            <Typography>
              <Link
                to="/auth/login"
                style={{ textDecoration: "none", color: "blue" }}
              >
                Login
              </Link>
            </Typography>
          </Box>
        </Box>
      </Box>
    </>
  );
};
