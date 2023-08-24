import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const kidieeSavingData = [
    {
      id: 1,
      componentProps: {
        name: "date",
        label: "Date",
        sx: { mb: 4 },
        fullWidth: true,
      },
      component: RHFDatePicker,
      md: 6,
    },
    {
      id: 2,
      componentProps: {
        name: "amount",
        label: "Amount",
        sx: { mb: 4 },
        fullWidth: true,
      },
      component: RHFTextField,
      md: 6,
    },
    {
      id: 3,
      componentProps: {
        name: "category",
        label: "Category",
        sx: { mb: 4 },
        multiline: true,
        rows: 3,
      },
      component: RHFSelect,
      md: 6,
    },
    {
      id: 4,
      componentProps: {
        name: "comments",
        label: "Purpose / Comments",
        sx: { mb: 4 },
        multiline: true,
        rows: 3,
      },
      component: RHFTextField,
      md: 12,
    },
    {
      id: 5,
      componentProps: {
        name: "total",
        label: "Total",
        sx: { mb: 4 },
        fullWidth: true,
      },
      component: RHFTextField,
      md: 6,
    },
    {
      id: 6,
      componentProps: {
        name: "subTotal",
        label: "Sub Total",
        sx: { mb: 4 },
        fullWidth: true,
      },
      component: RHFTextField,
      md: 6,
    },
  ];

  export const kidieeSavingtValidation = Yup.object().shape({
    date: Yup.date().required("Required"),
    amount: Yup.string().required("Required"),
    category: Yup.string().required("Required"),
    comments: Yup.string().required("Required"),
    total: Yup.string().required("Required"),
    subTotal: Yup.string().required("Required"),
  });
  
  export const defaultValueskidieeSaving = {
    date: new Date(),
    amount: "",
    category: "",
    comments: "",
    total: "",
    subTotal: "",
  };