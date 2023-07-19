import {
  Avatar,
  Box,
  Divider,
  IconButton,
  Menu,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import Cookies from "js-cookie";
import { instance } from "../../../api/constants";

const linkStyle = {
  textDecoration: "none",
  color: "black",
  fontSize: "1rem",
};

export const ProfileCard = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const [avatarSrc, setaAvatrSrc] = useState<string>(
    "../../assets/svg/User.svg"
  );
  const handleClose = () => {
    setAnchorEl(null);
  };
  instance.get(`/api/users/${Cookies.get("id")}`).then((res) => {
    setaAvatrSrc(res.data.avatar);
  });
  console.log(avatarSrc);

  if (!Cookies.get("token")) {
    return (
      <Box>
        <IconButton
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar src={avatarSrc} />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Box sx={{ width: "12rem", px: 2 }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 1 }}>
              <Avatar src="../../assets/svg/User.svg" />
              <Typography>Guest</Typography>
            </Box>
            <Divider />
            <Box>
              <Typography
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                  py: 1,
                }}
              >
                <Link to="" style={linkStyle}>
                  settings
                </Link>
                <Link to="/cart" style={linkStyle}>
                  My order
                </Link>
                <Link to="auth/login" style={linkStyle}>
                  Log in
                </Link>
                <Link to="auth/register" style={linkStyle}>
                  Register
                </Link>
              </Typography>
            </Box>
          </Box>
        </Menu>
      </Box>
    );
  } else {
    return (
      <Box>
        <IconButton
          aria-controls={open ? "basic-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
        >
          <Avatar src="../../assets/svg/User.svg" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
          sx={{ display: "flex", flexDirection: "column", gap: 2 }}
        >
          <Box sx={{ width: "12rem", px: 2 }}>
            <Box sx={{ display: "flex", gap: 2, alignItems: "center", mb: 1 }}>
              <Avatar src="../../assets/svg/User.svg" />
              <Typography>Guest</Typography>
            </Box>
            <Divider />
            <Box
              sx={{ display: "flex", flexDirection: "column", gap: 0.5, py: 1 }}
            >
              <Link to="" style={linkStyle}>
                settings
              </Link>
              <Link to="/cart" style={linkStyle}>
                My order
              </Link>
              <Typography style={linkStyle}>Log out</Typography>
            </Box>
          </Box>
        </Menu>
      </Box>
    );
  }
};
