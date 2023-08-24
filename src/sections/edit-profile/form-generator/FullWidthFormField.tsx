import { Grid } from "@mui/material";
import FormField from "./FormField";
import { FC } from "react";

const FullWidthFormField: FC<any> = ({ item, isSubmitting, disabled }) => {
  return (
    <Grid item sm={12} container direction="column">
      {item.map(
        ({ type, name, label, fieldHeader, options }: any, index: number) => {
          return (
            <Grid key={index} item sx={{ padding: "0.5em" }}>
              {fieldHeader && fieldHeader}
              <FormField
                fieldType={type}
                name={name}
                label={label}
                disabled={isSubmitting || disabled}
                options={options}
              />
            </Grid>
          );
        }
      )}
    </Grid>
  );
};

export default FullWidthFormField;
