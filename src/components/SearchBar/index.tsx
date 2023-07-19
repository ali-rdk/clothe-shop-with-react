import {
  Autocomplete,
  Box,
  Button,
  Divider,
  FormControl,
  InputBase,
  Menu,
  TextField,
} from "@mui/material";
import { MagnifierSVG } from "../../assets/svg";
import { ChangeEvent, useState } from "react";
import { Products } from "../../data";
import { useNavigate } from "react-router-dom";

const items = Products.map((product) => product.product);
export const SreachBar = () => {
  const [search, setSearch] = useState<string | null>(null);
  console.log(search);
  const navigate = useNavigate();
  return (
    // <Box
    //   component="div"
    //   sx={{
    //     border: "0.2px solid #000000",
    //     display: "flex",
    //     borderRadius: "25px",
    //     px: 1,
    //     width: "25rem",
    //   }}
    // >
    //   <InputBase
    //     placeholder="Search"
    //     sx={{ ml: 1, width: "20.5rem" }}
    //     onChange={(event: ChangeEvent<HTMLInputElement>) =>
    //       setSearch(event.target.value)
    //     }
    //   />
    //   <Divider sx={{ height: "100%" }} orientation="vertical" />
    //   <Button
    //     sx={{
    //       backgroundColor: "##F2F3F9",
    //       borderRadius: "0px 25px 25px 0px",
    //     }}
    //   >
    //     <MagnifierSVG />
    //   </Button>
    // </Box>
    <FormControl
      sx={{
        border: "0.2px solid #000000",
        display: "flex",
        borderRadius: "25px",
        px: 1,
        width: "25rem",
        flexDirection: "row",
        overflow: "hidden",
      }}
    >
      <Autocomplete
        options={items}
        sx={{ outline: "black", border: "black" }}
        renderInput={(params) => {
          return (
            <TextField
              {...params}
              sx={{
                mt: -1,
                ml: -1,
                width: "20.5rem",
                outline: "none",
                border: "none",
                height: 1.25,
              }}
              placeholder="Search"
            />
          );
        }}
        onChange={(
          event: ChangeEvent<HTMLInputElement>,
          newValue: string | null
        ) => setSearch(newValue)}
        value={search}
      ></Autocomplete>
      <Divider sx={{ height: "100%" }} orientation="vertical" />
      <Button
        sx={{
          backgroundColor: "##F2F3F9",
          borderRadius: "0px 25px 25px 0px",
        }}
        onClick={() => {
          console.log("fhfhfh");

          navigate(`/product/${search}`);
        }}
        type="submit"
      >
        <MagnifierSVG />
      </Button>
    </FormControl>
  );
};
