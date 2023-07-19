import { Box, Container, Typography } from "@mui/material";
import { LogoSVG } from "../../assets/svg";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <Box component="div" sx={{ p: 5, mt: 4 }}>
      <Container
        maxWidth="lg"
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box component="div" sx={{ display: "flex", gap: 3 }}>
          <LogoSVG />
          <Box component="div">
            <Typography
              sx={{
                textDecoration: "none",
                color: "#97404C",
                fontSize: "25px",
              }}
            >
              <Link
                style={{ textDecoration: "none", color: "black" }}
                to="/home"
              >
                FASHIONHOLIC
              </Link>
            </Typography>
            <Typography>For yout daily outfit</Typography>
          </Box>
        </Box>

        <Box component="div">
          <Typography sx={{ fontSize: "22px", my: 2 }}>Service</Typography>
          <Typography
            sx={{
              fontSize: "18px",
              flexDirection: "column",
              gap: 1,
              fontStyle: "normal",
              display: "flex",
            }}
          >
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Product
            </Link>
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Contact us
            </Link>
          </Typography>
        </Box>

        <Box component="div">
          <Typography sx={{ fontSize: "22px", my: 2 }}>SUPPORT</Typography>
          <Typography
            sx={{
              fontSize: "18px",
              flexDirection: "column",
              gap: 1,
              fontStyle: "normal",
              display: "flex",
            }}
          >
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              About fashionholic.com
            </Link>
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Privacy policy & terms
            </Link>
          </Typography>
        </Box>

        <Box component="div">
          <Typography sx={{ fontSize: "22px", my: 2 }}>FOLLOW US ON</Typography>
          <Typography
            sx={{
              fontSize: "18px",
              flexDirection: "column",
              gap: 1,
              fontStyle: "normal",
              display: "flex",
            }}
          >
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Instagram
            </Link>
            <Link to="" style={{ textDecoration: "none", color: "black" }}>
              Facebook
            </Link>
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};
