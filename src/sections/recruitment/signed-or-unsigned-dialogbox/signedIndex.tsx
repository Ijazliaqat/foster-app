import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";
import * as Yup from "yup";
const todayDate = dayjs().format("MM/DD/YYYY");
export const defaultValues = {
  carerName: "",
  signatureDate: new Date(todayDate),
};

export const FormSchema = Yup.object().shape({
  carerName: Yup.string().required("Required"), //1
  signatureDate: Yup.date().required("Required"), //3
});

export const SIGNEDDIALOGBOXDATA = [
  {
    id: 1,
    gridLength: 12,

    otherOptions: {
      label: "Carer Name",
      name: "carerName",
      fullWidth: true,
    },
    component: RHFTextField,
  },

  {
    id: 2,
    gridLength: 12,
    otherOptions: {
      label: "Signature Date",
      name: "signatureDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];
