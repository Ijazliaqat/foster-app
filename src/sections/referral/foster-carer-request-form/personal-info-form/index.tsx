import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import { useFormContext, Controller } from "react-hook-form";
import { Box, FormHelperText } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { ETHNICITYDROPDOWN } from "@root/dropdown-data/ethnicity";
import { RELIGIONDROPDOWN } from "@root/dropdown-data/religion";
import { NATIONALITYDROPDOWN } from "@root/dropdown-data/nationality";
import { LANGUAGESDROPDOWNDATA } from "@root/dropdown-data/languages";
import { GENDERDROPDOWNDATA } from "@root/dropdown-data/gender";
import { IMMIGRATIONSTATUS } from "@root/dropdown-data/immigrationStatus";

export const PersonalInfoFormData = [
  {
    id: 1,
    componentProps: {
      name: "carerCode",
      label: "Carer Code",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    uploadPhoto: true,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "nationalInsuranceNumber",
      label: "National Insurance number",
      fullWidth: true,
      size: "small",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "areaOffice",
      label: "Area Office",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "Hayes", label: "Hayes" }],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "typeofCarer",
      label: "Type of Carer",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "Hayes", label: "Hayes" }],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 6,
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
    id: 7,
    gridLength: 6,
    componentProps: {
      name: "middleName",
      label: "Middle Name",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 8,
    gridLength: 6,
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
    id: 9,
    gridLength: 6,
    componentProps: {
      name: "dob",
      label: "Date Of Birth",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 10,
    gridLength: 6,
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
    id: 11,
    gridLength: 6,
    componentProps: {
      name: "gender",
      label: "Gender",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: GENDERDROPDOWNDATA,
    component: RHFSelect,
    md: 6,
  },
  {
    id: 12,
    gridLength: 6,
    componentProps: {
      name: "ethnicity",
      label: "Ethnicity",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: ETHNICITYDROPDOWN,
    component: RHFSelect,
    md: 6,
  },
  {
    id: 13,
    gridLength: 6,
    componentProps: {
      name: "ofstedEthnicity",
      label: "Ofsted Ethnicity",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 14,
    gridLength: 6,
    componentProps: {
      name: "language",
      label: "Language",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: LANGUAGESDROPDOWNDATA,
    component: RHFSelect,
    md: 6,
  },
  {
    id: 15,
    gridLength: 6,
    componentProps: {
      name: "legalStatus",
      label: "Legal Status",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 16,
    gridLength: 6,
    componentProps: {
      name: "nationality",
      label: "Nationality",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: NATIONALITYDROPDOWN,
    component: RHFSelect,
    md: 6,
  },
  {
    id: 17,
    gridLength: 6,
    componentProps: {
      name: "religion",
      label: "Religion",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: RELIGIONDROPDOWN,
    component: RHFSelect,
    md: 6,
  },
  {
    id: 18,
    gridLength: 6,
    componentProps: {
      name: "immigrationStatus",
      label: "Immigration Status",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: IMMIGRATIONSTATUS,
    component: RHFSelect,
    md: 6,
  },
  {
    id: 19,
    gridLength: 6,
    componentProps: {
      name: "partnershipStatus",
      label: "Partnership Status",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Wife", label: "Wife" },
      { value: "husband", label: "husband" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 20,
    gridLength: 6,
    componentProps: {
      name: "sexualOrientation",
      label: "Sexual orientation",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "male", label: "Male" },
      { value: "female", label: "Female" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "otherDetails",
      label: "Other Details",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
  {
    id: 21,
    gridLength: 6,
    componentProps: {
      name: "ageRange",
      label: "Age Range",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "10-15", label: "10-15" },
      { value: "15-20", label: "15-20" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 22,
    gridLength: 6,
    componentProps: {
      name: "permanentResidency",
      label: "Permanent Residency in UK ?",
      sx: { mb: 4 },
    },
    component: RHFCheckbox,
    md: 6,
  },
];

export const PersonalInfoFormValues = {
  carerCode: "",
  uploadImage: "",
  nationalInsuranceNumber: "",
  areaOffice: "",
  typeofCarer: "",
  firstName: "",
  middleName: "",
  lastName: "",
  dob: new Date(),
  age: "",
  gender: "",
  ethnicity: "",
  ofstedEthnicity: "",
  language: "",
  legalStatus: "",
  nationality: "",
  religion: "",
  immigrationStatus: "",
  partnershipStatus: "",
  sexualOrientation: "",
  otherDetails: "",
  ageRange: "",
  permanentResidency: "",
};

export const PersonalInfoFormValidationSchema = Yup.object().shape({
  carerCode: Yup.string().trim().required("Field is Required"),
  uploadImage: Yup.string().trim().required("Field is Required"),
  nationalInsuranceNumber: Yup.string().trim().required("Field is Required"),
  areaOffice: Yup.string().trim().required("Field is Required"),
  typeofCarer: Yup.string().trim().required("Field is Required"),
  firstName: Yup.string().trim().required("Field is Required"),
  middleName: Yup.string().trim().required("Field is Required"),
  lastName: Yup.string().trim().required("Field is Required"),
  dob: Yup.date().required("Field is Required"),
  age: Yup.string().trim().required("Field is Required"),
  gender: Yup.string().trim().required("Field is Required"),
  ethnicity: Yup.string().trim().required("Field is Required"),
  ofstedEthnicity: Yup.string().trim().required("Field is Required"),
  language: Yup.string().trim().required("Field is Required"),
  legalStatus: Yup.string().trim().required("Field is Required"),
  nationality: Yup.string().trim().required("Field is Required"),
  religion: Yup.string().trim().required("Field is Required"),
  immigrationStatus: Yup.string().trim().required("Field is Required"),
  partnershipStatus: Yup.string().trim().required("Field is Required"),
  sexualOrientation: Yup.string().trim().required("Field is Required"),
  otherDetails: Yup.string().trim().required("Field is Required"),
  ageRange: Yup.string().trim().required("Field is Required"),
  permanentResidency: Yup.string().trim().required("Field is Required"),
});

export { default as PesonalInfoForm } from "./PesonalInfoForm";

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
            <Box sx={{ mb: 4 }}>
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
            </Box>
          </>
        );
      }}
    />
  );
}
