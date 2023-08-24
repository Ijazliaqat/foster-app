import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import dayjs from "dayjs";

export const columnsTrainingVerification = (
  handleDelete: any,
  router: any,
  cancelDelete: any,
  setCancelDelete: any,
  openDeleteModel: any
) => [
  {
    id: "select",
    header: ({ table, row }: any) => {
      return (
        <Box>
          <Checkbox
            checked={table.getIsAllRowsSelected()}
            onChange={table.getToggleAllRowsSelectedHandler()}
          />
        </Box>
      );
    },
    cell: ({ row, table }: any) => (
      <Box>
        <Checkbox
          disabled={row?.original?.Assigned}
          checked={row?.original?.Assigned ? false : row.getIsSelected()}
          onChange={row.getToggleSelectedHandler()}
        />
      </Box>
    ),
  },
  {
    accessorFn: (row: any) => row,
    id: "srNo",
    cell: (info: any) => Number(info?.row?.id) + 1,
    header: "Sr. No",
    isSortable: false,
  },
  {
    accessorFn: (row: any) => row.carerName,
    id: "carerName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Carer Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.courseAttended,
    id: "courseAttended",
    cell: (info: any) => info.getValue(),
    header: () => <span>Courses Attended</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.date,
    id: "date",
    cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
    header: () => <span>Attended Date</span>,
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
              `/recruitment/assessment-stage-one/training-verification-form/edit-training-profile?${info.getValue()}`
            )
          }
        />
        <TableAction
          type="delete"
          onClicked={() => openDeleteModel(info.getValue())}
          size="small"
        />
        <TableAction
          type="view"
          onClicked={() =>
            router.push(
              `/recruitment/assessment-stage-one/training-verification-form/view-training-profile?${info.getValue()}`
            )
          }
        />
      </Box>
    ),
    header: () => <span>Actions</span>,
    isSortable: false,
  },
];
