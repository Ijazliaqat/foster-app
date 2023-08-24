// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { Checkbox, FormGroup, FormControlLabel } from "@mui/material";

// ----------------------------------------------------------------------

export function RHFCheckbox({ name, label, ...other }: any) {
  const { control } = useFormContext();

  return (
    <FormControlLabel
      label={label}
      control={
        <Controller
          name={name}
          control={control}
          render={({ field }) => (
            <Checkbox
              {...field}
              checked={field.value}
              disabled={other.disabled}
              sx={(theme) => ({
                stroke: theme.palette.background.default,
                strokeWidth: 1,
              })}
            />
          )}
        />
      }
    />
  );
}

// ----------------------------------------------------------------------

export function RHFMultiCheckbox({ name, options, ...other }: any) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {
        const onSelected = (option: any) =>
          field?.value?.includes(option)
            ? field?.value?.filter((value: any) => value !== option)
            : [...field?.value, option];

        return (
          <FormGroup>
            {options.map((option: any) => (
              <FormControlLabel
                key={option}
                control={
                  <Checkbox
                    checked={field?.value?.includes(option)}
                    onChange={() => field.onChange(onSelected(option))}
                  />
                }
                label={option}
                {...other}
              />
            ))}
          </FormGroup>
        );
      }}
    />
  );
}
