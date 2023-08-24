import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const medicalAppointmentsFormValue = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "appointmentDate",
      label: "Appointment Date",
      multiline: false,

      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "doctorName",
      label: "Doctor Name",
      multiline: false,

      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "healthAppointmentType",
      label: "Health Appointment Type",
      multiline: false,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "details",
      label: "Details",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "dateOfNextAppointment",
      label: "Date of Next Appointment",
      multiline: false,
      fullWidth: true,
    },
    component: RHFDatePicker,
    format: (date: any) => {
      return new Date(date);
    },
  },
];
export const medialFormets: any = {};
for (const formControl of medicalAppointmentsFormValue) {
  if (formControl.format)
    medialFormets[formControl.otherOptions.name] = formControl.format;
}
export const MedicalAppointmentsInfoListValue = {
  appointmentDate: new Date(),
  doctorName: "",
  healthAppointmentType: "",
  details: "",
  dateOfNextAppointment: new Date(),
};
export const FormSchema = Yup.object().shape({
  appointmentDate: Yup.date().required("required"),
  doctorName: Yup.string().required("required"),
  healthAppointmentType: Yup.string().required("required"),
  details: Yup.string().required("required"),
  dateOfNextAppointment: Yup.date().required("required"),
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
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
