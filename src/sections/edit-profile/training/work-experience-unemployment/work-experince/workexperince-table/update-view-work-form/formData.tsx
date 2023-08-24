import * as Yup from "yup";

export const defaultValues = {
  employerName: "Ali",
  position: "Senior",
  experience: "I am ajsas ajsas",
  leavingReason: "I don't want to discuss",
  startDate: new Date(),
  endDate: new Date(),
  currentlyWorking: false,
};

export const FormSchema = Yup.object().shape({
  employerName: Yup.string()
    .required("trainingName is required")
    .min(1, "Mininum 1 characters")
    .max(50, "Maximum 50 characters"),
  position: Yup.string().required("empPosition is required"),
  experience: Yup.string().required("Experience is required"),
  leavingReason: Yup.string().required("resForLeaving is required"),
  startDate: Yup.date().required("Issue Date Is Required"),
  endDate: Yup.date().required("Expiry Date Is Required"),
  currentlyWorking: Yup.boolean(),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "employerName",
      label: "Name of Employer",
      fieldHeader: null,
    },
    {
      type: "TEXT",
      name: "position",
      label: "Position with the employer",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE",
      name: "experience",
      label: "Experience",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "TEXT_MULTILINE",
      name: "leavingReason",
      label: "Reason for leaving",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "DATE_PICKER",
      name: "startDate",
      label: "Start Date",
      fieldHeader: null,
    },
    {
      type: "DATE_PICKER",
      name: "endDate",
      label: "End Date",
      fieldHeader: null,
    },
  ],
  [
    {
      type: "SWITCH",
      name: "currentlyWorking",
      label: "Currently working here",
      fieldHeader: null,
    },
  ],
];
