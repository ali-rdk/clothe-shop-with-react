import { Box, Button, Container, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { useState } from "react";
import { Products } from "../../data";
import { checkOut } from "../../feature/cartSlice";

interface ProductType {
  product: string;
  price: number;
  img: string;
}

export const CartScreen = () => {
  const cart = useSelector((state: RootState) => state.cart.value);
  console.log(cart);
  const dispatch = useDispatch();
  const items = Products.filter((item, index) => {
    if (item.product === cart[index]) {
      return item;
    }
  });
  console.log(items);

  const totalPrice = items
    .map((item) => {
      return item.price;
    })
    .reduce((a, b) => {
      return a + b;
    }, 0);

  return (
    <>
      <Box sx={{ backgroundColor: "#F3F3F7" }}>
        <Container maxWidth="lg" sx={{ display: "flex", gap: 3, p: 5 }}>
          <Box
            sx={{
              p: 2,
              width: "60vw",
              display: "flex",
              flexDirection: "column",
              gap: 2,
              overflowY: "scroll",
              height: "15rem",
            }}
          >
            {items.map((item) => {
              return (
                <Box
                  sx={{
                    p: 2,
                    gap: 2,
                    backgroundColor: "white",
                    borderRadius: 3,
                    alignItems: "center",
                    display: "flex",
                  }}
                >
                  <Box
                    component="img"
                    src={item.img}
                    width="12rem"
                    height="12rem"
                  />
                  <Box>
                    <Typography fontSize="1.5rem">
                      Product: {item.product}
                    </Typography>
                    <Typography fontSize="1rem">Price: {item.price}</Typography>
                  </Box>
                </Box>
              );
            })}
          </Box>
          <Box
            sx={{
              height: "15rem",
              backgroundColor: "white",
              width: "40vw",
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              borderRadius: 3,
            }}
          >
            <Typography fontSize="2rem" textAlign="center">
              Cart summery
            </Typography>
            <Box>
              <Typography fontSize="1.5rem">
                Total Price: {totalPrice}
              </Typography>
              <Typography fontSize="1rem">
                Total Amount:{items.length}
              </Typography>
            </Box>
            <Button
              color="primary"
              sx={{ backgroundColor: "#E42C14", borderRadius: 2 }}
              onClick={() => {
                dispatch(checkOut());
              }}
            >
              Check Out
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};
