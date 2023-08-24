import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  localAuthorityNumber: "",
  requestedPerson: "",
  role: "",
  date: new Date(),
  dataType: "",
};
export const formSchema = Yup.object().shape({
  localAuthorityNumber: Yup.string().required("Field is required"),
  requestedPerson: Yup.string().required("Field is required"),
  role: Yup.string().required("Field is required"),
  date: Yup.date().required("Field is required"),
  dataType: Yup.string().required("Field is required"),
});
export const SecureDataExchange = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Local Authority Number",
      size: "small",
      name: "localAuthorityNumber",
      fullWidth: true,
      type: "text",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Requested By (IFA Requested Person)",
      size: "small",
      name: "requestedPerson",
      fullWidth: true,
      type: "text",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Role",
      size: "small",
      name: "role",
      fullWidth: true,
      type: "text",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Date",
      name: "date",
      size: "small",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Data Type",
      size: "small",
      name: "dataType",
      fullWidth: true,
      select: true,
      options: [
        { value: "Request for Single Data", label: "Request for Single Data" },
        { value: "Request for Bulk Data", label: "Request for Bulk Data" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Other Details",
      name: "otherDetails",
      fullWidth: true,
      multiline: true,
      minRows: 3,
      size: "small",
      type: "text",
    },
    component: RHFTextField,
  },
];
