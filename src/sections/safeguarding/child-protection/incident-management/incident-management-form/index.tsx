import dayjs from "dayjs";
import * as Yup from "yup";
import { Controller, useFormContext } from "react-hook-form";
import { FormHelperText, Typography } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { fData } from "@root/utils/formatNumber";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SignaturePad from "@root/components/SignaturePad";

const todayDate = dayjs().format("MM/DD/YYYY");
const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const IncidentManagementFormDefaultValues = {
  dateUploaded: new Date(todayDate),
  updatePhoto: null,
  description: "",
  version: "",
  createRole: "",
  createdBy: "",
  createTime: "",
  approvedBy: "",
  approverRole: "",
  lastModifiedTime: "",
  lastModifiedBy: "",
  signDateAuther: new Date(todayDate),
  signatureAuther: "",
  signDateApprover: new Date(todayDate),
  signatureApprover: "",
};

export const IncidentManagementFormValidationSchema = Yup.object().shape({
  dateUploaded: Yup.string().trim().required("Field is Required"),
  updatePhoto: Yup.string().required("Field is Required"),
  description: Yup.string().trim().required("Field is Required"),
  version: Yup.string().trim().required("Field is Required"),
  createRole: Yup.string().trim().required("Field is Required"),
  createdBy: Yup.string().trim().required("Field is Required"),
  createTime: Yup.string().trim().required("Field is Required"),
  approvedBy: Yup.string().trim().required("Field is Required"),
  approverRole: Yup.string().trim().required("Field is Required"),
  lastModifiedTime: Yup.string().trim().required("Field is Required"),
  lastModifiedBy: Yup.string().trim().required("Field is Required"),
  signDateAuther: Yup.string().trim().required("Field is Required"),
  signatureAuther: Yup.mixed()
    .required("Field is Required")
    .test(
      "fileFormat",
      "Field is Required",
      (value: any) => value && FILE_FORMATS.includes(value.type)
    )
    .test(
      "fileSize",
      `File must be less than or equal to ${fData(MAX_FILE_SIZE)}`,
      (value: any) => value && value.size <= MAX_FILE_SIZE
    ),
  signDateApprover: Yup.string().trim().required("Field is Required"),
  signatureApprover: Yup.mixed()
    .nullable()
    .required("Field is Required")
    .test(
      "fileFormat",
      "Field is Required",
      (value: any) => value && FILE_FORMATS.includes(value.type)
    )
    .test(
      "fileSize",
      `File must be less than or equal to ${fData(MAX_FILE_SIZE)}`,
      (value: any) => value && value.size <= MAX_FILE_SIZE
    ),
});

export { default as IncidentManagementForm } from "./IncidentManagementForm";
export const IncidentManagementFormData = [
  {
    gridLength: 12,
    heading: "Safeguarding Policy Document",
    componentProps: {
      variant: "body2",
      fontSize: "16px",
      fontWeight: 600,
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 3 },
    },
    component: Typography,
  },
  {
    gridLength: 6,
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
    gridLength: 6,
    uploadPhoto: true,
  },
  {
    gridLength: 12,
    componentProps: {
      name: "description",
      label: "Description",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "version",
      label: "Version",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "createRole",
      label: "Creator Role",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "createdBy",
      label: "Created by",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "createTime",
      label: "Creation Time",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "approvedBy",
      label: "Approved by",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "approverRole",
      label: "Approver Role",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "lastModifiedTime",
      label: "Last modified time",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "lastModifiedBy",
      label: "Last modified by",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "signDateAuther",
      label: "Date of eSignature of Author",
      sx: { mt: 2 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "signatureAuther",
      label: "eSignature of Author",
    },
    component: SignaturePad,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "signDateApprover",
      label: "Date of eSignatue of Approver",
      sx: { mt: 2 },
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "signatureApprover",
      label: "eSignature of Approver",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mt: 2, mb: 10 },
    },
    component: SignaturePad,
  },
];

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
