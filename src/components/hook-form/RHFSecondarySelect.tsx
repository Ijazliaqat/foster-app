// form
import { useFormContext, Controller } from "react-hook-form";
// @mui
import { Box, Chip } from "@mui/material";
import { Theme, useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

// ----------------------------------------------------------------------
// styles
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(option: string, selectedOptions: any, theme: Theme) {
  return {
    fontWeight:
      selectedOptions.value === option
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
  };
}

// ----------------------------------------------------------------------

function ChipWrapper({ selected: { label, value, bgColor, textColor } }: any) {
  return (
    <Chip
      key={value}
      label={label}
      sx={{ backgroundColor: bgColor, color: textColor }}
    />
  );
}

// ----------------------------------------------------------------------

export default function RHFMultiSelect({
  name,
  label,
  options,
  ...other
}: any) {
  const { control, setValue } = useFormContext();
  const theme = useTheme();

  const handleChange = (event: SelectChangeEvent<any[]>) => {
    const {
      target: { value },
    }: any = event;

    setValue(name, value);
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl sx={{ width: "100%" }}>
          <InputLabel id={label + name}>{label}</InputLabel>
          <Select
            {...field}
            {...other}
            id={label}
            labelId={label + name}
            MenuProps={MenuProps}
            input={<OutlinedInput id={name} label={label} />}
            renderValue={(selected: any) => {
              return <ChipWrapper selected={selected} options={options} />;
            }}
            fullWidth
            onChange={handleChange}
            sx={{
              "& .MuiSelect-select": {
                py: field.value ? 1.2 : 1.65,
              },
            }}
            onClose={() => {
              setTimeout(() => {
                (document.activeElement as HTMLElement).blur();
              }, 0);
            }}
          >
            {options.map(({ value, label, ...other }: any) => (
              <MenuItem
                key={value}
                value={{ label, value, ...other }}
                style={getStyles(value, field.value, theme)}
              >
                {label}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      )}
    />
  );
}
