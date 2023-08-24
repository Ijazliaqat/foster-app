import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";
export const dummy = [
  {
    id: 1,
    medicationName: "Amoxillin",
    issuedDate: "Date Issued",
  },
];
export const childMedicationInfoData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "prescriptionIssueDate",
      label: "Prescription Issue Date",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "nextPrescriptionDueDate",
      label: "Next Prescription Due Date",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "medicationName",
      label: "Name of Medication",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "dosageFrequencyGiven",
      label: "Dosage Frequency Given",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "givenByPersonName",
      label: "Given By (Person Name)",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "prescribedByGP",
      label: "Prescribed by GP",
    },
    component: RHFCheckbox,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "issueToCarer",
      label: "Issue to Carer",
      fullWidth: true,
      select: true,
    },
    options: [
      {
        value: "Cora Langley",
        label: "Cora Langley",
      },
    ],
    component: RHFSelect,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "issuedDate",
      label: "Date Issued",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      name: "anyReaction",
      label: "Any Reactions",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      name: "comments",
      label: "Comments",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const ChildMedicationInfoListValue = {
  prescriptionIssueDate: new Date(),
  nextPrescriptionDueDate: new Date(),
  medicationName: "",
  dosageFrequencyGiven: "",
  givenByPersonName: "",
  prescribedByGP: undefined,
  issueToCarer: "",
  issuedDate: new Date(),
  anyReaction: "",
  comments: "",
};
export const FormSchema = Yup.object().shape({
  prescriptionIssueDate: Yup.date().required("required"),
  nextPrescriptionDueDate: Yup.date().required("required"),
  medicationName: Yup.string().required("required"),
  dosageFrequencyGiven: Yup.string().required("required"),
  givenByPersonName: Yup.string().required("required"),
  prescribedByGP: Yup.boolean().required("required"),
  issueToCarer: Yup.string().required("required"),
  issuedDate: Yup.date().required("required"),
  anyReaction: Yup.string().required("required"),
  comments: Yup.string().required("required"),
});
//upload document
export const formSchemaModel = Yup.object().shape({
  type: Yup.string().required("required"),
  documentDate: Yup.date().required("required"),
  password: Yup.string().required("required"),
});

export const UploadViewDocFormData = [
  {
    id: 2,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "type",
      label: "Document Type",
      select: true,
      options: [
        {
          value: "PDF",
          label: "PDF",
        },
        {
          value: "WORD",
          label: "WORD",
        },
      ],
    },
    component: RHFSelect,
  },
  {
    id: 3,
    componentProps: {
      name: "documentDate",
      label: "Date Of Enquiry",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "password",
      label: "Password to Open Document",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const Formet: any = {};

for (const formControl of UploadViewDocFormData) {
  if (formControl.format)
    Formet[formControl.componentProps.name] = formControl.format;
}

///
export const uploadDummyData = [
  {
    srNo: "1",
    documentName: "zyz",
    type: "zyz",
    documentDate: "zyz",
    incidentId: "zyz",
    password: "zyz",
  },
];
export const UploadDocFormData = [
  {
    id: 2,
    gridLength: 12,
    componentProps: {
      fullWidth: true,
      name: "type",
      label: "Document Type",
      select: true,
      options: [
        {
          value: "PDF",
          label: "PDF",
        },
        {
          value: "WORD",
          label: "WORD",
        },
      ],
    },
    component: RHFSelect,
  },
  {
    id: 3,
    componentProps: {
      name: "documentDate",
      label: "Date Of Enquiry",
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "password",
      label: "Password to Open Document",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
