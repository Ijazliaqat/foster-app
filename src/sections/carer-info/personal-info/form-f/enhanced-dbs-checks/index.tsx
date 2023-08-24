import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";
import { Typography, useTheme } from "@mui/material";

const todayDate = dayjs().format("MM/DD/YYYY");
// const maxAgeCheck = dayjs().subtract(18, "year");
// const ageOf18Years = maxAgeCheck.format("MM/DD/YYYY");
export const defaultValues = {
  name: "",
  dateCheckCompleted: new Date(todayDate),
  nameOfAdultHouseholdMember: "",
  dateCheckCompleted2: new Date(todayDate),
  giveDetailsOfEnhancedDbsCheck: "",
};

export const FormSchema = Yup.object().shape({
  name: Yup.string().required("Required"), //1
  dateCheckCompleted: Yup.date().required("Required"), //2
  nameOfAdultHouseholdMember: Yup.string().required("Required"), //3
  dateCheckCompleted2: Yup.date().required("Required"), //4
  giveDetailsOfEnhancedDbsCheck: Yup.string().required("Required"), //5
});

export const ENHANCEDDBSCHECKSFORMDATA = [
  {
    id: 1,
    componentProps: {
      name: "name",
      label: "Name",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 2,
    componentProps: {
      name: "dateCheckCompleted",
      label: "Date check completed",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 3,
    componentProps: {
      name: "nameOfAdultHouseholdMember",
      label: "Name of adult household member",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 4,
    componentProps: {
      name: "dateCheckCompleted2",
      label: "Date check completed",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 4.5,
    heading:
      "Give Details of any contra-indications arising from Enhanced DBS checks and how these have been considered/addressed. Alternatively, note briefly and cross-reference to the relevant section in the assessment report.",
    component: Typography,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
    },
  },
  {
    id: 5,
    componentProps: {
      name: "giveDetailsOfEnhancedDbsCheck",
      label: "Details here",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
export { default as EnhancedDbsChecksForm } from "./EnhancedDbsChecksForm";
