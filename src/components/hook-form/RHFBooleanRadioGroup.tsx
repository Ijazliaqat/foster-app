// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import {
  Radio,
  RadioGroup,
  FormHelperText,
  FormControlLabel,
} from "@mui/material";

// ----------------------------------------------------------------------

export default function RHFBooleanRadioGroup({
  name,
  options,
  getOptionLabel,
  disabled = false,
  ...other
}: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, field: { onChange }, fieldState: { error } }) => (
        <div>
          <RadioGroup
            {...field}
            row
            {...other}
            onChange={(e: any) => {
              const newValue = e.target.value;

              if (typeof newValue !== "string") return;
              if (newValue === "true") onChange(true);
              if (newValue === "false") onChange(false);
            }}
          >
            {options.map((option: any, index: number) => (
              <FormControlLabel
                key={option}
                value={option}
                control={<Radio disabled={disabled} />}
                label={getOptionLabel?.length ? getOptionLabel[index] : option}
              />
            ))}
          </RadioGroup>

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
