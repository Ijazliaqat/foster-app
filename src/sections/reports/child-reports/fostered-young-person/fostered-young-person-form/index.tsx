import SignaturePad from "@root/components/SignaturePad";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  youngPersonName: "",
  youngPersonDOB: null,
  supervisingSocialWorker: "",
  createdBy: "",
  nameOfFosterCarer: "",
  date: null,
  signature: "",
};

export const formSchema = Yup.object().shape({
  youngPersonName: Yup.string().required("Field is required."),
  youngPersonDOB: Yup.string().required("Field is required."),
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
      label: "Young Person's Name",
      name: "youngPersonName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Young person's Date of Birth",
      name: "youngPersonDOB",
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
