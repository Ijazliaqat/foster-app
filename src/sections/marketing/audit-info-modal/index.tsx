import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  swotPeriod: "",
  swotOn: "Marketing Strategy of Agency",
  researcher: "Draco Malfoy",
  researcherRole: "Draco Malfoy",
  researcherReportDate: new Date(),
  reviewer: "Albus Dumbldore",
  reviewerRole: "Marketing Head",
  reviewDate: new Date(),
};
export const formSchema = Yup.object().shape({
  swotPeriod: Yup.string().required("Field is required"),
  swotOn: Yup.string().required("Field is required"),
  researcher: Yup.string().required("Field is required"),
  researcherRole: Yup.string().required("Field is required"),
  researcherReportDate: Yup.date().required("Field is required"),
  reviewer: Yup.string().required("Field is required"),
  reviewerRole: Yup.string().required("Field is required"),
  reviewDate: Yup.date().required("Field is required"),
});
export const auditInfoData = [
  {
    gridLength: 6,
    title: "SWOT Period",
    otherOptions: {
      name: "swotPeriod",
      size: "small",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    title: "SWOT on",
    otherOptions: {
      name: "swotOn",
      fullWidth: true,
      size: "small",
      type: "text",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Researcher",
    otherOptions: {
      name: "researcher",
      size: "small",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Researcher Role",
    otherOptions: {
      name: "researcherRole",
      fullWidth: true,
      size: "small",
      type: "text",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Research Report Date",
    otherOptions: {
      name: "researcherReportDate",
      size: "small",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    title: "Reviewer",
    otherOptions: {
      name: "reviewer",
      fullWidth: true,
      size: "small",
      type: "text",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Reviewer Role",
    otherOptions: {
      name: "reviewerRole",
      size: "small",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    title: "Reviewer Date",
    otherOptions: {
      name: "reviewDate",
      size: "small",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];
