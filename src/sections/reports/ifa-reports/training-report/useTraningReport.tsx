import { useState } from "react";
import { TableDemoData } from ".";
import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";

export const useTrainingReport = () => {
  const [cancelDelete, setCancelDelete] = useState(false);
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
      header: () => <span>S.No#</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.traineeName,
      id: "traineeName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Trainee Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.trainingSessionTitle,
      id: "trainingSessionTitle",
      cell: (info: any) => info.getValue(),
      header: () => <span>Training Session Title</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.courseStatus,
      id: "courseStatus",
      cell: (info: any) => info.getValue(),
      header: () => <span>Course Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.assessmentStatus,
      id: "assessmentStatus",
      cell: (info: any) => info.getValue(),
      header: "Assessment Status",
      isSortable: true,
    },

    {
      id: "actions",
      cell: (info: any) => (
        <TableAction
          size="small"
          type="download"
          onClicked={() => alert("Download")}
        />
      ),
      header: "Action",
      isSortable: false,
    },
  ];
  const handleDelete = () => {
    alert("deleted successfully");
    setCancelDelete(!cancelDelete);
  };
  return {
    TableDemoData,
    handleDelete,
    columns,
  };
};
