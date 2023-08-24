import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const TherapyInfoFormFields = [
  {
    id: 1,
    gridLength: 3,
    otherOptions: {
      name: "referralToCAMHS",
      label: "Referral to CAMHS",
      fullWidth: true,
    },
    component: RHFCheckbox,
  },
  {
    id: 2,
    gridLength: 9,
    otherOptions: {
      name: "CAMHSAppointment",
      label: "CAMHS Appointment",
      fullWidth: true,
    },
    component: RHFCheckbox,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "referralDate",
      label: "Referral Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "appointmentDate",
      label: "Appointment Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "anyOtherTherapy",
      label: "Any Other Therapy",
      fullWidth: true,
    },
    component: RHFCheckbox,
  },
  {
    id: 7,
    gridLength: 12,
    otherOptions: {
      name: "therapistNameAndAddress",
      label: "Therapist Name / Address",
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
      name: "therapyArrangements",
      label: "Therapy Arrangements",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 4,
    otherOptions: {
      name: "formalMentalHealth",
      label: "Has Therapy been identified in the Care Plan ?",
      fullWidth: true,
    },
    component: RHFCheckbox,
  },
  {
    id: 5,
    gridLength: 4,
    otherOptions: {
      name: "strengthAndDifficulties",
      label: "Strength & Difficulties Questionnaire completed by Carer",
      fullWidth: true,
    },
    component: RHFCheckbox,
  },
  {
    id: 5,
    gridLength: 4,
    otherOptions: {
      name: "hasTherapyIdentified",
      label: "Formal Mental Health Assessment",
      fullWidth: true,
    },
    component: RHFCheckbox,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "childEngagedInTherapy",
      label: "Is this Child Engaged in therapy as identified in the Care Plan ?",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const defaultValues = {
  referralToCAMHS: false,
  CAMHSAppointment: false,
  appointmentDate: new Date(),
  referralDate: new Date(),
  anyOtherTherapy: false,
  therapistNameAndAddress: "Nil",
  formalMentalHealth: false,
  strengthAndDifficulties: false,
  hasTherapyIdentified: false,
  therapyArrangements: "Nil",
  childEngagedInTherapy: "Nil",
};
export const formatters: any = {};

export const formSchema = Yup.object().shape({
  appointmentDate: Yup.date().required("Required"),
  referralDate: Yup.date().required("Required"),
  therapistNameAndAddress: Yup.string().required("Required"),
  therapyArrangements: Yup.string().required("Required"),
  childEngagedInTherapy: Yup.string().required("Required"),
});
