import SignaturePad from "@root/components/SignaturePad";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  fosterCarer: "",
  dateOfReviewMeeting: null,
  reviewOfficer: "",
  supervisingSocialWorker: "",
  fosterCarers: "",
  date: null,
  signature: "",
};

export const formSchema = Yup.object().shape({
  fosterCarer: Yup.string().required("Field is required."),
  dateOfReviewMeeting: Yup.string().required("Field is required."),
  reviewOfficer: Yup.string().required("Field is required."),
  supervisingSocialWorker: Yup.string().required("Field is required."),
  fosterCarers: Yup.string().required("Field is required."),
  date: Yup.string().required("Field is required."),
  signature: Yup.string().required("Field is required."),
});

export const FRF1FormData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Foster Carer",
      name: "fosterCarer",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of Review Meeting",
      name: "dateOfReviewMeeting",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Review Officer",
      name: "reviewOfficer",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Supervising Social Worker",
      name: "supervisingSocialWorker",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Foster Carer(s)",
      name: "fosterCarers",
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
      label: "Date",
      name: "date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Signature",
      name: "signature",
    },
    component: SignaturePad,
  },
];
