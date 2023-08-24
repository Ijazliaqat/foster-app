import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const HospitalisationInfoFormFields = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "hospitalName",
      label: "Hospital Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 12,
    otherOptions: {
      name: "reasonForHospitalisation",
      label: "Reason for Hospitalisation",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "admissionDate",
      label: "Admission  Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "dischargeDate",
      label: "Discharge  Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "doctorName",
      label: "Doctor Name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "dayToDayDetails",
      label: "Day to Day Details",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "followUpDate",
      label: "Follow Up Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];
export const defaultValues = {
  hospitalName: "Nil",
  reasonForHospitalisation: "Nil",
  dischargeDate: new Date(),
  admissionDate: new Date(),
  dayToDayDetails: "Nil",
  doctorName: "Nil",
  followUpDate: new Date(),
};
export const formatters: any = {};

export const formSchema = Yup.object().shape({
  hospitalName: Yup.string().required("Required"),
  reasonForHospitalisation: Yup.string().required("Required"),
  dischargeDate: Yup.date().required("Required"),
  admissionDate: Yup.date().required("Required"),
  dayToDayDetails: Yup.string().required("Required"),
  doctorName: Yup.string().required("Required"),
  followUpDate: Yup.date().required("Required"),
});
