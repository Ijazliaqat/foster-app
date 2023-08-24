import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import router from "next/router";

// utils

// ----------------------------------------------------------------------

export const PanelCaseListTableData = [];
export const columns = [
  {
    id: "select",
    header: ({ table, row }: any) => {
      console.log(table.getSelectedRowModel().flatRows);
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
    accessorFn: (row: any) => row.srNo,
    id: "srNo",
    cell: (info: any) => info.getValue(),
    header: () => <span>Sr. No</span>,
  },
  {
    accessorFn: (row: any) => row.carerName,
    id: "carerName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Carer Name(code)</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.time,
    id: "time",
    cell: (info: any) => info.getValue(),
    header: () => <span>Time</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.caseName,
    id: "caseName",
    cell: (info: any) => info.getValue(),
    header: () => <span>Case Name</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.dateMinutes,
    id: "dateMinutes",
    cell: (info: any) => info.getValue(),
    header: () => <span>Date Minutes Completed</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.dateSubmitted,
    id: "dateSubmitted",
    cell: (info: any) => info.getValue(),
    header: () => <span>Date Submitted to Chair for Recommendation</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.submittedToAdm,
    id: "submittedToAdm",
    cell: (info: any) => info.getValue(),
    header: () => <span>Submitted to ADM for approval</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.ADMDecision,
    id: "ADMDecision",
    cell: (info: any) => info.getValue(),
    header: () => <span>ADM Decision</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.ADMDecisionDate,
    id: "ADMDecisionDate",
    cell: (info: any) => info.getValue(),
    header: () => <span>ADM Decision Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.status,
    id: "status",
    cell: (info: any) => info.getValue(),
    header: () => <span>Status</span>,
    isSortable: true,
  },
  {
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <TableAction
          type="edit"
          onClicked={() =>
            router.push(
              "/carer-info/personal-info/carer-address-history/edit-address-history?123"
            )
          }
        />
      </Box>
    ),
    header: () => <span>Action</span>,
    isSortable: false,
  },
];

export { default as PanelCaseListTable } from "./PanelCaseListTable";
