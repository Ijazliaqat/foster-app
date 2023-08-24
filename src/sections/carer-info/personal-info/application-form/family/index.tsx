import { Box } from "@mui/material";
import dayjs from "dayjs";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { RELATIONDROPDOWN } from "@root/dropdown-data/relation";
import TableAction from "@root/components/TableAction";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";

export const defaultValues = {
  memberName: "",
  dob: new Date(),
  relation: "",
  subject: "",
  isLivingAtHome: false,
};

export const FormSchema = Yup.object().shape({
  memberName: Yup.string().required("Name is required"),
  dob: Yup.date().required("Date of Birth is required"),
  relation: Yup.string().required("Relation is required"),
  subject: Yup.string().required("Subject is required"),
});
export const formData = [
  {
    gridLength: 6,
    otherOptions: { name: "memberName", label: "Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    otherOptions: {
      name: "subject",
      label: "Subject",
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
      name: "dob",
      label: "Date of Birth",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "relation",
      label: "Relation",
      fullWidth: true,
      select: true,
    },
    options: RELATIONDROPDOWN,
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "isLivingAtHome",
      label: "Is Living At Home",
    },
    component: RHFCheckbox,
  },
];
export const columns = (
  changeView: any,
  setFamilyData: any,
  role: any,
  listDeleteHandler: any
) => {
  return [
    {
      accessorFn: (row: any) => row.memberName,
      id: "member_name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Member Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dob,
      id: "dob",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("DD/MM/YYYY")}</Box>;
      },
      header: () => <span>Date of Birth</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.relation,
      id: "relation",
      cell: (info: any) => info.getValue(),
      header: () => <span>Relation</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.subject,
      id: "subject",
      cell: (info: any) => info.getValue(),
      header: () => <span>Subject</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.isLivingAtHome,
      id: "isLivingAtHome",
      cell: (info: any) => (info.getValue() ? "Yes" : "No"),
      header: () => <span>Is Living at home</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="view"
            onClicked={() => {
              setFamilyData(info?.row?.original);
              changeView("view");
            }}
          />
          {role !== "foster-carer" && (
            <>
              <TableAction
                type="edit"
                onClicked={() => {
                  setFamilyData(info.row.original);
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

export { default as FamilyTable } from "./FamilyTable";
