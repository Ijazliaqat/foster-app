import {  RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const VocationalCourseInfoFormFields = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "courseType",
      label: "Course Type",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "duration",
      label: "Duration",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "startDate",
      label: "Start Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "endDate",
      label: "End Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "expectedQualification",
      label: "Expected Qualification",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "qualification",
      label: "Qualification",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const defaultValues = {
  courseType: "Nil",
  duration: null,
  startDate: new Date(),
  endDate: new Date(),
  expectedQualification: "Nil",
  qualification: "Nil",
};
export const formatters: any = {};

export const formSchema = Yup.object().shape({
  courseType: Yup.string().required("Required"),
  duration: Yup.string().required("Required"),
  startDate: Yup.date().required("Required"),
  endDate: Yup.date().required("Required"),
  expectedQualification: Yup.string().required("Required"),
  qualification: Yup.string().required("Required"),
});
