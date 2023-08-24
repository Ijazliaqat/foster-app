import CustomTable from "@root/components/Table/CustomTable";
import React from "react";
import { useTheme } from "@mui/material";
import { useUnconfirmedSpeakers } from "./useUnconfirmedSpeakers";
import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
const UnconfirmedSpeakers = () => {
  const { data, openDelete, setOpenDelete } = useUnconfirmedSpeakers();
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
      accessorFn: (row: any) => row.date,
      id: "Name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.trainingTopic,
      id: "Company",
      cell: (info: any) => info.getValue(),
      header: () => <span>Company</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.manager,
      id: "Role",
      cell: (info: any) => info.getValue(),
      header: () => <span>Role</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.schedule,
      id: "Email",
      cell: (info: any) => info.getValue(),
      header: () => <span>Email</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.presenter,
      id: "Phone",
      cell: (info: any) => info.getValue(),
      header: () => <span>Phone</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.attendees,
      id: "Confirmed",
      cell: (info: any) => info.getValue(),
      header: () => <span>Confirmed?</span>,
      isSortable: true,
    },
  
  ];
  return (
    <div style={{overflow: "scroll"}}>
    <CustomTable
      data={data}
      columns={columns}
      isLoading={false}
      isFetching={false}
      isError={false}
      isPagination={false}
      isSuccess={true}
      currentPage={1}
      onPageChange={(data: any) => {
        console.log("Current page data: ", data);
      }}
      onSortByChange={(data: any) => {
        console.log("Sort by: ", data);
      }}
      rootSX={{ my: theme.spacing(2) }}
    />
    <DeleteModel
      open={openDelete}
      handleClose={() => setOpenDelete(false)}
      onDeleteClick={() => setOpenDelete(false)}
    />
  </div>
  );
};

export default UnconfirmedSpeakers;
