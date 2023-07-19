import {
  Box,
  Button,
  FormControl,
  FormGroup,
  FormLabel,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import { PriceSVG } from "../../assets/svg";
import { CheckBoxList } from "../Checkbox";

const Colors = ["blue", "white", "black", "green", "yellow", "red"];

export const SideBar = () => {
  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        backgroundColor: "white",
        width: "20.5rem",
        p: 2,
        flexDirection: "column",
        gap: 3,
        height: "40rem",
        mb: 4,
      }}
    >
      <CheckBoxList />
      <FormControl>
        <FormLabel>Price</FormLabel>
        <FormGroup>
          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="end" sx={{ m: -1.6, mr: 2 }}>
                  <PriceSVG />
                </InputAdornment>
              ),
            }}
            placeholder="Max price"
            style={{ paddingLeft: "2rem", margin: "0.5rem" }}
          />

          <TextField
            InputProps={{
              startAdornment: (
                <InputAdornment position="end" sx={{ m: -1.6, mr: 2 }}>
                  <PriceSVG />
                </InputAdornment>
              ),
            }}
            placeholder="Min price"
            style={{ paddingLeft: "2rem", margin: "0.5rem" }}
          />
        </FormGroup>
      </FormControl>
      <Box sx={{ width: "16rem" }}>
        <Typography>Color</Typography>
        <Box component="div" sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
          <Button
            sx={{
              backgroundColor: "blue",
              width: "2.5rem",
              height: "2.5rem",
            }}
          ></Button>
          <Button
            sx={{
              backgroundColor: "yellow",
              width: "2.5rem",
              height: "2.5rem",
            }}
          ></Button>
          <Button
            sx={{
              backgroundColor: "green",
              width: "2.5rem",
              height: "2.5rem",
            }}
          ></Button>
          <Button
            sx={{ backgroundColor: "red", width: "2.5rem", height: "2.5rem" }}
          ></Button>
          <Button
            sx={{
              backgroundColor: "black",
              width: "2.5rem",
              height: "2.5rem",
            }}
          ></Button>
        </Box>
      </Box>
    </Box>
  );
};
