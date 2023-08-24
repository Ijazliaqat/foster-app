import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");
// const ageOf18Years = dayjs().subtract(18, "year").format("MM/DD/YYYY");
// const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
// const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const defaultValues = {
  selectCarer: "",
  dateOfImmunisations: new Date(todayDate),
  immunisationType: "Text",
  dueDate: new Date(todayDate),
  dateImmunisationLastViewed: new Date(todayDate),
  IsimmunisationUpToDate: false,
  comments: "text",
};

export const FormSchema = Yup.object().shape({
  selectCarer: Yup.string().required("Required"),
  dateOfImmunisations: Yup.date().required("Date is required"),
  immunisationType: Yup.string().required("Required"),
  dueDate: Yup.date().required("Required"),
  dateImmunisationLastViewed: Yup.date().required("Required"),
  comments: Yup.string().required("Required"),
});

export const householdConditionA_Data = [
  {
    id: 1,
    componentProps: {
      name: "selectCarer",
      label: "Select the Carer",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 2,
    componentProps: {
      name: "dateOfImmunisations",
      label: "Date of Immunisations",
      multiline: true,
      fullWidth: true,
      minRows: 3,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 3,
    componentProps: {
      name: "immunisationType",
      label: "Immunisation Type",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 4,
    componentProps: {
      fullWidth: true,
      name: "dueDate",
      label: "Due Date",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 5,
    componentProps: {
      fullWidth: true,
      name: "dateImmunisationLastViewed",
      label: "Date Immunisations last viewed",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 6,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "IsimmunisationUpToDate",
      label: "Immunisations up to date?",
    },
    component: RHFCheckbox,
  },
  {
    id: 7,
    componentProps: {
      name: "comments",
      label: "Comments",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
