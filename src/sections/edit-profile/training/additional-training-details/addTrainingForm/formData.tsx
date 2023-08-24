import * as Yup from "yup";

export const defaultValues = {
  trainingName: "Essex",
  issuedDate: new Date(),
  expiryDate: new Date(),
};

export const FormSchema = Yup.object().shape({
  trainingName: Yup.string()
    .required("trainingName is required")
    .min(6, "Mininum 6 characters")
    .max(50, "Maximum 50 characters"),
    issuedDate: Yup.date().required("Issue Date Is Required"),
  expiryDate: Yup.date().required("Expiry Date Is Required"),
});

export const fieldsInfo = [
  [
    {
      type: "TEXT",
      name: "trainingName",
      label: "Training Name",
      fieldHeader: null,
    },
  ],
];
