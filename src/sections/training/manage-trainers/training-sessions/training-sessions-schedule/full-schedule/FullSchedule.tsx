import CustomTable from "@root/components/Table/CustomTable";
import React from "react";
import { useTheme } from "@mui/material";
import { useFullSchedule } from "./useFullSchedule";
import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
const FullSchedule = () => {
  const { data, openDelete, setOpenDelete } = useFullSchedule();
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
      id: "Activity",
      cell: (info: any) => info.getValue(),
      header: () => <span>Activity</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.trainingTopic,
      id: "Type",
      cell: (info: any) => info.getValue(),
      header: () => <span>Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.manager,
      id: "Start",
      cell: (info: any) => info.getValue(),
      header: () => <span>Start</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.schedule,
      id: "End",
      cell: (info: any) => info.getValue(),
      header: () => <span>End</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.presenter,
      id: "Location",
      cell: (info: any) => info.getValue(),
      header: () => <span>Location</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.attendees,
      id: "Speakers",
      cell: (info: any) => info.getValue(),
      header: () => <span>Speaker(s)</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.budget,
      id: "Notes",
      cell: (info: any) => info.getValue(),
      header: () => <span>Notes</span>,
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

export default FullSchedule;
