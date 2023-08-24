import * as Yup from "yup";

export const defaultValues = {
  leavingReason: "I don't want to discuss",
  startDate: new Date(),
  endDate: new Date(),
  currentlyWorking: false,
};

export const FormSchema = Yup.object().shape({
  leavingReason: Yup.string().required("resForLeaving is required"),
  startDate: Yup.date().required("Issue Date Is Required"),
  endDate: Yup.date().required("Expiry Date Is Required"),
  currentlyWorking: Yup.boolean(),
});

export const fieldsInfo = [
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
