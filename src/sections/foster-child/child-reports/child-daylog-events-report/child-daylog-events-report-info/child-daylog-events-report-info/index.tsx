import { Typography } from "@mui/material";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import dayjs from "dayjs";
import * as Yup from "yup";

const todayDate = dayjs().format("MM/DD/YYYY");

export const childDaylogEventsReportInfoFormValues = {
  dateOfOccurence: todayDate,
  correspondenceTo: "",
  correspondenceFrom: "",
  childSeen: false,
  entryType: "",
  subject: "",
  dayLogEntry: "",
  actionNeeded: "",
  notificationDate: todayDate,
  addToCarerRecord: "",
  updateSiblingRecord: false,
  selectUserToBeNotified: "",
  EmailAddressess: "",
  status: "",
};

export const defaultValueChildDaylogEventsReportInfoForm = (
  data: any = childDaylogEventsReportInfoFormValues
) => {
  return {
    dateOfOccurence: new Date(data?.dateOfOccurence),
    correspondenceTo: data?.correspondenceTo,
    correspondenceFrom: data?.correspondenceFrom,
    childSeen: data?.childSeen,
    entryType: data?.entryType,
    subject: data?.subject,
    dayLogEntry: data?.dayLogEntry,
    actionNeeded: data?.actionNeeded,
    notificationDate: new Date(data?.notificationDate),
    addToCarerRecord: data?.addToCarerRecord,
    updateSiblingRecord: data?.updateSiblingRecord,
    selectUserToBeNotified: data?.selectUserToBeNotified,
    EmailAddressess: data?.EmailAddressess,
    status: data?.status,
  };
};

export const childDaylogEventsReportInfoFormSchema: any = Yup.object().shape({
  dateOfOccurence: Yup.date()
    .typeError(" Date  of occurence is required")
    .required(" Date of occurence is required"),
  correspondenceTo: Yup.string()
    .trim()
    .required("Correspondence to whom is required")
    .min(1, "Mininum 1 characters")
    .max(300, "Maximum 50 characters"),
  correspondenceFrom: Yup.string()
    .trim()
    .required("Correspondence from whom is required")
    .min(1, "Mininum 1 characters")
    .max(300, "Maximum 50 characters"),
  childSeen: Yup.string().required("Child seen is required"),
  entryType: Yup.string().required("Entry type is required"),
  subject: Yup.string()
    .trim()
    .required("subject is required")
    .min(1, "Mininum 1 characters")
    .max(300, "Maximum 50 characters"),
  dayLogEntry: Yup.string()
    .trim()
    .required("Day log entry  is required")
    .min(1, "Mininum 1 characters")
    .max(300, "Maximum 50 characters"),
  actionNeeded: Yup.string()
    .trim()
    .required("Action needed is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  notificationDate: Yup.date()
    .typeError("Notification date is required")
    .required("Notification date is required"),
  addToCarerRecord: Yup.string().required("Add to carer record is required"),
  updateSiblingRecord: Yup.boolean().required(
    "update Sibling record is required"
  ),
  selectUserToBeNotified: Yup.string().required(
    "select user to be notified informed is required"
  ),
});

export const childDaylogEventsReportInfoFormDataFunction = (
  isFieldDisable = false
) => [
  {
    id: 1,
    componentProps: {
      name: "dateOfOccurence",
      label: "Date of Occurence",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 2,
    componentProps: {
      fullWidth: true,
      name: "correspondenceTo",
      label: "If correspondence, to whom",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 3,
    componentProps: {
      fullWidth: true,
      name: "correspondenceFrom",
      label: "If correspondence, from whom",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "childSeen",
      label: "child Seen ?",
    },
    component: RHFCheckbox,
  },
  {
    id: 5,
    componentProps: {
      fullWidth: true,
      name: "entryType",
      label: "Entry Type",
      select: true,
      options: [
        {
          id: 1,
          label: "Option 1",
          text: "Option 1",
        },
        {
          id: 2,
          label: "Option 2",
          text: "Option 2",
        },
      ],
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFSelect,
  },
  {
    id: 6,
    componentProps: {
      fullWidth: true,
      name: "subject",
      label: "Subject",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 7,
    componentProps: {
      fullWidth: true,
      name: "dayLogEntry",
      label: "Day log/journal Entry",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 8,
    componentProps: {
      fullWidth: true,
      name: "actionNeeded",
      label: "Action Needed",
      multiline: true,
      minRows: 3,
      disabled: isFieldDisable,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 9,
    componentProps: {
      name: "notificationDate",
      label: "Notification Date",
      fullWidth: true,
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 10,
    componentProps: {
      fullWidth: true,
      name: "addToCarerRecord",
      label: "Add to Carer Record",
      select: true,
      options: [
        {
          id: 1,
          label: "Option 1",
          text: "Option 1",
        },
        {
          id: 2,
          label: "Option 2",
          text: "Option 2",
        },
      ],
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFSelect,
  },
  {
    id: 11,
    gridLength: 6,
    componentProps: {
      name: "updateSiblingRecord",
      label: "Add / Edit to Siblings Record",
    },
    component: RHFCheckbox,
  },
  {
    id: 12,
    componentProps: {
      // color: (theme: any) => theme.palette.primary.main,
      variant: "h6",
    },
    heading: "Notification",
    gridLength: 12,
    component: Typography,
  },
  {
    id: 13,
    componentProps: {
      fullWidth: true,
      name: "selectUserToBeNotified",
      label: "Select User To Be Notified",
      select: true,
      options: [
        {
          id: 1,
          label: "Option 1",
          text: "Option 1",
        },
        {
          id: 2,
          label: "Option 2",
          text: "Option 2",
        },
      ],
      disabled: isFieldDisable,
    },
    gridLength: 6,
    component: RHFSelect,
  },
];
