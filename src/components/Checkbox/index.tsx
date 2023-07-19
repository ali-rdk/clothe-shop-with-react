import {
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
} from "@mui/material";
import { Products } from "../../data";
import { ChangeEvent, useState } from "react";
import Checkbox from "@mui/material/Checkbox";

const Categories = Products.map((product) => product.product);

export const CheckBoxList = () => {
  const [checked, setChecked] = useState<string[]>([]);
  const handleCheck = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("ghgh");

    const index = checked.indexOf(event.target.value);
    if (index === -1) {
      setChecked([...checked, event.target.value]);
    } else {
      setChecked(checked.filter((check) => check !== event.target.value));
    }
  };
  return (
    <FormControl component="fieldset">
      <FormLabel>Category</FormLabel>
      <FormGroup sx={{ p: 2 }}>
        {Categories.map((item) => {
          return (
            <FormControlLabel
              control={
                <Checkbox
                  checked={checked.includes(item)}
                  onChange={(event) => {
                    handleCheck(event);
                  }}
                  value={item}
                />
              }
              label={item}
            />
          );
        })}
      </FormGroup>
    </FormControl>
  );
};
