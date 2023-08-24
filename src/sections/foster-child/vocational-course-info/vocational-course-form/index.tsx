import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const VOCATIONALCOURSEINFODATA = [
  {
    id: 1,
    componentProps: {
      name: "courseType",
      label: "Course Type",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 2,
    componentProps: {
      name: "duration",
      label: "Duration",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 3,
    componentProps: {
      name: "startDate",
      label: "Start Date",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 4,
    componentProps: {
      name: "endDate",
      label: "End Date",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 5,
    componentProps: {
      name: "expectedQualification",
      label: "Expected Qualification",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 6,
    componentProps: {
      name: "qualification",
      label: "Qualification",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFTextField,
  },
];
export const defaultValues = {
  courseType: "",
  duration: "",
  startDate: new Date(),
  endDate: new Date(),
  expectedQualification: "",
  qualification: "",
};
export const FormSchema = Yup.object().shape({
  courseType: Yup.string().required("Please Enter a valid Course Type"),
  duration: Yup.string().required("Please Enter a valid Duration"),
  expectedQualification: Yup.string().required(
    "Please Enter a valid Information"
  ),
  qualification: Yup.string().required("Please Enter a valid Qualification"),
});
