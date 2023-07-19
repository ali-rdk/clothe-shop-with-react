import { Box, Button, Container, Typography } from "@mui/material";
import "@splidejs/react-splide/css";
import { useParams } from "react-router-dom";
import { Products } from "../../data";
import { useDispatch } from "react-redux";
import { addItem } from "../../feature/cartSlice";

export const ProductPage = () => {
  const { productName } = useParams();
  const productItem = Products.filter((product) => {
    if (product.product === productName) return product;
  });
  // const cart = useSelector((state: RootState) => state.cart.value)
  const dispatch = useDispatch();

  return (
    <>
      <Box sx={{ backgroundColor: "#EAEAEA", p: 4 }}>
        <Container
          maxWidth="lg"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: 6,
            justifyContent: "center",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
            <Box sx={{ backgroundColor: "white", p: 5 }}>
              <Box
                component="img"
                src={productItem[0].img}
                sx={{ width: "15rem", height: "15rem" }}
              />
            </Box>
          </Box>
          <Box sx={{ display: "flex", gap: 5, flexDirection: "column" }}>
            <Typography fontSize="2.25rem">{productItem[0].product}</Typography>
            <Typography fontSize="3.25rem">
              RP {productItem[0].price}
            </Typography>
            <Button
              sx={{
                backgroundColor: "#E42C14",
                borderRadius: 3,
                py: 0.5,
                px: 5,
              }}
              onClick={() => {
                dispatch(addItem(productItem[0].product));
              }}
            >
              Buy
            </Button>
          </Box>
        </Container>
      </Box>
    </>
  );
};
