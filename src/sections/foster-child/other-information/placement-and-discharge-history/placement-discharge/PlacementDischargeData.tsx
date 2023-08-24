import { Box } from "@mui/material";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import TableAction from "@root/components/TableAction";
import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";
import * as Yup from "yup";

export const defaultValues = {
  childName: "",
  placementDate: new Date(),
  placementType: "",
  dischargeDate: new Date(),
  dischargeReason: "",
  isRespite: false,
};
export const formData = [
  {
    id: 0,
    gridLength: 6,
    otherOptions: { name: "childName", label: "Child Name", fullWidth: true },
    component: RHFTextField,
  },
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "placementDate",
      label: "Placement Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },

  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "placementType",
      label: "Placement Type",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "dischargeDate",
      label: "Discharge Date/Time",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "dischargeReason",
      label: "Discharge Reason",
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "isRespite",
      label: "Is Respite",
    },
    component: RHFCheckbox,
  },
];

export const formatters: any = {};

export const formSchema = Yup.object().shape({
  childName: Yup.string().required("Required"),
  dischargeReason: Yup.string().required("Required"),
  placementDate: Yup.date().required("Required"),
  placementType: Yup.string().required("Required"),
  dischargeDate: Yup.date().required("Required"),
});

export const columns = ({ router, fosterChildId, listDeleteHandler }: any) => {
  return [
    {
      accessorFn: (row: any) => row?.subject,
      id: "subject",
      cell: (info: any) => info.getValue(),
      header: "Child Name(Code)",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row?.dateOfOccurence,
      id: "dateOfOccurence",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: "Placement Date/Time",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row?.entryType,
      id: "entryType",
      cell: (info: any) => info.getValue(),
      header: "Place Type",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row?.dateOfOccurence,
      id: "dateOfOccurence",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: "Discharge Date/Time",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row?.entryType,
      id: "entryType",
      cell: (info: any) => info.getValue(),
      header: "Discharge Reason",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row?.entryType,
      id: "entryType",
      cell: (info: any) => info.getValue(),
      header: "Is Respite",
      isSortable: false,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="edit"
            onClicked={() =>
              router.push({
                pathname:
                  "/foster-child/other-information/placement-and-discharge-history/placement-discharge",
                query: {
                  action: "edit",
                  id: info?.row?.original?.id,
                  fosterChildId: fosterChildId,
                },
              })
            }
          />
          {/* Delete Modal */}
          <DeletePrompt
            onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
          />
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname:
                  "/foster-child/other-information/placement-and-discharge-history/placement-discharge",
                query: {
                  action: "view",
                  id: info?.row?.original?.id,
                  fosterChildId: fosterChildId,
                },
              })
            }
          />
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];
};
