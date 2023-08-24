import { useFormContext, Controller } from "react-hook-form";
import {
  Checkbox,
  FormControl,
  FormHelperText,
  InputLabel,
  ListItemText,
  MenuItem,
  Select,
} from "@mui/material";
import { useState } from "react";

export default function RHFSelectWithCheckbox({
  name,
  options,
  ...other
}: any) {
  const { control } = useFormContext();
  const [selectedOptions, setSelectedOptions] = useState<any>([]);

  const handleOptionChange = (event: any) => {
    const { value } = event.target;
    setSelectedOptions(value);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { onChange, onBlur, ref }, fieldState: { error } }) => (
        <FormControl fullWidth error={!!error}>
          <InputLabel
            sx={{
              top: selectedOptions?.length > 0 ? "0px" : "-7px",
              "&.Mui-focused": { top: "0px" },
            }}
          >
            {other.label}
          </InputLabel>
          <Select
            multiple
            value={selectedOptions}
            onChange={(e: any) => {
              handleOptionChange(e);
              onChange(e.target.value.join(","));
            }}
            onBlur={onBlur}
            inputRef={ref}
            renderValue={(selected: any) => selected.join(", ")}
            {...other}
          >
            {options.map((option: any) => (
              <MenuItem key={option} value={option}>
                <Checkbox checked={selectedOptions.includes(option)} />
                <ListItemText primary={option} />
              </MenuItem>
            ))}
          </Select>
          {error && (
            <FormHelperText error sx={{ px: 2 }}>
              {error.message}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
