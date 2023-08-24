import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
// utils

// ----------------------------------------------------------------------

export const defaultValues = {
  categoryName: "",
  updatePhoto: null,
  categoryDescription: "",
  approvedBy: "",
};

export const FormSchema = Yup.object().shape({
  categoryName: Yup.string().trim().required("Field is required"),
  approvedBy: Yup.string().trim().required("Field is required"),
  categoryDescription: Yup.string().trim().required("Field is Required"),
  updatePhoto: Yup.string().required("Field is Required"),
});
export const formData = [
  {
    gridLength: 6,
    componentProps: {
      name: "categoryName",
      label: "Category Name",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "john", label: "John" },
      { value: "smith", label: "Smith" },
      { value: "amelia", label: "Amelia" },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 6,
    uploadPhoto: true,
  },
  {
    gridLength: 12,
    componentProps: {
      name: "categoryDescription",
      label: "Category Description",
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
  {
    gridLength: 6,
    componentProps: {
      name: "approvedBy",
      label: "Approved by",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "john", label: "John" },
      { value: "smith", label: "Smith" },
      { value: "amelia", label: "Amelia" },
    ],
    component: RHFSelect,
  },
];
export { default as SocialMediaLinksSection } from "./AddNewModal";
