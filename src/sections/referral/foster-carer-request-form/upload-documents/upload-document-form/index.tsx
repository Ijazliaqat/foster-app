import { FormHelperText } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import { Controller, useFormContext } from "react-hook-form";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const UploadDocoment = [
  {
    id: 1,
    gridLength: 6,
    componentProps: {
      name: "documentType",
      label: "Document Type",
      fullWidth: true,
      select: true,
      sx: { mb: 5 },
    },
    options: [
      { value: "PDF", label: "PDF" },
      { value: "CSV", label: "CSV" },
    ],
    component: RHFSelect,
    md: 12,
  },
  {
    id: 2,
    gridLength: 6,
    componentProps: {
      name: "documentDate",
      label: "Document Date",
      fullWidth: true,
      sx: { mb: 5 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "passwordtoOpenDocument",
      label: "Password to Open Document",
      sx: { mb: 5 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "uploadImage",
      size: "small",
    },
    component: RHFUploadFile,
    md: 12,
  },
];

export const UploadDocomentValues = {
  documentType: "",
  documentDate: new Date("03-03-2000"),
  passwordtoOpenDocument: "",
  uploadImage: "",
};

export const UploadDocomentValidationSchema = Yup.object().shape({
  documentType: Yup.string().trim().required("Field is Required"),
  documentDate: Yup.date().required("Field is Required"),
  passwordtoOpenDocument: Yup.string().trim().required("Field is Required"),
  uploadImage: Yup.string().trim().required("Field is Required"),
});

function RHFUploadFile(props: any) {
  const { disabled, name, ...other } = props;
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && !field.value;
        return (
          <>
            <label
              htmlFor={name}
              style={{
                marginTop: "10px",
                marginBottom: "",
                height: "40px",
                borderRadius: "4px",
                // border: `1px solid #A3A6BB`,
                border: `1px solid ${
                  other?.formState?.errors?.[`${name}`] ? "red" : "#E5E8EB"
                }`,
                width: "100% !important",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: `${disabled ? "" : "pointer"}`,
              }}
            >
              <div style={{ paddingLeft: "10px", color: "#A3A6BB" }}>
                {field?.value?.name || "Upload Image"}
              </div>
              <FileUploadIcon
                sx={{
                  color: "#A3A6BB",
                  marginRight: "10px",
                }}
              />
            </label>
            <input
              type="file"
              disabled={disabled}
              name={name}
              id={name}
              onChange={(e: any) => {
                const file: any = e.target.files?.[0];
                field.onChange({ target: { value: file, name: field.name } });
              }}
              style={{ display: "none" }}
            />
            {checkError && (
              <FormHelperText error sx={{ px: 2 }}>
                {error.message}
              </FormHelperText>
            )}
          </>
        );
      }}
    />
  );
}
