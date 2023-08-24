import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";
import { Typography } from "@mui/material";

const todayDate = dayjs().format("MM/DD/YYYY");
// const maxAgeCheck = dayjs().subtract(18, "year");
// const ageOf18Years = maxAgeCheck.format("MM/DD/YYYY");

export const defaultValues = {
  bedRooms: "",
  sleeping: "",
  playArea: "",
  gardenSpace: "",
  dateOfHealth: new Date(todayDate),
  description: "",
  detailsOfHealthAndSafety: "",
};

export const FormSchema = Yup.object().shape({
  bedRooms: Yup.string().required("Required"), //1
  sleeping: Yup.string().required("Required"), //2
  playArea: Yup.string().required("Required"), //3
  gardenSpace: Yup.string().required("Required"), //4
  dateOfHealth: Yup.date().required("Required"), //5
  description: Yup.string().required("Required"), //6
  detailsOfHealthAndSafety: Yup.string().required("Required"), //7
});

export const HOUSEHOLDACCOMODATIONFORMDATA = [
  {
    id: 1,
    componentProps: {
      name: "bedRooms",
      label: "Bedroom(s)",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 2,
    componentProps: {
      name: "sleeping",
      label: "Sleeping",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 3,
    componentProps: {
      name: "playArea",
      label: "Play Area",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 4,
    componentProps: {
      name: "gardenSpace",
      label: "Garden Space",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 4.5,
    gridLength: 6.1,
    component: Typography,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      variant: "body2",
    },
    heading:
      "Date of health and safety assessment using a health and safety checklist (this may be included in Section C)",
  },
  {
    id: 5,
    componentProps: {
      name: "dateOfHealth",
      label: "Date",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 5.5,
    component: Typography,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      variant: "body2",
    },
    heading:
      "Briefly describe the neighborhood, community and access to key services.",
  },
  {
    id: 6,
    componentProps: {
      name: "description",
      label: "Details here",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 6.5,
    component: Typography,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      variant: "body2",
    },
    heading: "Provide Details of any outstanding health and safety issues.",
  },
  {
    id: 7,
    componentProps: {
      name: "detailsOfHealthAndSafety",
      label: "Details here",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
export { default as HouseholdAccommodationForm } from "./HouseholdAccommodationForm";
