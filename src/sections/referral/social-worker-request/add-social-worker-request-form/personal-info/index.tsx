import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { RHFSelect } from "@root/components/hook-form";
import { Controller, useFormContext } from "react-hook-form";
import * as Yup from "yup";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { FormHelperText } from "@mui/material";
export const AForm = [
  {
    id: 1,
    componentProps: {
      name: "selectUserType",
      label: "Select User Type",
      sx: { mb: 4 },
    },
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    uploadPhoto: true,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "areaOffice",
      label: "Area Office",
      sx: { mb: 4 },
    },
    component: RHFSelect,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "localAuthority",
      label: "Local Authority",
      sx: { mb: 4 },
    },
    component: RHFSelect,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "firstName",
      label: "First Name",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "lastName",
      label: "Last Name",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "dateUploaded",
      label: "Date Uploaded",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "age",
      label: "Age",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "gender",
      label: "Gender",
      sx: { mb: 4 },
    },
    component: RHFSelect,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "ethnicity",
      label: "Ethnicity",
      sx: { mb: 4 },
    },
    component: RHFSelect,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "ofStedEthnicity",
      label: "Ofsted Ethnicity",
      sx: { mb: 4 },
    },
    component: RHFSelect,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "language",
      label: "Language",
      sx: { mb: 4 },
    },
    component: RHFSelect,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "email",
      label: "Email",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "phoneNumber",
      label: "Phone Number",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "religion",
      label: "Religion",
      sx: { mb: 4 },
    },
    component: RHFSelect,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "partnershipStatus",
      label: "Partnership Status",
      sx: { mb: 4 },
    },
    component: RHFSelect,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "address",
      label: "Address",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 6,
    componentProps: {
      name: "otherDetails",
      label: "Other Details",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 7,
    componentProps: {
      name: "ukResidency",
      label: "Permanant Residency in UK?",
      sx: { mb: 4 },
      value: "Permanant",
    },
    component: RHFCheckbox,
    md: 12,
  },
];

export const defaultValues = {
  selectUserType: "",
  uploadImage: "",
  areaOffice: "",
  localAuthority: "",
  firstName: "",
  lastName: "",
  dateUploaded: null,
  age: "",
  gender: "",
  ethnicity: "",
  ofStedEthnicity: "",
  language: "",
  email: "",
  phoneNumber: "",
  religion: "",
  partnershipStatus: "",
  address: "",
  otherDetails: "",
  ukResidency: "",
};

export const AFormValidationSchema = Yup.object().shape({
  selectUserType: Yup.string().trim().required("Field is Required"),
  uploadImage: Yup.string().trim().required("Field is Required"),
  areaOffice: Yup.string().trim().required("Field is Required"),
  localAuthority: Yup.string().trim().required("Field is Required"),
  firstName: Yup.string().trim().required("Field is Required"),
  lastName: Yup.string().trim().required("Field is Required"),
  dateUploaded: Yup.string().trim().required("Field is Required"),
  age: Yup.string().trim().required("Field is Required"),
  gender: Yup.string().trim().required("Field is Required"),
  ethnicity: Yup.string().trim().required("Field is Required"),
  ofStedEthnicity: Yup.string().trim().required("Field is Required"),
  language: Yup.string().trim().required("Field is Required"),
  email: Yup.string().trim().required("Field is Required"),
  phoneNumber: Yup.string().trim().required("Field is Required"),
  religion: Yup.string().trim().required("Field is Required"),
  partnershipStatus: Yup.string().trim().required("Field is Required"),
  address: Yup.string().trim().required("Field is Required"),
  otherDetails: Yup.string().trim().required("Field is Required"),
  ukResidency: Yup.string().trim().required("Field is Required"),
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
