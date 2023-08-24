import * as Yup from "yup";

export const defaultValues = {
  physicallyAudited: false,
  furtherTrainingYes: false,
  furtherTrainingNo: false,
  singleCertificate: false,
  individual: false,
  issuedDate: new Date(),
  expiryDate: new Date(),
};

export const FormSchema = Yup.object().shape({
  physicallyAudited: Yup.boolean().required("Current Address is required"),
  furtherTrainingYes: Yup.boolean().required("Current Address is required"),
  furtherTrainingNo: Yup.boolean().required("Current Address is required"),
  singleCertificate: Yup.boolean().required("Single Address is required"),
  individual: Yup.boolean().required("Multiple Address is required"),
});
