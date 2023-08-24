import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SignaturePad from "@root/components/SignaturePad";
import { Controller, useFormContext } from "react-hook-form";
import * as Yup from "yup";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { FormHelperText, Typography } from "@mui/material"; 
import dayjs from "dayjs";



const todayDate = dayjs().format("MM/DD/YYYY");
export const AForm = [
  {
    id: 1,
    heading: "Safeguarding Policy Document",
    componentProps: {
      variant: "h6",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mb: 2 },
    },
    component: Typography,
  },
  {
    id: 2,
    componentProps: {
      name: "dateUploaded",
      label: "Date Uploaded",
      fullWidth: true,
      sx: { mb: 4 },
      // value: SAFE_CARING_POLICY_TABLE_DATA[0].date_uploaded,
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    gridLength: 6,
    uploadPhoto: true,
    md: 6,
  },
  {
    id: 4,
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
    id: 5,
    componentProps: {
      name: "version",
      label: "Version",
      sx: { mb: 4 },
    
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "creatorRole",
      label: "Creator role",
      sx: { mb: 4 },
  
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 7,
    componentProps: {
      name: "createdBy",
      label: "Created by",
      sx: { mb: 4 },
     
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 8,
    componentProps: {
      name: "creationTime",
      label: "Creation time",
      sx: { mb: 4 },
     
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 9,
    componentProps: {
      name: "approvedBy",
      label: "Approved by",
      sx: { mb: 4 },
    
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 10,
    componentProps: {
      name: "approverRole",
      label: "Approver role",
      sx: { mb: 4 },
   
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 11,
    componentProps: {
      name: "lastModifiedTime",
      label: "Last modified time",
      sx: { mb: 4 },
   
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 12,
    componentProps: {
      name: "lastModifiedBy",
      label: "Last modified by",
      sx: { mb: 4 },
      
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 13,
    componentProps: {
      name: "signDateAuthor",
      label: "Date of eSignatue of Author",
      fullWidth: true,
      sx: { mt: 2, mb: 10 },
   
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 14,
    componentProps: {
      name: "signatureAuther",
      label: "eSignature of Author",
    },
    component: SignaturePad,
    md: 6,
  },
  {
    id: 15,
    componentProps: {
      name: "signDateApprover",
      label: "Date of eSignatue of Approver",
      fullWidth: true,
      sx: { mt: 2, mb: 10 },
    
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 16,
    componentProps: {
      name: "signatureApprover",
      label: "eSignature of Approver",
      color: (theme: any) => theme.palette.primary.main,
      sx: { mt: 2, mb: 10 },
    },
    component: SignaturePad,
    md: 6,
  },
];

export const AFormDefaultValues = {
  dateUploaded: null,
  uploadImage: "",
  description: "",
  version: "",
  creatorRole: "",
  createdBy: "",
  creationTime: "",
  approvedBy: "",
  approverRole: "",
  lastModifiedTime: "",
  lastModifiedBy: "",
  signDateAuthor: null,
  signatureAuther: "",
  signDateApprover: null,
  signatureApprover: "",
};

export const AFormValidationSchema = Yup.object().shape({
  dateUploaded: Yup.string().trim().required("Uploade Date is Required"),
  uploadImage: Yup.string().trim().required("Image Attachment is Required"),
  description: Yup.string().trim().required("Discription is Required"),
  version: Yup.string().trim().required("Version is Required"),
  creatorRole: Yup.string().trim().required("Creator Role is Required"),
  createdBy: Yup.string().trim().required("Creator Name is Required"),
  creationTime: Yup.string().trim().required("Creation Time is Required"),
  approvedBy: Yup.string().trim().required("Approver Name is Required"),
  approverRole: Yup.string().trim().required("Approver Role is Required"),
  lastModifiedTime: Yup.string()
    .trim()
    .required("Last Modified Time is Required"),
  lastModifiedBy: Yup.string()
    .trim()
    .required("Last Modifier Name is Required"),
  signDateAuthor: Yup.string()
    .trim()
    .required("Author's Signature Date is Required"),
  signatureAuther: Yup.string()
    .trim()
    .required("Author's Signature is Required"),
  signDateApprover: Yup.string()
    .trim()
    .required("Approver's Signature Date is Required"),
  signatureApprover: Yup.string()
    .trim()
    .required("Approver's Signature is Required"),
  // version: Yup.string().trim(),
  // housingAndRoutines: Yup.string().trim(),
});

// export { default as PetQuestionnaireAFrom } from "./addCaringPolicyForm";

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
