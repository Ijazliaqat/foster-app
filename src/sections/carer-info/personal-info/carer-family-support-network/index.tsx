import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { ETHNICITYDROPDOWN } from "@root/dropdown-data/ethnicity";
import { RELATIONDROPDOWN } from "@root/dropdown-data/relation";
import { RELIGIONDROPDOWN } from "@root/dropdown-data/religion";
import dayjs from "dayjs";
import router from "next/router";
import * as Yup from "yup";

export const ageOf18Years = dayjs().subtract(18, "year");

export const CarerFamilySupportNetworkFormData = [
  {
    id: 1,
    componentProps: {
      name: "firstName",
      label: "First Name",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "middleName",
      label: "Middle Name",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 3,
    componentProps: {
      name: "lastName",
      label: "Last Name",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 4,
    componentProps: {
      name: "dateOfBirth",
      label: "Date of Birth",
      fullWidth: true,
      maxDate: ageOf18Years.valueOf(),
    },
    component: RHFDatePicker,
    md: 6,
  },
  {
    id: 5,
    component: RHFSelect,
    md: 6,
    componentProps: {
      name: "relation",
      label: "Relation",
      select: true,
    },
    options: RELATIONDROPDOWN,
  },
  {
    id: 6,
    componentProps: {
      name: "ethnicity",
      label: "Ethnicity",
      select: true,
    },
    component: RHFSelect,
    md: 6,
    options: ETHNICITYDROPDOWN,
  },
  {
    id: 7,
    componentProps: {
      name: "religion",
      label: "Religion",
      select: true,
    },
    component: RHFSelect,
    md: 6,
    options: RELIGIONDROPDOWN,
  },
  {
    id: 8,
    componentProps: {
      name: "telephoneNumber",
      label: "Telephone Number",
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 9,
    componentProps: {
      name: "areChecksRequired",
      label: "Are Checks Required",
    },
    component: RHFCheckbox,
    md: 6,
  },
  {
    id: 10,
    componentProps: {
      name: "livingAtHome",
      label: "Living at Home",
    },
    component: RHFCheckbox,
    md: 6,
  },
  {
    id: 11,
    componentProps: {
      name: "address",
      label: "Address",
      multiline: true,
      rows: 3,
    },
    component: RHFTextField,
    md: 12,
  },
];

export const defaultValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  dateOfBirth: new Date(ageOf18Years.format("MM/DD/YYYY")),
  relation: "",
  ethnicity: "",
  religion: "",
  telephoneNumber: "",
  areChecksRequired: false,
  livingAtHome: false,
  address: "",
};

export const CarerFamilySupportNetworkFormSchema = Yup.object().shape({
  firstName: Yup.string().trim().required("First Name is Required"),
  middleName: Yup.string().trim(),
  lastName: Yup.string().trim().required("Last Name is Required"),
  dateOfBirth: Yup.date().required("Date is Required"),
  relation: Yup.string().trim().required("Relation is Required"),
  ethnicity: Yup.string().trim().required("Ethnicity is Required"),
  religion: Yup.string().trim().required("Religion is Required"),
  telephoneNumber: Yup.string()
    .typeError("Must be a number")
    .min(10, "Invalid Telephone Number")
    .matches(/^\+44\d{10}$/, "Invalid Telephone Number")
    .required("Telephone Number is Required"),
  areChecksRequired: Yup.boolean(),
  livingAtHome: Yup.boolean(),
  address: Yup.string().trim().required("Address is Required"),
});

export const getColumnsCarerFamilySupportNetwork = (makePath: any) => {
  return [
    {
      accessorFn: (row: any) => row?.firstName + " " + row?.lastName,
      id: "name",
      cell: (info: any) => info.getValue(),
      header: "Name",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.dateOfBirth,
      id: "dateOfBirth",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Date of Birth",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.relation,
      id: "relation",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Relation",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => (row?.livingAtHome ? "Yes" : "No"),
      id: "livingAtHome",
      cell: (info: any) => info.getValue(),
      header: "Living At Home",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="edit"
            onClicked={() =>
              router.push(
                makePath({
                  path: "/carer-info/personal-info/carer-family-support-network/edit-family-support",
                  queryParams: { familyId: info.getValue() },
                })
              )
            }
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push(
                makePath({
                  path: "/carer-info/personal-info/carer-family-support-network/view-family-support",
                  queryParams: { familyId: info.getValue() },
                })
              )
            }
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];
};

export { default as CarerFamilySupportNetworkForm } from "./CarerFamilySupportNetworkForm";
