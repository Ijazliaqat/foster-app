import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";
export const dummy = [
  {
    id: 1,
    hospitalName: "Hull Royal Infirmary",
    city: "East Raiding of Yorkshire",
  },
];
export const HospitalInfoListForm = [
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
    label: "Contact details",
    component: "label",
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "comments",
      label: "Comments",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "city",
      label: "Town/City",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "officePhone",
      label: "Office phone",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "email",
      label: "Email",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "county",
      label: "County",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "country",
      label: "country",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      name: "postalCode",
      label: "postal code",
      multiline: false,
      //   minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
];
export const HospitalInfoListValue = {
  hospitalName: "",
  comments: "",
  city: "",
  officePhone: "",
  email: "",
  county: "",
  country: "",
  postalCode: "",
};

export const FormSchema = Yup.object().shape({
  hospitalName: Yup.string().required("required"),
  comments: Yup.string().required("required"),
  city: Yup.string().required("required"),
  officePhone: Yup.string().required("required"),
  email: Yup.string().required("required"),
  county: Yup.string().required("required"),
  country: Yup.string().required("required"),
  postalCode: Yup.string().required("required"),
});
//upload document
