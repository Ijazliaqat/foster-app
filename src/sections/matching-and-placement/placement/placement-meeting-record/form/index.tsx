import {
  RHFMultiCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  childName: "",
  carerName: "",
  meetingDate: new Date(),
  meetingAttendees: "",
  meetingAgenda: "",
  meetingActions: "",
  meetingMinutes: "",
  meetingOutcome: "",
};

export const formSchema = Yup.object().shape({
  childName: Yup.string().required("Field is required"),
  carerName: Yup.string().required("Field is required"),
  meetingDate: Yup.date().required("Field is required"),
  meetingAttendees: Yup.string().required("Field is required"),
  meetingAgenda: Yup.string().required("Field is required"),
  meetingActions: Yup.string().required("Field is required"),
  meetingMinutes: Yup.string().required("Field is required"),
  meetingOutcome: Yup.string().required("Field is required"),
});

export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Child Name",
      name: "childName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Carer Name",
      name: "carerName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Meeting Date",
      name: "meetingDate",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    title: "Meeting Attendees (Role)",
    otherOptions: {
      name: "meetingAttendees",
      options: ["Child", "Carer", "LA SSW", "SSW"],
    },
    sx: { "& .MuiFormGroup-root": { flexDirection: "row !important" } },
    component: RHFMultiCheckbox,
  },

  {
    gridLength: 12,
    otherOptions: {
      label: "Meeting Agenda",
      name: "meetingAgenda",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Meeting Actions",
      name: "meetingActions",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Meeting Minutes",
      name: "meetingMinutes",
      fullWidth: true,
    },
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Meeting Outcome",
      name: "meetingOutcome",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
