import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";
import { Typography } from "@mui/material";

const todayDate = dayjs().format("MM/DD/YYYY");
// const maxAgeCheck = dayjs().subtract(18, "year");
// const ageOf18Years = maxAgeCheck.format("MM/DD/YYYY");

export const defaultValues = {
  nameOfGenaralPractitioner: "",
  nameOfGpPractice: "",
  medicalAdvisorComments: "",
  dateOfMedicalAdvisor: new Date(todayDate),
  nameOfForteringServiceMedicalAdvisor: "",
  details: "",
};

export const FormSchema = Yup.object().shape({
  nameOfGenaralPractitioner: Yup.string().required("Required"), //1
  dateOfMedicalAdvisor: Yup.date().required("Required"), //2
  nameOfGpPractice: Yup.string().required("Required"), //3
  nameOfForteringServiceMedicalAdvisor: Yup.string().required("Required"), //4
  medicalAdvisorComments: Yup.string().required("Required"), //5
  details: Yup.string().required("Required"), //6
});

export const HEALTHFORMDATA = [
  {
    id: 1,
    componentProps: {
      name: "nameOfGenaralPractitioner",
      label: "Name of General Practitioner",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 2,
    componentProps: {
      name: "dateOfMedicalAdvisor",
      label: "Date(s) of medical Advisor",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 3,
    componentProps: {
      name: "nameOfGpPractice",
      label: "Name of GP Practice",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 4,
    componentProps: {
      name: "nameOfForteringServiceMedicalAdvisor",
      label: "Name of fostering service medical advisor",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 5,
    componentProps: {
      name: "medicalAdvisorComments",
      label: "Medical Advisor Comments",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 5.5,
    heading:
      "Give details of any contra-indications arising from Enhanced DBS checks and how these have been considered/addressed. Alternatively, note briefly and cross-reference to the relevant section in the assessment report.",
    component: Typography,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      variant: "body2",
    },
  },
  {
    id: 6,
    componentProps: {
      name: "medicalAdvisorComments",
      label: "Details here",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
export { default as HealthForm } from "./HealthForm";
