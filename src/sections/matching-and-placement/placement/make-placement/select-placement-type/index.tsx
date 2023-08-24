import { RHFSelect } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const SelectPlacementData = [
  {
    id: 1,
    componentProps: {
      name: "placementType",
      label: "Placement Type",
      fullWidth: true,
      select: true,
    //   sx: { mb: 1 },
    },
    options: [
        { value: "fullTime", label: "Full Time" },
        { value: "partTime", label: "Part Time" },
        { value: "contract", label: "Contract" },
      ],
      component: RHFSelect,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "paymentType",
      label: "Payment Type",
      fullWidth: true,
      select: true,
      size: "small",
    //   sx: { mb: 1 },
    },
    options: [
        { value: "creditCard", label: "Credit Card" },
        { value: "debitCard", label: "Debit Card" },
        { value: "payPal", label: "PayPal" },
        { value: "bankTransfer", label: "Bank Transfer" },
      ],
      component: RHFSelect,
    md: 6,
  },

  {
    id: 3,
    gridLength: 6,
    componentProps: {
      name: "startDate",
      label: "Start Date",
      fullWidth: true,
    //   sx: { mb: 1.5 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "endDate",
      label: "End Date",
      fullWidth: true,
    //   sx: { mb: 1.5 },
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 5,
    gridLength: 6,
    componentProps: {
      name: "duration",
      label: "Duration",
      fullWidth: true,
      sx: { mb: 1.5 },
    },
    component: RHFDatePicker,
    md: 6,
  },
];


export const SelectPlacementDefaultValues = {
  placementType: "",
  paymentType: "",
  startDate: new Date(),
  endDate: new Date(),
  duration: new Date(),
};

export const SelectPlacementValidationSchema = Yup.object().shape({
  placementType: Yup.string().trim().required("Field is Required"),
  paymentType: Yup.string().trim().required("Field is Required"),
  startDate: Yup.date().required("Field is Required"),
  endDate: Yup.date().required("Field is Required"),
  duration: Yup.date().required("Field is Required"),
});

export { default as SelectPlacementType } from "./SelectPlacementType";
