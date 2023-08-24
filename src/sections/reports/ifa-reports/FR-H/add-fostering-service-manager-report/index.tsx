import SignaturePad from "@root/components/SignaturePad";
import {
  RHFCheckbox, 
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  nameOfFosterCarer:"",
  dateOfReviewMeeting: null,
  recommendation: "",
  reason: "",
  comments: "",
  nameOfFosteringServiceManager: "",
  signature: "",
  date: null,
  checkBox: "",
};

export const formSchema = Yup.object().shape({
  nameOfFosterCarer: Yup.string().required("Field is required."),
  dateOfReviewMeeting: Yup.string().required("Field is required."),
  recommendation: Yup.string().required("Field is required."),
  reason: Yup.string().required("Field is required."),
  comments: Yup.string().required("Field is required."),
  nameOfFosteringServiceManager: Yup.string().required("Field is required."),
  signature: Yup.string().required("Field is required."),
  date: Yup.string().required("Field is required."),
  checkBox: Yup.string().required("Field is required."),
});

export const FRD1FormData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Name of foster carer",
      name: "nameOfFosterCarer",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of review meeting",
      name: "dateOfReviewMeeting",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Recommendation",
      name: "recommendation",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Reason",
      name: "reason",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Comments",
      name: "comments",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Name of fostering service manager",
      name: "nameOfFosteringServiceManager",
      fullWidth: true,
      sx:{mt:2}
    },
    component: RHFTextField,
  },

  {
    gridLength: 6,
    otherOptions: {
      label: "Signed By fostering manager",
      name: "signature",
    },
    component: SignaturePad,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date",
      name: "date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "checkBox",
      label:
        "This review (consisting of Form FR Sections A-H) is ready to be considered by the fostering panel or the decision maker",
      sx: { mb: 4 },
      value: "checkBox",
    },
    component: RHFCheckbox,
    md: 6,
  },
];
