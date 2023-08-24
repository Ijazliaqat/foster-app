import router from "next/router";
import TableAction from "@root/components/TableAction";
import { Box, Checkbox, useTheme } from "@mui/material";

// ===================================================================================

export const useViewAllAdvocacy = () => {
  const theme = useTheme();

  const AllAdvocacyColumns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
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
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.advocacyNumber,
      id: "advocacyNumber",
      cell: (info: any) => info.getValue(),
      header: () => <span>Advocacy Number</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.date,
      id: "date",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.type,
      id: "type",
      cell: (info: any) => info.getValue(),
      header: () => <span>Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.advocateName,
      id: "advocateName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Advocate Name</span>,
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
          <TableAction type="view"  onClicked={() =>
              router.push({ pathname: `/advocacy/carer/dashboard/view-all-advocacy/form/${info.row.original.id}`, query: { action: "view" } })
            } 
            />
        </Box>
      ),
      header: () => <span>Action</span>,
      isSortable: false,
    },
  ];

  return {
    AllAdvocacyColumns,
    theme,
  };
};
