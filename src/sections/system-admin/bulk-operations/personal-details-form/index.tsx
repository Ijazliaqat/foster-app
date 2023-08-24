import * as Yup from "yup";
import { RHFSelect, RHFTextField, RHFRadioGroup } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const initialValues = {
  status: "",
  selectCarer: "",
  dateOfOccurrence: null,
  toWhome: "",
  fromWhome: "",
  entryType: "",
  subject: "",
};

export const formSchema = Yup.object().shape({
  status: Yup.string().required("Field is required"),
  selectCarer: Yup.string().required("Field is required"),
  dateOfOccurrence: Yup.string().required("Field is required"),
  toWhome: Yup.string().required("Field is required"),
  fromWhome: Yup.string().required("Field is required"),
  entryType: Yup.string().required("Field is required"),
  subject: Yup.string().required("Field is required"),
});

export const formFields = [
  {
    gridLength: 12,
    gridSX: { display: "flex", alignItems: "center", flexWrap: "wrap", gap: 1 },
    label: "",
    fontWeight: 500,
    otherOptions: {
      name: "fieldOfStudy",
      options: ["Carer", "Child", "Ofsted Inspector", "Teacher", "Supervision"],
      fullWidth: true,
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Status",
      name: "status",
      select: true,
      options: [{ value: "Selected Value", label: "Selected Value" }],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Select the Carer",
      name: "selectCarer",
      select: true,
      options: [{ value: "Selected Value", label: "Selected Value" }],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of Occurrence",
      name: "dateOfOccurrence",
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "If Corrrespondence, to whom",
      name: "toWhome",
      multiLine: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "If Corrrespondence, from whom",
      name: "fromWhome",
      multiLine: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Entry Type",
      name: "entryType",
      select: true,
      options: [{ value: "Selected Value", label: "Selected Value" }],
    },
    component: RHFSelect,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Subject",
      name: "subject",
      multiLine: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
];
