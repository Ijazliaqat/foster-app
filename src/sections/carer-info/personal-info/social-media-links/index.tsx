import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const defaultValues = {
  accountType: "",
  accountLink: "",
};

export const FormSchema = Yup.object().shape({
  accountType: Yup.string().trim().required("Field is required"),
  accountLink: Yup.string()
    .matches(
      /((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
      "Enter correct url! (https://www.example.com)"
    )
    .required("Field is required"),
});
export const formData = [
  {
    gridLength: 12,
    otherOptions: {
      name: "accountType",
      label: "Select Social Media Account",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "instagram", label: "Instagram" },
      { value: "facebook", label: "Facebook" },
      { value: "twitter", label: "Twitter" },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "accountLink",
      label: "Add Account Link",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export { default as SocialMediaLinksSection } from "./SocialMediaLinks";
