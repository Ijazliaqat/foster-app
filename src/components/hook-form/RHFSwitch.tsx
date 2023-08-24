// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { Switch, FormControlLabel } from "@mui/material";

// ----------------------------------------------------------------------

export default function RHFSwitch({ name, disabled, ...other }: any) {
  const { control } = useFormContext();
  return (
    <FormControlLabel
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Switch disabled={disabled} {...field} checked={field.value} />
          )}
          {...other}
        />
      }
      {...other}
    />
  );
}
