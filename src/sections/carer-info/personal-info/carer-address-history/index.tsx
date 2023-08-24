import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import * as Yup from "yup";
import router from "next/router";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { COUNTRIESDROPDOWN } from "@root/dropdown-data/countries";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import { COUNTYDROPDOWN } from "@root/dropdown-data/county";

export const defaultValues = {
  type: "Pre Approved",
  datedMoved: "",
  currentAddress: "Yes",
  address: "",
  townCity: "",
  telephone: "",
  officePhone: "",
  mobilePhone: "",
  email: "",
  county: "",
  country: "",
  postalCode: "",
  dateMovedOut: new Date(),
  localAuthority: "",
};

export const FormSchema = Yup.object().shape({
  type: Yup.string().required("Field is required"),
  datedMoved: Yup.string().required("Field is required"),
  currentAddress: Yup.string().required("Field is required"),
  address: Yup.string().required("Field is required"),
  townCity: Yup.string().required("Field is required"),
  telephone: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 4 characters")
    .max(35, "Maximum 35 characters"),
  officePhone: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 4 characters")
    .max(35, "Maximum 35 characters"),
  mobilePhone: Yup.string()
    .required("Field is required")
    .min(4, "Mininum 4 characters")
    .max(35, "Maximum 35 characters"),
  email: Yup.string()
    .required("Field is required")
    .email("Invalid Email Address"),
  country: Yup.string().required("Field is required"),
  postalCode: Yup.string().required("Field is required"),
  dateMovedOut: Yup.date().required("Field is required"),
  localAuthority: Yup.string().required("Field is required"),
});
export const formData = [
  {
    gridLength: 12,
    otherOptions: {
      defaultValue: "Pre Approved",
      label: "Type?",
      name: "type",
      options: ["Pre Approved", "Post Approved"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "datedMoved",
      label: "Dated Moved",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },

  {
    gridLength: 12,
    otherOptions: {
      defaultValue: "Yes",
      label: "Current Address",
      name: "currentAddress",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroupWithLabel,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "address",
      label: "Address",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "townCity", label: "Town City", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "telephone", label: "Telephone", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "officePhone",
      label: "Office Phone",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "mobilePhone",
      label: "Mobile Phone",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "email", label: "Email", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "county",
      label: "County",
      fullWidth: true,
      select: true,
    },
    options: COUNTYDROPDOWN,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "country",
      label: "Country",
      fullWidth: true,
      select: true,
    },
    options: COUNTRIESDROPDOWN,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: { name: "postalCode", label: "Postal Code", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "dateMovedOut",
      label: "Date Moved Out",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "localAuthority",
      label: "Local Authority",
      fullWidth: true,
      select: true,
    },
    options: [
      { value: "Pakistan", label: "Pakistan" },
      { value: "India", label: "India" },
    ],
    component: RHFSelect,
  },
];

export const columns = (listDeleteHandler: any) => {
  return [
    {
      accessorFn: (row: any) => row.townCity,
      id: "townCity",
      cell: (info: any) => info.getValue(),
      header: () => <span>City</span>,
    },
    {
      accessorFn: (row: any) => row.address,
      id: "address",
      cell: (info: any) => info.getValue(),
      header: () => <span>Address</span>,
    },
    {
      accessorFn: (row: any) => row.currentAddress,
      id: "currentAddress",
      cell: (info: any) => info.getValue(),
      header: () => <span>Current Adrress</span>,
    },
    {
      accessorFn: (row: any) => row.type,
      id: "type",
      cell: (info: any) => info.getValue(),
      header: () => <span>Status</span>,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="edit"
            onClicked={() =>
              router.push(
                `/carer-info/personal-info/carer-address-history/edit-address-history/${info?.row?.original?.id}`
              )
            }
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push(
                `/carer-info/personal-info/carer-address-history/view-address-history/${info?.row?.original?.id}`
              )
            }
          />
          <DeletePrompt
            onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
          />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
};

export { default as CarerAddressHistory } from "./CarerAddressHistoryForms";
