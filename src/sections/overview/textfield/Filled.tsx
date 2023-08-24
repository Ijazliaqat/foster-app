import { useState } from "react";
// @mui
import {
  MenuItem,
  TextField,
  IconButton,
  InputLabel,
  FormControl,
  FilledInput,
  FormHelperText,
  InputAdornment,
} from "@mui/material";
import { Masonry } from "@mui/lab";
// components
import { Block } from "../Block";

// @mui icons
import PersonIcon from "@mui/icons-material/Person";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// ----------------------------------------------------------------------

const CURRENCIES = [
  { value: "USD", label: "$" },
  { value: "EUR", label: "€" },
  { value: "BTC", label: "฿" },
  { value: "JPY", label: "¥" },
];

const style = {
  "& > *": { my: "8px !important" },
};

// ----------------------------------------------------------------------

export default function Filled() {
  const [currency, setCurrency] = useState("EUR");
  const [values, setValues] = useState({
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false,
  });

  const handleChangeCurrency = (event: any) => {
    setCurrency(event.target.value);
  };

  const handleChange = (prop: any) => (event: any) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  return (
    <Masonry columns={{ xs: 1, md: 2 }} spacing={3}>
      <Block title="General" sx={style}>
        <TextField fullWidth label="Inactive" variant="filled" />
        <TextField
          required
          fullWidth
          label="Activated"
          variant="filled"
          defaultValue="Hello Minimal"
        />
        <TextField
          fullWidth
          type="password"
          label="Password"
          variant="filled"
          autoComplete="current-password"
        />
        <TextField
          disabled
          fullWidth
          label="Disabled"
          variant="filled"
          defaultValue="Hello Minimal"
        />
      </Block>

      <Block title="With Icon & Adornments" sx={style}>
        <TextField
          fullWidth
          label="Filled"
          variant="filled"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon width={24} height={24} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          disabled
          fullWidth
          label="Disabled"
          variant="filled"
          defaultValue="Hello Minimal"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <PersonIcon width={24} height={24} />
              </InputAdornment>
            ),
          }}
        />
        <TextField
          fullWidth
          label="With normal TextField"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Kg</InputAdornment>
            ),
          }}
          variant="filled"
        />
        <FormControl variant="filled" fullWidth>
          <FilledInput
            id="filled-adornment-weight"
            value={values.weight}
            onChange={handleChange("weight")}
            endAdornment={<InputAdornment position="end">Kg</InputAdornment>}
            aria-describedby="filled-weight-helper-text"
            inputProps={{
              "aria-label": "weight",
            }}
          />
          <FormHelperText id="filled-weight-helper-text">Weight</FormHelperText>
        </FormControl>
        <FormControl variant="filled" fullWidth>
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            type={values.showPassword ? "text" : "password"}
            value={values.password}
            onChange={handleChange("password")}
            startAdornment={
              <InputAdornment position="start">
                <PersonIcon width={24} height={24} />
              </InputAdornment>
            }
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? (
                    <VisibilityIcon width={24} height={24} />
                  ) : (
                    <VisibilityOffIcon width={24} height={24} />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
      </Block>

      <Block title="With Caption" sx={style}>
        <TextField
          fullWidth
          label="Error"
          variant="filled"
          defaultValue="Hello Minimal"
          helperText="Incorrect entry."
        />
        <TextField
          error
          fullWidth
          label="Error"
          variant="filled"
          defaultValue="Hello Minimal"
          helperText="Incorrect entry."
        />
      </Block>

      <Block title="Type" sx={style}>
        <TextField
          fullWidth
          type="password"
          label="Password"
          variant="filled"
          autoComplete="current-password"
        />
        <TextField
          fullWidth
          type="number"
          label="Number"
          defaultValue={0}
          variant="filled"
          InputLabelProps={{ shrink: true }}
        />
        <TextField fullWidth label="Search" type="search" variant="filled" />
      </Block>

      <Block title="Size" sx={style}>
        <TextField
          fullWidth
          label="Size"
          size="small"
          variant="filled"
          defaultValue="Small"
        />
        <TextField
          fullWidth
          label="Size"
          variant="filled"
          defaultValue="Normal"
        />
      </Block>

      <Block title="Select" sx={style}>
        <TextField
          select
          fullWidth
          label="Select"
          value={currency}
          variant="filled"
          onChange={handleChangeCurrency}
          helperText="Please select your currency"
        >
          {CURRENCIES.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <TextField
          select
          fullWidth
          size="small"
          value={currency}
          variant="filled"
          label="Native select"
          SelectProps={{ native: true }}
          onChange={handleChangeCurrency}
          helperText="Please select your currency"
        >
          {CURRENCIES.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </Block>

      <Block title="Multiline" sx={style}>
        <TextField
          fullWidth
          label="Multiline"
          multiline
          maxRows={4}
          value="Controlled"
          variant="filled"
        />
        <TextField
          fullWidth
          multiline
          variant="filled"
          placeholder="Placeholder"
          label="Multiline Placeholder"
        />
        <TextField
          rows={4}
          fullWidth
          multiline
          label="Multiline"
          variant="filled"
          defaultValue="Default Value"
        />
      </Block>
    </Masonry>
  );
}
