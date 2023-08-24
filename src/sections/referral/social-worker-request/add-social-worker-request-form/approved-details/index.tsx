import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { RHFSelect } from "@root/components/hook-form";
import { Controller, useFormContext } from "react-hook-form";
import * as Yup from "yup";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { FormHelperText, Typography } from "@mui/material";

export const BForm = [
  {
    id:1,
    componentProps: {
      name: "userCode",
      label: "User Code",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  
  {
    id: 2,
    componentProps: {
      name: "referredBy",
      label: "Referred By",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "referralDate",
      label: "Referral Date",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "approvedBy",
      label: "Approved By",
      sx: { mb: 4 },
    },
    component: RHFSelect,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "userGeography",
      label: "User Geography",
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
      name: "requestDateNotified",
      label: "Request Date Modified",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "branchManagerEmail",
      label: "Branch Manager Email",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "branchAddress",
      label: "Branch Address",
      multiline: true,
      fullWidth: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 1,
    componentProps: {
      name: "branchManagerName",
      fullWidth: true,
      label: "Branch Manager Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "branchManagerTelephone",
      fullWidth: true,
      label: "Branch Manager Telephone",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "areaTeam",
      fullWidth: true,
      label: "Area Team",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 1,
    componentProps: {
      name: "EDTNumber",
      label: "EDT Number",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "behavioural",
      label: "Behavioural",
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
    id: 1,
    componentProps: {
      name: "referralStatus",
      label: "Referral Status",
      sx: { mb: 4 },
    },
    component: RHFSelect,
    md: 6,
  },

  {
    id: 7,
    componentProps: {
      name: "noFurtherAction",
      label: "No Further Action (Move to Closed Referral)",
      sx: { mb: 4 },
      value:"Permanant"
    },
    component: RHFCheckbox,
    md: 6,
  },
];

export const defaultValues = {
  userCode: "",
  referredBy: "",
  referralDate: new Date(),
  approvedBy: "",
  userGeography: "",
  localAuthority: "",
  requestDateNotified: null,
  branchManagerEmail: "",
  branchAddress: "",
  branchManagerName: "",
  branchManagerTelephone: "",
  areaTeam: "",
  EDTNumber: "",
  behavioural: "",
  otherDetails: "",
  referralStatus: "",
  noFurtherAction: "",
};

export const BFormValidationSchema = Yup.object().shape({
  userCode: Yup.string().trim().required("Field is Required"),
  referredBy: Yup.string().trim().required("Field is Required"),
  referralDate: Yup.date().required("Field is Required"),
  approvedBy: Yup.string().trim().required("Field is Required"),
  userGeography: Yup.string().trim().required("Field is Required"),
  localAuthority: Yup.string().trim().required("Field is Required"),
  requestDateNotified: Yup.string().trim().required("Field is Required"),
  branchManagerEmail: Yup.string().trim().required("Field is Required"),
  branchAddress: Yup.string().trim().required("Field is Required"),
  branchManagerName: Yup.string().trim().required("Field is Required"),
  branchManagerTelephone: Yup.string().trim().required("Field is Required"),
  areaTeam: Yup.string().trim().required("Field is Required"),
  EDTNumber: Yup.string().trim().required("Field is Required"),
  behavioural: Yup.string().trim().required("Field is Required"),
  otherDetails: Yup.string().trim().required("Field is Required"),
  referralStatus: Yup.string().trim().required("Field is Required"),
  noFurtherAction: Yup.string().trim().required("Field is Required"),
});

export { default as PetQuestionnaireBFrom } from "./ApprovedDetails";

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
