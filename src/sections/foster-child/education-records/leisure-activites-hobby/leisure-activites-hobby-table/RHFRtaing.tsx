// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { FormHelperText, FormLabel, Rating, Typography } from "@mui/material";
//

// ----------------------------------------------------------------------

export default function RHFRating({ name, ...other }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <>
          <FormLabel
            sx={{ display: "block", marginTop: "-10px", marginBottom: "5px" }}
          >
            {other.label}
          </FormLabel>

          <Rating
            {...field}
            // error={!!error}
            // helperText={error?.message}
            {...other}
          />
        </>
      )}
    />
  );
}
