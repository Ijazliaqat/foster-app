import * as Yup from "yup";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";

export const FamilyOrgInvolvedFormData = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "contactType",
      label: "Contact Type",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "Select Value", label: "Select Vaue" }],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      label: "Name",
      name: "name",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      label: "House Name / No",
      name: "houseName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      label: "Mobile",
      name: "mobile",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      label: "Fax",
      name: "fax",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      label: "Email Address",
      name: "email",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      label: "Street",
      name: "street",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      label: "City",
      name: "city",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      label: "County",
      name: "county",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "Select Value", label: "Select Vaue" }],
    component: RHFSelect,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      label: "Country",
      name: "country",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "Select Value", label: "Select Vaue" }],
    component: RHFSelect,
  },
  {
    id: 11,
    gridLength: 6,
    otherOptions: {
      label: "Post Code",
      name: "postCode",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 12,
    gridLength: 6,
    otherOptions: {
      label: "Phone",
      name: "phone",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 13,
    gridLength: 6,
    otherOptions: {
      name: "siblingRecord",
      label: "Add / Edit to Siblings Record",
    },
    component: RHFCheckbox,
  },
];

export const familyFormListValidation = Yup.object().shape({
  contactType: Yup.string().required("Required"),
  name: Yup.string().required("Required"),
  houseName: Yup.string().required("Required"),
  mobile: Yup.string().required("Required"),
  fax: Yup.string().required("Required"),
  email: Yup.string().required("Required"),
  street: Yup.string().required("Required"),
  city: Yup.string().required("Required"),
  county: Yup.string().required("Required"),
  country: Yup.string().required("Required"),
  postCode: Yup.string().required("Required"),
  phone: Yup.string().required("Required"),
  siblingRecord: Yup.boolean(),
});

export const defaultValuesFamilyList = {
  contactType: "",
  name: "",
  houseName: "",
  mobile: "",
  fax: "",
  email: "",
  street: "",
  city: "",
  county: "",
  country: "",
  postCode: "",
  phone: "",
  siblingRecord: false,
};
