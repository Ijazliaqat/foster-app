import * as Yup from "yup";

export const defaultValues = {
  referalCAHMS: false,
  CAHMSAppointment: false,
  referralDate: new Date(),
  appointmentDate: new Date(),
  anyOtherTherapy: false,
  therapistName: "",
  therapistArrangements: "",
  isChildEngagedIndetifyInCarePlana: "",
  uncheckOption1: false,
  uncheckOption2: false,
  uncheckOption3: false,
};

export const FormSchema = Yup.object().shape({
  referalCAHMS: Yup.boolean(),
  CAHMSAppointment: Yup.boolean(),
  referralDate: Yup.date()
    .typeError("date is required")
    .required("date is required"),
  appointmentDate: Yup.date()
    .typeError("date is required")
    .required("date is required"),
  anyOtherTherapy: Yup.boolean(),
  therapistName: Yup.string(),
  therapistArrangements: Yup.string(),
  isChildEngagedIndetifyInCarePlana: Yup.string(),
  uncheckOption1: Yup.boolean(),
  uncheckOption2: Yup.boolean(),
  uncheckOption3: Yup.boolean(),
});

export const fieldsInfo = [
  [
    {
      type: "DATE_PICKER",
      name: "referralDate",
      label: "Referral Date",
      fieldHeader: null,
    },
    {
      type: "DATE_PICKER",
      name: "appointmentDate",
      label: "Appointment Date",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "CHECKBOX",
      name: "anyOtherTherapy",
      label: "Any Other Therapy",
      fieldHeader: null,
    },
  ],
];
