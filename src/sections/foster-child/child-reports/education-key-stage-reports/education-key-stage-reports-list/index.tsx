import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";

export const columnsEducationKeyStageTable = (router: any) => [
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
    accessorFn: (row: any) => row.childName,
    id: "childName",
    cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    header: () => <span>Child Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.occurence,
    id: "occurence",
    cell: (info: any) => dayjs(info.getValue()).format("DD/MM/YYYY"),
    header: () => <span>Date/Time of Occurence</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.childStatus,
    id: "childStatus",
    cell: (info: any) => info.getValue(),
    header: () => <span>Child Status</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.createdDate,
    id: "createdDate",
    cell: (info: any) => info.getValue(),
    header: () => <span>Created Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.createdBy,
    id: "createdBy",
    cell: (info: any) => info.getValue(),
    header: () => <span>Created By</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row?.id,
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction type="view" onClicked={() => router.push(`/foster-child/child-reports/education-key-stage-report/view-education-key-stage-report`)} />
        <TableAction
          type="print"
          //   onClicked={() => openDeleteModel(info.getValue())}
          size="small"
        />

        <TableAction type="share" onClicked={() => router.push(``)} />
      </Box>
    ),
    header: () => <span>Actions</span>,
    isSortable: false,
  },
];
