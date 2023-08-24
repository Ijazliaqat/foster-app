import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const columnsPersonalEducationPlanTable = (
  handleDelete: any,
  router: any,
  cancelDelete: any,
  setCancelDelete: any,
  openDeleteModel: any
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
    accessorFn: (row: any) => row.school,
    id: "school",
    cell: (info: any) => info.getValue(),
    header: () => <span>School Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.principalName,
    id: "principalName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Principal Name</span>,
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
              `/foster-child/education-records/personal-education-plan/edit-personal-education-plan?${info.getValue()}`
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
              `/foster-child/education-records/personal-education-plan/view-personal-education-plan?${info.getValue()}`
            )
          }
        />
      </Box>
    ),
    header: () => <span>Actions</span>,
    isSortable: false,
  },
];

export const DummyChildExclusionData = [
  {
    id: 1,
    srNo: "1",
    schoolName: new Date().toDateString(),
    principalName: new Date().toDateString(),
  },
];
