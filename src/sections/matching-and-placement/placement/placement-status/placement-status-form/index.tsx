import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const initialValues = {
  childName: "",
  carerName: "",
  typeOfPlacement: "",
  dateOfPlacement: new Date(),
  placementEndDate: new Date(),
  agencySocialWorker: "",
  localAuthority: "",
  laSocialWorker: "",
  status: "",
  placementPlan: "",
  respiteAgreements: "",
  approvedBy: "",
};

export const formSchema = Yup.object().shape({
  childName: Yup.string().required("Field is required"),
  carerName: Yup.string().required("Field is required"),
  typeOfPlacement: Yup.string().required("Field is required"),
  dateOfPlacement: Yup.date().required("Field is required"),
  placementEndDate: Yup.date().required("Field is required"),
  agencySocialWorker: Yup.string().required("Field is required"),
  localAuthority: Yup.string().required("Field is required"),
  laSocialWorker: Yup.string().required("Field is required"),
  status: Yup.string().required("Field is required"),
  placementPlan: Yup.string().required("Field is required"),
  respiteAgreements: Yup.string().required("Field is required"),
  approvedBy: Yup.string().required("Field is required"),
});

export const formFields = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Child Name",
      name: "childName",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Carer Name",
      name: "carerName",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Type of Placement",
      name: "typeOfPlacement",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date of Placement",
      name: "dateOfPlacement",
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Placement End Date",
      name: "placementEndDate",
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Agency Social Worker",
      name: "agencySocialWorker",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Local Authority",
      name: "localAuthority",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "LA Social Worker",
      name: "laSocialWorker",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Status",
      name: "status",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },

  {
    gridLength: 6,
    otherOptions: {
      label: "Placement Plan",
      name: "placementPlan",
    },
    requireFileUpload: true,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Placement Agreements",
      name: "respiteAgreements",
    },
    requireFileUpload: true,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Approved by(Role)",
      name: "approvedBy",
      select: true,
      options: [{ value: "Select", label: "Select" }],
    },
    component: RHFSelect,
  },
];
