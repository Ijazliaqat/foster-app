import { Box } from "@mui/material";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import TableAction from "@root/components/TableAction";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const defaultValues = {
  relationShipType: "",
  firstName: "",
  middleName: "",
  lastName: "",
  address: "",
  phoneNumber: "",
  email: "",
  childrenTogether: "",
};

export const FormSchema = Yup.object().shape({
  relationShipType: Yup.string().required("Field is required"),
  firstName: Yup.string().required("Field is required"),
  lastName: Yup.string().required("Field is required"),
  address: Yup.string().required("Field is required"),
  phoneNumber: Yup.string().required("Field is required"),
  email: Yup.string().required("Field is required").email("Invalid Email"),
  childrenTogether: Yup.string().required("Field is required"),
});
export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      name: "relationShipType",
      label: "Relationship Type",
      fullWidth: true,
    },
    component: RHFTextField,
  },
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
      name: "phoneNumber",
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
  {
    gridLength: 12,
    otherOptions: {
      name: "childrenTogether",
      label:
        "Duration os relationship including whether you had any children together",
      multiline: true,
      minRows: 3,
      fullWidth: true,
      size: "small",
    },
    component: RHFTextField,
  },
];

export const columns = (
  changeView: any,
  setExPartnerData: any,
  role: any,
  listDeleteHandler: any
) => {
  return [
    {
      accessorFn: (row: any) => `${row.firstName} ${row.lastName}`,
      id: "name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.phoneNumber,
      id: "phoneNumber",
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
              setExPartnerData(info?.row?.original);
              changeView("view");
            }}
          />
          {role !== "foster-carer" && (
            <>
              <TableAction
                type="edit"
                onClicked={() => {
                  setExPartnerData(info.row.original);
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

export { default as ExPartners } from "./ExPartnersTable";
