import * as Yup from "yup";
import { RHFTextField } from "@root/components/hook-form";

// =====================================================
export const defaultValues = {
  agendaSubject: "",
  notes: "",
  anyOtherBusiness: "",
};

// ======================================================
export const FormSchema = Yup.object().shape({
  agendaSubject: Yup.string().required("Field is required"),
  notes: Yup.string().required("Field is required"),
  anyOtherBusiness: Yup.string().required("Field is required"),
});

// =========================================================
export const panelAgendaData = [
  {
    gridLength: 6,
    otherOptions: { name: "agendaSubject", fullWidth: true, label: "Agenda Subject" },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "notes",
      label: "Notes",
      multiline: true,
      minRows: 2,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "anyOtherBusiness",
      label: "Any Other Business",
      multiline: true,
      minRows: 2,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
];
