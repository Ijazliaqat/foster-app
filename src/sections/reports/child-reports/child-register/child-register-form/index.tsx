import SignaturePad from "@root/components/SignaturePad";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  nameOfChild: "",
  childsDOB: null,
  supervisingSocialWorker: "",
  createdBy: "",
  nameOfFosterCarer: "",
  date: null,
  signature: "",
};

export const formSchema = Yup.object().shape({
  nameOfChild: Yup.string().required("Field is required."),
  childsDOB: Yup.string().required("Field is required."),
  supervisingSocialWorker: Yup.string().required("Field is required."),
  createdBy: Yup.string().required("Field is required."),
  nameOfFosterCarer: Yup.string().required("Field is required."),
  date: Yup.string().required("Field is required."),
  signature: Yup.string().required("Field is required."),
});

export const FRF1FormData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Name of child/children",
      name: "nameOfChild",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Child's Date of Birth",
      name: "childsDOB",
      fullWidth: true,
    },
    component: RHFDatePicker,
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
      label: "Created By",
      name: "createdBy",
      fullWidth: true,
    },
    component: RHFTextField,
  },
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
