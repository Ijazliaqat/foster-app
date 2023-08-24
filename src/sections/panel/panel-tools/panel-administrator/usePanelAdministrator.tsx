import { useRouter } from "next/router";
import TableAction from "@root/components/TableAction";
import { Box, Checkbox, useTheme } from "@mui/material";

// =========================================================

export const usePanelAdministrator = () => {
  const theme: any = useTheme();
  let router = useRouter();
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
      accessorFn: (row: any) => row.minutesCompleted,
      id: "minutesCompleted",
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
      accessorFn: (row: any) => row.minutes,
      id: "minutes",
      cell: (info: any) => info.getValue(),
      header: () => <span>Minutes</span>,
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
          <TableAction type="view" onClicked={() => router.push("/panel/panel-tools/administrator/administrator-form")} />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return {
    theme,
    router,
    columns,
  };
};
