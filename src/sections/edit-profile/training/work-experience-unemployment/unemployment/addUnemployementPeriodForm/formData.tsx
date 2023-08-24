import * as Yup from "yup";

export const defaultValues = {
  leavingReason: "I don't want to discuss",
  startDate: new Date(),
  endDate: new Date(),
  currentlyUnemployed: false,
};

export const FormSchema = Yup.object().shape({
  leavingReason: Yup.string().required("resForLeaving is required"),
  startDate: Yup.date().required("Issue Date Is Required"),
  endDate: Yup.date().required("Expiry Date Is Required"),
  currentlyUnemployed: Yup.boolean(),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT_MULTILINE",
      name: "leavingReason",
      label: "Reason for Unemployment",
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
      name: "currentlyUnemployed",
      label: "Currently Unemployement",
      fieldHeader: null,
    },
  ],
];
