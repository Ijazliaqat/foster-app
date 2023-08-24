import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";

export const columnsOutSchoolActivityTable = (
  handleDelete: any,
  router: any,
  cancelDelete: any,
  setCancelDelete: any,
  openDeleteModel: any,
  fosterChildId: any
) => [
  {
    id: "select",
    header: ({ table, row }: any) => {
      // console.log(table.getSelectedRowModel().flatRows);
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
    accessorFn: (row: any) => row.fromDate,
    id: "fromDate",
    cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    header: () => <span>Form Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.outOfDate,
    id: "outOfDate",
    cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    header: () => <span>To Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.activityType,
    id: "activityType",
    cell: (info: any) => info.getValue(),
    header: () => <span>Activity Type</span>,
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
              `/foster-child/education-records/out-of-school-activity/edit-out-of-school-activity-info?recordId=${info.getValue()}&fosterChildId=${fosterChildId}`
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
          onClicked={() => router.push(`/foster-child/education-records/out-of-school-activity/view-out-of-school-activity-info?recordId=${info.getValue()}&fosterChildId=${fosterChildId}`)}
        />
      </Box>
    ),
    header: () => <span>Actions</span>,
    isSortable: false,
  },
];
