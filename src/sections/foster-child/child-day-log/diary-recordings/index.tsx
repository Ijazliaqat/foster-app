import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const diaryRecordingData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "date",
      label: "Date of Occurence",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },

  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "entryType",
      label: "Entry Type",
      fullWidth: true,
      select: true,
    },
    options: [
      { id: 1, value: "Select", label: "Select" },
      { id: 2, value: "Select", label: "Select" },
    ],
    component: RHFSelect,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "subject",
      label: "Subject",
      fullWidth: true,
      select: true,
    },
    options: [
      { id: 1, value: "Select", label: "Select" },
      { id: 2, value: "Select", label: "Select" },
    ],
    component: RHFSelect,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "notes",
      label: "notes",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "notificationDate",
      label: "Notification Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "addEditSiblings",
      label: "Add / Edit to Siblings Record",
    },
    component: RHFCheckbox,
  },
];

export const formatters: any = {};

for (const formControl of diaryRecordingData) {
  if (formControl.format)
    formatters[formControl.otherOptions.name] = formControl.format;
}

export const defaultValues = {
  date: new Date(),
  entryType: "",
  subject: "",
  notes: "",
  notificationDate: new Date(),
  addEditSiblings: null,
};
export const formSchema = Yup.object().shape({
  date: Yup.date().required("Required"),
  entryType: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
  notes: Yup.string().required("Required"),
  notificationDate: Yup.date().required("Required"),
  addEditSiblings: Yup.boolean().required("Required"),
});
