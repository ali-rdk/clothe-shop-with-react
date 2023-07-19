import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

export const ProductCard = (img) => {
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
        <Box component="img" src={img}></Box>
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
        <Typography sx={{ color: "blue" }}>Rp{product.price}</Typography>
      </CardContent>
    </Card>
  );
};
