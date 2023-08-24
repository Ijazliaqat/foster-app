import { useState } from "react";
import TableAction from "@root/components/TableAction";
import { Box, Checkbox, useTheme } from "@mui/material";

// =====================================================================

export const usePanelApproval = () => {
  const theme: any = useTheme();
  const [isDecisionModal, setIsDecisionModal] = useState(false);

  const handleClose = () => setIsDecisionModal(false);

  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table.getSelectedRowModel().flatRows);
        return (
          <Box>
            <Checkbox checked={table.getIsAllRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()} />
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
      accessorFn: (row: any) => row.carerName,
      id: "carerName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Carer Name (Code)</span>,
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
      accessorFn: (row: any) => row.dateCompleted,
      id: "dateCompleted",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date Minutes Completed</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dateRecommendation,
      id: "dateRecommendation",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date Submitted to Chair for Recommendation</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.submittedApproval,
      id: "submittedApproval",
      cell: (info: any) => info.getValue(),
      header: () => <span>Submitted to ADM for approval</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.admDecision,
      id: "admDecision",
      cell: (info: any) => info.getValue(),
      header: () => <span>ADM Decision</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.decisionDate,
      id: "decisionDate",
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
          <TableAction size="small" type="edit" onClicked={() => setIsDecisionModal(true)} />
        </Box>
      ),
      header: () => <span>action</span>,
      isSortable: false,
    },
  ];

  return { theme, columns, isDecisionModal, handleClose };
};
