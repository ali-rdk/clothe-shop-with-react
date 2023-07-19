import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Container,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Typography,
} from "@mui/material";
import { SideBar } from "../../components/SideBar";
import { HomeLayout } from "../../layouts";
import { useState } from "react";
import { MenuBar } from "../../components";
import { Navigate, useNavigate } from "react-router-dom";
import { Products } from "../../data";

export const HomeScreen = () => {
  const [state, setState] = useState("Relevant");

  const navigator = useNavigate();

  const handleChange = (event) => {
    setState(event.target.value);
  };

  const handleClick = (productName: string) => {
    navigator(`/product/${productName}`);
  };
  return (
    <>
      <Box sx={{ backgroundColor: "#EAEAEA" }}>
        <MenuBar />
        <Container maxWidth="lg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Typography>Sort by:</Typography>
            <Box sx={{ mt: "-17rem" }}>
              <FormControl>
                <InputLabel>Relevant</InputLabel>
                <Select
                  value={state}
                  onChange={handleChange}
                  sx={{
                    marginTop: 35,
                    width: 250,
                    height: 50,
                  }}
                >
                  <MenuItem value={1}>Newest</MenuItem>
                  <MenuItem value={2}>Relevant</MenuItem>
                  <MenuItem value={3}>expensive</MenuItem>
                  <MenuItem value={4}>cheapest</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 2, pt: 2 }}>
            <SideBar />
            <Box
              sx={{ display: "flex", gap: 2, flexWrap: "wrap", width: "90vw" }}
            >
              {Products.map((product) => {
                return (
                  <Card
                    sx={{
                      display: "flex",
                      gap: 1,
                      width: "11rem",
                      height: "13rem",
                      p: 1,
                      flexDirection: "column",
                    }}
                  >
                    <CardMedia
                      sx={{
                        display: "flex",
                        height: "8rem",
                        justifyContent: "center",
                      }}
                    >
                      <Box component="img" src={product.img}></Box>
                    </CardMedia>
                    <CardContent
                      sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        gap: 2,
                      }}
                    >
                      <Typography
                        onClick={(event) => {
                          handleClick(event.target.innerText);
                        }}
                      >
                        {product.product}
                      </Typography>
                      <Typography sx={{ color: "blue" }}>
                        Rp{product.price}
                      </Typography>
                    </CardContent>
                  </Card>
                );
              })}
            </Box>
          </Box>
        </Container>
      </Box>
    </>
  );
};
