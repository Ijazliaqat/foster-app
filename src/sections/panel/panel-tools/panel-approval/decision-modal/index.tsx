import * as Yup from "yup";
import { RHFSelect } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

// ======================================================================

export const defaultValues = {
  admDecision: "",
  decisionDate: new Date(),
  status: "",
};

// =======================================================================
export const FormSchema = Yup.object().shape({
  admDecision: Yup.string().required("Field is required"),
  decisionDate: Yup.date().required("Field is required"),
  status: Yup.string().required("Field is required"),
});

// =========================================================================
export const formData = [
  {
    gridLength: 12,
    otherOptions: {
      name: "admDecision",
      label: "ADM Decision",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "option 1", label: "option 1" },
      {
        value: "option 2",
        label: "option 2",
      },
    ],
    component: RHFSelect,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "ADM Decision Date",
      name: "decisionDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "status",
      label: "Status",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "option 1", label: "option 1" },
      {
        value: "option 2",
        label: "option 2",
      },
    ],
    component: RHFSelect,
  },
];
