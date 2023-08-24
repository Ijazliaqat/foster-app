import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";

const todayDate = dayjs().format("MM/DD/YYYY");

export const defaultValues = {
  visitNature: "Text",
  category: "",
  visitType: "",
  visitDate: new Date(todayDate),
  visitStatus: "",
  fileSeen: true,
  medicationSheet: true,
  localAuthority: true,
  presentInMeeting: "text",
};

export const FormSchema = Yup.object().shape({
  visitNature: Yup.string().required("required"),
  category: Yup.string().required("required"),
  visitType: Yup.string().required("required"),
  visitDate: Yup.date().required("required"),
  visitStatus: Yup.string().required("required"),
  fileSeen: Yup.boolean().required("required"),
  medicationSheet: Yup.boolean().required("required"),
  localAuthority: Yup.boolean().required("required"),
  presentInMeeting: Yup.string().required("required"),
});

export const carerSectionAlphaData = [
  {
    id: 1,
    otherOptions: {
      name: "category",
      label: "Category",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "USD",
        label: "$",
      },
      {
        value: "EUR",
        label: "€",
      },
    ],
  },
  {
    id: 2,
    otherOptions: {
      name: "visitType",
      label: "Home Visit Type",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "USD",
        label: "$",
      },
      {
        value: "EUR",
        label: "€",
      },
    ],
  },
  {
    id: 3,
    otherOptions: {
      name: "visitStatus",
      label: "Home Visit Status",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "USD",
        label: "$",
      },
      {
        value: "EUR",
        label: "€",
      },
    ],
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "visitDate",
      label: "Date of Visit",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    otherOptions: {
      name: "fileSeen",
      label: "Home File Seen",
    },
    gridLength: 6,
    component: RHFCheckbox,
  },
  {
    id: 6,
    otherOptions: {
      name: "medicationSheet",
      label: "Medication Sheet Checked",
    },
    gridLength: 6,
    component: RHFCheckbox,
  },
  {
    id: 7,
    otherOptions: {
      name: "localAuthority",
      label: "Local Authority Feedback Required",
    },
    gridLength: 6,
    component: RHFCheckbox,
  },
  {
    id: 8,
    gridLength: 12,
    otherOptions: {
      name: "visitNature",
      label: "Nature of Visit",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    otherOptions: {
      name: "presentInMeeting",
      label:
        "Name of all those present at the meeting, Details of any new placements since the last visit. Note if children wrer seen alone. If not seen at all, reason why?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 12,
  },
];
export { default as CarerSectionAlpha } from "./CarerSectionA";
