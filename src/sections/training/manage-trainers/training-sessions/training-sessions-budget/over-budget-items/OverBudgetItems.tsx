import CustomTable from "@root/components/Table/CustomTable";
import React from "react";
import { useTheme } from "@mui/material";
import { useOverBudgetItems } from "./useOverBudgetItems";
import { Box, Checkbox } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
const OverBudgetItems = () => {
  const { data, openDelete, setOpenDelete } = useOverBudgetItems();
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
      id: "Item",
      cell: (info: any) => info.getValue(),
      header: () => <span>Item</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.trainingTopic,
      id: "Estimated",
      cell: (info: any) => info.getValue(),
      header: () => <span>Estimated</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.manager,
      id: "Actual",
      cell: (info: any) => info.getValue(),
      header: () => <span>Actual</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.schedule,
      id: "Quantity",
      cell: (info: any) => info.getValue(),
      header: () => <span>Quantity</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.presenter,
      id: "Total Cost",
      cell: (info: any) => info.getValue(),
      header: () => <span>Total Cost</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.manager,
      id: "Total Budget",
      cell: (info: any) => info.getValue(),
      header: () => <span>Total Budget</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.schedule,
      id: "Under Budget",
      cell: (info: any) => info.getValue(),
      header: () => <span>Under Budget</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.presenter,
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

export default OverBudgetItems;
