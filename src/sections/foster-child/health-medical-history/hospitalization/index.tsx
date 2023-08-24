import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";
export const dummy = [
  {
    id: 1,
    hospitalName: "Hull Royal Infirmary",
    AdmissionDate: "05/05/2021",
    DischargeDate: "05/05/2021",
  },
];

export const HospitalizationFromvalue = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "hospitalName",
      label: "Hospital Name",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 12,
    otherOptions: {
      name: "reasonForHospitalisation",
      label: "Reason for hospitalisation",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "admissionDate",
      label: "Admission Date",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "dischargeDate",
      label: "Discharge Date",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "doctorName",
      label: "Doctor Name",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },

  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "dayToDayDetails",
      label: "Day to Day Details",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: false,
    otherOptions: {
      name: "followUpDate",
      label: "Follow up Date",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
];

export const HospitalizationListValue = {
  hospitalName: "",
  reasonForHospitalisation: "",
  admissionDate: new Date(),
  dischargeDate: new Date(),
  doctorName: "",
  dayToDayDetails: "",
  followUpDate: new Date(),
};
export const FormSchema = Yup.object().shape({
  hospitalName: Yup.string().required("required"),
  reasonForHospitalisation: Yup.string().required("required"),
  admissionDate: Yup.date().required("required"),
  dischargeDate: Yup.date().required("required"),
  doctorName: Yup.string().required("required"),
  dayToDayDetails: Yup.string().required("required"),
  followUpDate: Yup.date().required("required"),
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
