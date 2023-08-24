import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const DayLogFormFields = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "dateOfOccurence",
      label: "Date of Occurence",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 12,
    otherOptions: {
      name: "correspondenceFrom",
      label: "If correspondence, to whom",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "correspondenceTo",
      label: "If correspondence, from whom",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "childSeen",
      label: "Child seen ?",
      fullWidth: true,
    },
    component: RHFCheckbox,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "entryType",
      label: "Entry Type",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "dayLogEntry",
      label: "Day log/journal Entry",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      name: "subject",
      label: "Subject",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 12,
    otherOptions: {
      name: "actionNeeded",
      label: "Action Needed",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      name: "notificationDate",
      label: "Notification Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      name: "addToCarerRecord",
      label: "Add to Carer Record",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 11,
    gridLength: 12,
    otherOptions: {
      name: "updateSiblingRecord",
      label: "Add / Edit to Siblings Record",
      fullWidth: true,
    },
    component: RHFCheckbox,
  },
];
export const defaultValues = {
  dateOfOccurence: null,
  correspondenceFrom: 'Nil',
  correspondenceTo: 'Nil',
  childSeen: false,
  entryType: null,
  subject: 'Nil',
  dayLogEntry: 'Nil',
  actionNeeded: 'Nil',
  notificationDate: new Date(),
  addToCarerRecord: null,
  updateSiblingRecord: false,
  additionalEmailAddresses: null,
  userToBeNotified: null,
};
export const formatters: any = {};

export const formSchema = Yup.object().shape({
  dateOfOccurence: Yup.date().required("Required"),
  correspondenceTo: Yup.string().required("Required"),
  correspondenceFrom: Yup.string().required("Required"),
  entryType: Yup.string().required("Required"),
  subject: Yup.string().required("Required"),
  dayLogEntry: Yup.string().required("Required"),
  actionNeeded: Yup.string().required("Required"),
  notificationDate: Yup.date().required("Required"),
  addToCarerRecord: Yup.string().required("Required"),
});
