import { useRef } from "react";
import { Box, Checkbox, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { TableData, SELECT_FILTERS } from ".";
import TableAction from "@root/components/TableAction";

export const useAssessmentHistory = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const theme = useTheme();

  const columns = [
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
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.assessmentBy,
      id: "assessmentBy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Assessment by (Role)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.trerminationApprovedDate,
      id: "trerminationApprovedDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Trermination Approved Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.terminationApproverNameRole,
      id: "terminationApproverNameRole",
      cell: (info: any) => info.getValue(),
      header: () => <span>Termination Approver Name(Role)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.assessmentDate,
      id: "assessmentDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Assessment Date</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="edit"
            onClicked={() =>
              router.push({
                pathname:
                  "/de-registration/deregister-foster-carer/proposal-to-teminate/edit-assessment-history-form",
                query: { action: "edit", id: "" },
              })
            }
          />
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname:
                  "/de-registration/deregister-foster-carer/proposal-to-teminate/view-assessment-history-form",
                query: { action: "view", id: "" },
              })
            }
          />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return {
    tableHeaderRefTwo,
    router,
    TableData,
    columns,
    theme,
    SELECT_FILTERS,
  };
};
