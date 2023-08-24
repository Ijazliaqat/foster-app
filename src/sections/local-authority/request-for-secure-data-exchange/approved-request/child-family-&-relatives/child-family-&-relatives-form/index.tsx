import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { COUNTRIESDROPDOWN } from "@root/dropdown-data/countries";

export const ChildFamilyRelativesData = [
  {
    componentProps: {
      name: "name",
      label: "Name",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "dob",
      label: "Date of Birth",
      fullWidth: true,
      sx: { mb: 4 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    componentProps: {
      name: "relationship",
      label: "Relationship",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Parent child", label: "Parent child" },
      { value: "Single child", label: "Single child" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "parentalResponsibility",
      label: "Parental Responsibility",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "fosterCarer", label: "Foster Carer" }],
    component: RHFSelect,
    md: 6,
  },
  {
    componentProps: {
      name: "nationality",
      label: "Nationality",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [
      { value: "Parent child", label: "Parent child" },
      { value: "Single child", label: "Single child" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "ethnicity",
      label: "Ethnicity",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "fosterCarer", label: "Foster Carer" }],
    component: RHFSelect,
    md: 6,
  },
  {
    componentProps: {
      name: "Fax",
      label: "Fax",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "email",
      label: "Email Address",
      type: "email",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },

  {
    componentProps: {
      name: "street",
      label: "Street",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "city",
      label: "City",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "London", label: "London" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "county",
      label: "County",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: [{ value: "UK", label: "UK" }],
    component: RHFSelect,
    md: 6,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "country",
      label: "Country",
      fullWidth: true,
      select: true,
      sx: { mb: 4 },
    },
    options: COUNTRIESDROPDOWN,
    component: RHFSelect,
    md: 6,
  },
  {
    componentProps: {
      name: "postCode",
      label: "Post Code",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    componentProps: {
      name: "phone",
      label: "Phone",
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 6,
    componentProps: {
      name: "address",
      label: "Address",
      multiline: true,
      minRows: 3,
      sx: { mb: 4 },
    },
    component: RHFTextField,
    md: 12,
  },
];

export const ChildFamilyRelativesDataValues = {};

export const ChildFamilyRelativesValidationSchema = Yup.object().shape({
  // yourrequest: Yup.string().trim().required("Field is Required"),
});
