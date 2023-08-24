import { Box, Checkbox, Grid, Typography } from "@mui/material";
import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";

export default function OtherMaterialTable() {
  const data = [
    {
      sr_no: "1",
      item: "Legend of Narnia",
      attached: "PDF",
      notesOrComments: "04/19/2023",
      personUploaded: "Hairy Potter",
      password: "£46.00",
    },
    {
      sr_no: "2",
      item: "Ancient Diaries",
      attached: "JPG",
      notesOrComments: "04/21/2023",
      personUploaded: "Legion Commander",
      password: "£46.00",
    },
  ];

  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table.getSelectedRowModel().flatRows);
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
      accessorFn: (row: any) => row.sr_no,
      id: "Sr. NO",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.item,
      id: "item",
      cell: (info: any) => info.getValue(),
      header: () => <span>Item</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.attached,
      id: "Attached",
      cell: (info: any) => info.getValue(),
      header: () => <span>Attached</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.notesOrComments,
      id: "Notes or Comments",
      cell: (info: any) => info.getValue(),
      header: () => <span>Notes or Comments</span>,
    },
  ];

  return (
    <Grid container>
      <Grid item md={12}>
        <TableHeader hideSearch title="Other Materials" />
      </Grid>
      <CustomTable
        data={data}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        // count={Math.ceil(data?.data?.meta?.total / limit)}
        currentPage={1}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
      />{" "}
    </Grid>
  );
}
