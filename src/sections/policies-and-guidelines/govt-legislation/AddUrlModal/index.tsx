import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const initialValues = {
  title: "",
  url: "",
};
export const formSchema = Yup.object().shape({
  title: Yup.string().required("Field is required"),
  url: Yup.string().required("Field is required"),
});

export const addUrl = [
  {
    gridLength: 12,
    title: "Add Title",
    otherOptions: {
      name: "title",
      fullWidth: true,
      size: "small",
      type: "text",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    title: "URL",
    otherOptions: {
      name: "url",
      fullWidth: true,
      size: "small",
      type: "text",
    },
    component: RHFTextField,
  },
];
