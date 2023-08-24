import { useState } from "react";
import { useRouter } from "next/router";
import { TableDemoData } from ".";
import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const useAssessmentForm = () => {
  const path = "/reports/ifa-reports/risk-assessment/form";
  const [filterValue, setFilterValue] = useState({
    dateFrom: "",
    dateTo: "",
    role: "",
  });
  const router = useRouter();
  const HandlerSearch = () => {
    var objString = JSON.stringify(filterValue);
    alert(objString);
  };

  const handleAction = (action?: string, id?: any) => {
    switch (action) {
      case "view":
        router.push({ pathname: `${path}/${id}`, query: { action: "view" } });
        break;
      default:
        break;
    }
  };
  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table);
        return (
          <Box>
            <Checkbox
              indeterminate={table.getIsSomeRowsSelected()}
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
      accessorFn: (row: any) => row.sNO,
      id: "S.NO",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr.No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.userName,
      id: "userName",
      cell: (info: any) => info.getValue(),
      header: () => <span>User Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.role,
      id: "role",
      cell: (info: any) => info.getValue(),
      header: () => <span>Role</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.loginTime,
      id: "loginTime",
      cell: (info: any) => info.getValue(),
      header: () => <span>Login Time</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.activity,
      id: "activity",
      cell: (info: any) => info.getValue(),
      header: "Activity",
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="view"
            onClicked={() => handleAction("view", info.row.original.id)}
          />
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];

  return {
    TableDemoData,
    router,
    columns,
    setFilterValue,
    filterValue,
    HandlerSearch,
  };
};
