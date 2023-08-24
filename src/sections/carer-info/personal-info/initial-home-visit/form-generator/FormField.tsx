import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import RHFUploadFile from "@root/components/hook-form/RHFUploadFile";
import { FC } from "react";

const FormField: FC<any> = (props) => {
  const { fieldType, options } = props;
  const prop = { ...props };
  delete prop.fieldType;
  switch (fieldType) {
    case "text":
      return <RHFTextField {...prop} />;
    case "number":
      return <RHFTextField {...prop} />;
    case "email":
      return <RHFTextField {...prop} />;
    case "textarea":
      return <RHFTextField multiline rows={3} {...prop} />;
    case "date":
      return <RHFDatePicker {...prop} />;
    case "radio":
      return <RHFRadioGroupWithLabel {...prop} />;
    case "upload":
      return <RHFUploadFile {...prop} />;
    case "checkbox":
      return <RHFCheckbox name={prop.name} label={prop.label} />;
    case "select":
      return (
        <RHFSelect {...prop}>
          {options?.map((option: any) => (
            <option key={option?.value} value={option?.value}>
              {option?.label}
            </option>
          ))}
        </RHFSelect>
      );
    default:
      return null;
  }
};

export default FormField;
