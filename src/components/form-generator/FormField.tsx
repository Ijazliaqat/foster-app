import {
  RHFCheckbox,
  RHFRadioGroup,
  RHFSelect,
  RHFSwitch,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { FC } from "react";

const FormField: FC<any> = (props) => {
  const { fieldType } = props;
  const prop = { ...props };
  delete prop.fieldType;
  switch (fieldType) {
    case "TEXT":
      return <RHFTextField fullWidth {...prop} />;

    case "TEXT_MULTILINE":
      return <RHFTextField fullWidth multiline rows={4} {...prop} />;
    case "TEXT_MULTILINE_TWO_LINES":
      return <RHFTextField fullWidth multiline rows={2} {...prop} />;
    case "DATE_PICKER":
      return <RHFDatePicker fullWidth {...prop} />;

    case "SELECT":
      return (
        <RHFSelect {...prop}>
          {prop?.options.map((option: string) => {
            return (
              <option key={option} value={option}>
                {option}
              </option>
            );
          })}
        </RHFSelect>
      );

    case "RADIO":
      return <RHFRadioGroup {...prop}></RHFRadioGroup>;

    case "CHECKBOX":
      return <RHFCheckbox {...prop} />;
    case "SWITCH":
      return <RHFSwitch {...prop} />;
    default:
      return null;
  }
};

export default FormField;
