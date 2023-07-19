import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HomeScreen } from "./screens";
import { RegisterScreen } from "./screens/Auth/register";
import { LoginScreen } from "./screens/Auth/login";
import { ProductPage } from "./screens/ProductScreen";
import { createTheme, ThemeProvider } from "@mui/material";
import { AuthLayout } from "./layouts/AuthLayout";
import { MainLayout } from "./layouts";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { CartScreen } from "./screens/cart";
import { Toaster } from "react-hot-toast";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "home",
        element: <HomeScreen />,
      },
      {
        path: "product/:productName",
        element: <ProductPage />,
      },
      {
        path: "cart",
        element: <CartScreen />,
      },
    ],
  },
  {
    path: "auth",
    element: <AuthLayout />,
    children: [
      {
        path: "register",
        element: <RegisterScreen />,
      },
      {
        path: "login",
        element: <LoginScreen />,
      },
    ],
  },
]);

const theme = createTheme({
  typography: {
    fontFamily: "Inter",
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Inter';
          font-style: normal;
          font-display: swap;
          font-weight: 400;
          src: url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap');
          unicodeRange: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF;
        }
      `,
    },
    MuiButton: {
      defaultProps: {
        color: "primary",
        disableRipple: "true",
        styleOverrides: {
          root: {
            "&:hover": {
              backgroundColor: "transparent",
            },
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: "#e3f2fd",
    },
    secondary: {
      main: "#E42C14",
    },
  },
});

const App = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
        <Toaster />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
