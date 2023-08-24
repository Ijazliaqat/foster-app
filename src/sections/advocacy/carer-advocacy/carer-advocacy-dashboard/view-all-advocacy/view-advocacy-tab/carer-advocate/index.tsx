import { RHFTextField } from "@root/components/hook-form";

// =========================================================
export const carerAdvocateData = [
  {
    gridLength: 6,
    otherOptions: {
      name: "firstName",
      label: "First Name",
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "middleName",
      label: "Middle Name",
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "lastName",
      label: "Last Name",
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "telephone",
      label: "Telephone",
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "email",
      label: "Email",
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "comments",
      label: "Comments",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
];