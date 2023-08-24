import { Box } from "@mui/material";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import TableAction from "@root/components/TableAction";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const defaultValues = {
  firstName: "",
  middleName: "",
  lastName: "",
  address: "",
  phoneNum: "",
  email: "",
};

export const FormSchema = Yup.object().shape({
  firstName: Yup.string().required("First Name is required"),
  lastName: Yup.string().required("Last Name is required"),
  address: Yup.string().required("Address is required"),
  phoneNum: Yup.string()
    .required("Phone Number is required")
    .min(4, "Mininum 4 characters")
    .max(25, "Maximum 25 characters"),
  email: Yup.string().required("Email is required").email("Invalid Email"),
});
export const formData = [
  {
    gridLength: 6,
    otherOptions: { name: "firstName", label: "First Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "middleName", label: "Middle Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "lastName", label: "Last Name", fullWidth: true },
    component: RHFTextField,
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
    otherOptions: {
      name: "phoneNum",
      label: "Phone Number",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: { name: "email", label: "Email", fullWidth: true },
    component: RHFTextField,
  },
];

export const columns = (
  changeView: any,
  setRefData: any,
  role: any,
  listDeleteHandler: any
) => {
  return [
    {
      accessorFn: (row: any) => `${row.firstName}  ${row.lastName}`,
      id: "firstName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.phoneNum,
      id: "phoneNum",
      cell: (info: any) => info.getValue(),
      header: () => <span>Phone</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.email,
      id: "email",
      cell: (info: any) => info.getValue(),
      header: () => <span>Email</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="view"
            onClicked={() => {
              setRefData({ ...info.row.original });
              changeView("view");
            }}
          />
          {role !== "foster-carer" && (
            <>
              <TableAction
                type="edit"
                onClicked={() => {
                  setRefData(info.row.original);
                  changeView("edit");
                }}
              />
              <DeletePrompt
                onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
              />
            </>
          )}
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
};
export { default as Reference } from "./ReferenceTable";
