import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";

export const LaSocialMediaDefaultValues = {
    socialMediaAccount: "",
    addAccountLink: "",
};

export const LaSocialMediaValidationSchema = Yup.object().shape({
    socialMediaAccount: Yup.string().required("Field is Required"),
    addAccountLink: Yup.string().required("Field is Required"),
});

export const LaSocialMediaFormData = [
    {
      gridLength: 12,
      componentProps: {
          label: "Select Social Media Account",
          name: "socialMediaAccount",
          fullWidth: true,
          select: true,
          sx: { mb: 3 },
      },
      options: [{ value: "Twitter", label: "Twitter", link: "" }],
      component: RHFSelect,
      },
    {
        gridLength: 12,
        componentProps: {
            label: "Add Account Link",
            name: "addAccountLink",
            fullWidth: true,
            sx: { mb: 4 },
        },
        component: RHFTextField,
    },
];
