// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import {
  Radio,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
  Stack,
  FormLabel,
} from "@mui/material";

// returns true if 'Yes' selected and false for 'No'----------------------------------------------------------------------

export default function RHFRadioGroupBoolean({
  name,
  options,
  label,
  linebreak,
  getOptionLabel,
  radioLabel1,
  radioLabel2,
  ...other
}: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <Stack
            direction={linebreak ? "column" : "row"}
            alignItems={linebreak ? "left" : "center"}
            spacing={3}
          >
            <FormLabel>{label} </FormLabel>
            <RadioGroup
              {...field}
              row
              {...other}
              onChange={(e) => field.onChange(e.target.value === "true")}
            >
              <FormControlLabel
                disabled={other?.disabled}
                style={{ display: "flex" }}
                value={true}
                control={<Radio />}
                label={radioLabel1 || "Yes"}
              />
              <FormControlLabel
                disabled={other?.disabled}
                style={{ display: "flex" }}
                value={false}
                control={<Radio />}
                label={radioLabel2 || "No"}
              />
            </RadioGroup>
          </Stack>

          {!!error && (
            <FormHelperText error sx={{ px: 2 }}>
              {error.message}
            </FormHelperText>
          )}
        </div>
      )}
    />
  );
}
