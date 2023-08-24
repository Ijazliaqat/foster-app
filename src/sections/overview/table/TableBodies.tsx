/* eslint-disable react-hooks/rules-of-hooks */
import { Box, Checkbox, Grid, Typography, useTheme } from "@mui/material";
import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import { createColumnHelper } from "@tanstack/react-table";
import TableAction from "@root/components/TableAction";
import CustomEditableTable from "@root/components/Table/CustomEditableTable";
import DynamicTable from "@root/components/Table/DynamicTable";

export const TableBodies = () => {
  const theme: any = useTheme();

  // ----------------------------------------------------------------------
  const [data, setData] = React.useState([
    {
      u_id: "U4721XBUCA",
      user: "Sijo Francis",
      a_id: "A4821MNOHO",
      TotalDbsFee: "£40.00",
      TotalAdminFees: "£06.00",
      TotalPaid: "£46.00",
      cancelled: "no",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
    {
      u_id: "U4721XBUCA",
      user: "Sijo Francis",
      a_id: "A4821MNOHO",
      TotalDbsFee: "£40.00",
      TotalAdminFees: "£06.00",
      TotalPaid: "£46.00",
      cancelled: "no",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
  ]);

  const columns = [
    {
      accessorFn: (row: any) => row.u_id,
      id: "U-ID",
      cell: (info: any) => info.getValue(),
      header: () => <span>U-ID</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.user,
      id: "user",
      cell: (info: any) => info.getValue(),
      header: () => <span>USER</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.a_id,
      id: "A-ID",
      cell: (info: any) => info.getValue(),
      header: () => <span>A-ID</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.a_id,
      id: "Actions",
      cell: (info: any) => info.getValue(),
      header: () => <span>Actions</span>,
    },
  ];

  return (
    <Grid container>
      <Grid xs={12} item>
        <Typography variant="h4">Table default </Typography>

        <CustomTable
          data={data}
          columns={columns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isPagination={false}
          isSuccess={true}
          // count={Math.ceil(data?.data?.meta?.total / limit)}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
          rootSX={{ my: theme.spacing(2) }}
        />
      </Grid>
    </Grid>
  );
};

export const TableWithActionBtns = () => {
  const theme: any = useTheme();

  // ----------------------------------------------------------------------
  const [data, setData] = React.useState([
    {
      u_id: "U4721XBUCA",
      user: "Sijo Francis",
      a_id: "A4821MNOHO",
      TotalDbsFee: "£40.00",
      TotalAdminFees: "£06.00",
      TotalPaid: "£46.00",
      cancelled: "no",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
    {
      u_id: "U4721XBUCA",
      user: "Sijo Francis",
      a_id: "A4821MNOHO",
      TotalDbsFee: "£40.00",
      TotalAdminFees: "£06.00",
      TotalPaid: "£46.00",
      cancelled: "no",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
  ]);
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
      accessorFn: (row: any) => row.u_id,
      id: "U-ID",
      cell: (info: any) => info.getValue(),
      header: () => <span>U-ID</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.user,
      id: "user",
      cell: (info: any) => info.getValue(),
      header: () => <span>USER</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.a_id,
      id: "A-ID",
      cell: (info: any) => info.getValue(),
      header: () => <span>A-ID</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.a_id,
      id: "Actions",
      cell: (info: any) => info.getValue(),
      header: () => <span>Actions</span>,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="edit" onClicked={() => alert("Edit")} />
          <TableAction type="delete" onClicked={() => alert("Delete")} />
          <TableAction type="view" onClicked={() => alert("View")} />
          <TableAction type="download" onClicked={() => alert("Download")} />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return (
    <Grid container>
      <Grid xs={12} item>
        <Typography variant="h4">Table With Action Btns</Typography>

        <CustomTable
          data={data}
          columns={columns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isPagination={false}
          isSuccess={true}
          // count={Math.ceil(data?.data?.meta?.total / limit)}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
          rootSX={{ my: theme.spacing(2) }}
        />
      </Grid>
    </Grid>
  );
};

export function TableWithCheckBox() {
  const theme: any = useTheme();
  const [data, setData] = React.useState([
    {
      u_id: "U4721XBUCA",
      user: "Sijo Francis",
      a_id: "A4821MNOHO",
      TotalDbsFee: "£40.00",
      TotalAdminFees: "£06.00",
      TotalPaid: "£46.00",
      cancelled: "no",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
    {
      u_id: "U4721XBUCA",
      user: "Sijo Francis",
      a_id: "A4821MNOHO",
      TotalDbsFee: "£40.00",
      TotalAdminFees: "£06.00",
      TotalPaid: "£46.00",
      cancelled: "no",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
  ]);
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
      accessorFn: (row: any) => row.u_id,
      id: "U-ID",
      cell: (info: any) => info.getValue(),
      header: () => <span>U-ID</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.user,
      id: "user",
      cell: (info: any) => info.getValue(),
      header: () => <span>USER</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.a_id,
      id: "A-ID",
      cell: (info: any) => info.getValue(),
      header: () => <span>A-ID</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.a_id,
      id: "Actions",
      cell: (info: any) => info.getValue(),
      header: () => <span>Actions</span>,
    },
  ];
  return (
    <Grid container>
      <Grid xs={12} item>
        <Typography variant="h4">Table with CheckBox</Typography>

        <CustomTable
          data={data}
          columns={columns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          isPagination={false}
          // count={Math.ceil(data?.data?.meta?.total / limit)}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
          rootSX={{ my: theme.spacing(2) }}
        />
      </Grid>
    </Grid>
  );
}
export function TableWithLoading() {
  const theme: any = useTheme();
  const [data, setData] = React.useState([
    {
      u_id: "U4721XBUCA",
      user: "Sijo Francis",
      a_id: "A4821MNOHO",
      TotalDbsFee: "£40.00",
      TotalAdminFees: "£06.00",
      TotalPaid: "£46.00",
      cancelled: "no",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
    {
      u_id: "U4721XBUCA",
      user: "Sijo Francis",
      a_id: "A4821MNOHO",
      TotalDbsFee: "£40.00",
      TotalAdminFees: "£06.00",
      TotalPaid: "£46.00",
      cancelled: "no",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
  ]);
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
      accessorFn: (row: any) => row.u_id,
      id: "U-ID",
      cell: (info: any) => info.getValue(),
      header: () => <span>U-ID</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.user,
      id: "user",
      cell: (info: any) => info.getValue(),
      header: () => <span>USER</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.a_id,
      id: "A-ID",
      cell: (info: any) => info.getValue(),
      header: () => <span>A-ID</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.a_id,
      id: "Actions",
      cell: (info: any) => info.getValue(),
      header: () => <span>Actions</span>,
    },
  ];
  return (
    <Grid container>
      <Grid xs={12} item>
        <Typography variant="h4">Table isloading State</Typography>

        <CustomTable
          data={[]}
          columns={columns}
          isLoading={true}
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
          rootSX={{ my: theme.spacing(2) }}
        />
      </Grid>
    </Grid>
  );
}
export function TableWithfatching() {
  const theme: any = useTheme();
  const [data, setData] = React.useState([
    {
      u_id: "U4721XBUCA",
      user: "Sijo Francis",
      a_id: "A4821MNOHO",
      TotalDbsFee: "£40.00",
      TotalAdminFees: "£06.00",
      TotalPaid: "£46.00",
      cancelled: "no",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
    {
      u_id: "U4721XBUCA",
      user: "Sijo Francis",
      a_id: "A4821MNOHO",
      TotalDbsFee: "£40.00",
      TotalAdminFees: "£06.00",
      TotalPaid: "£46.00",
      cancelled: "no",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
  ]);
  const columns = [
    {
      accessorFn: (row: any) => row.u_id,
      id: "U-ID",
      cell: (info: any) => info.getValue(),
      header: () => <span>U-ID</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.user,
      id: "user",
      cell: (info: any) => info.getValue(),
      header: () => <span>USER</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.a_id,
      id: "A-ID",
      cell: (info: any) => info.getValue(),
      header: () => <span>A-ID</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.a_id,
      id: "Actions",
      cell: (info: any) => info.getValue(),
      header: () => <span>Actions</span>,
    },
  ];
  return (
    <Grid container>
      <Grid xs={12} item>
        <Typography variant="h4">Table fetching State</Typography>

        <CustomTable
          data={data}
          columns={columns}
          isLoading={false}
          isFetching={true}
          isPagination={false}
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
          rootSX={{ my: theme.spacing(2) }}
        />
      </Grid>
    </Grid>
  );
}
export function TableWithPagenation() {
  const theme: any = useTheme();

  const [data, setData] = React.useState([
    {
      u_id: "U4721XBUCA",
      user: "Sijo Francis",
      a_id: "A4821MNOHO",
      TotalDbsFee: "£40.00",
      TotalAdminFees: "£06.00",
      TotalPaid: "£46.00",
      cancelled: "no",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
    {
      u_id: "U4721XBUCA",
      user: "Sijo Francis",
      a_id: "A4821MNOHO",
      TotalDbsFee: "£40.00",
      TotalAdminFees: "£06.00",
      TotalPaid: "£46.00",
      cancelled: "no",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
  ]);
  const columns = [
    {
      accessorFn: (row: any) => row.u_id,
      id: "U-ID",
      cell: (info: any) => info.getValue(),
      header: () => <span>U-ID</span>,
    },
    {
      accessorFn: (row: any) => row.user,
      id: "user",
      cell: (info: any) => info.getValue(),
      header: () => <span>USER</span>,
    },
    {
      accessorFn: (row: any) => row.a_id,
      id: "A-ID",
      cell: (info: any) => info.getValue(),
      header: () => <span>A-ID</span>,
    },
    {
      accessorFn: (row: any) => row.a_id,
      id: "Actions",
      cell: (info: any) => info.getValue(),
      header: () => <span>Actions</span>,
    },
  ];
  return (
    <Grid container>
      <Grid xs={12} item>
        <Typography variant="h4">Table with pagination</Typography>

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
          rootSX={{ my: theme.spacing(2) }}
        />
      </Grid>
    </Grid>
  );
}
export function TableWithNoData() {
  const theme: any = useTheme();

  const [data, setData] = React.useState([
    {
      u_id: "U4721XBUCA",
      user: "Sijo Francis",
      a_id: "A4821MNOHO",
      TotalDbsFee: "£40.00",
      TotalAdminFees: "£06.00",
      TotalPaid: "£46.00",
      cancelled: "no",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
    {
      u_id: "U4721XBUCA",
      user: "Sijo Francis",
      a_id: "A4821MNOHO",
      TotalDbsFee: "£40.00",
      TotalAdminFees: "£06.00",
      TotalPaid: "£46.00",
      cancelled: "no",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
  ]);
  const columns = [
    {
      accessorFn: (row: any) => row.u_id,
      id: "U-ID",
      cell: (info: any) => info.getValue(),
      header: () => <span>U-ID</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.user,
      id: "user",
      cell: (info: any) => info.getValue(),
      header: () => <span>USER</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.a_id,
      id: "A-ID",
      cell: (info: any) => info.getValue(),
      header: () => <span>A-ID</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.a_id,
      id: "Actions",
      cell: (info: any) => info.getValue(),
      header: () => <span>Actions</span>,
    },
  ];
  return (
    <Grid container>
      <Grid xs={12} item>
        <Typography variant="h4">Table With No Data</Typography>

        <CustomTable
          data={[]}
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
          rootSX={{ my: theme.spacing(2) }}
        />
      </Grid>
    </Grid>
  );
}
export const EditableTable = () => {
  const theme: any = useTheme();

  // ----------------------------------------------------------------------
  const [data, setData] = React.useState(() => [
    {
      u_id: "U4721XBUCA",
      user: "Sijo Francis",
      a_id: "A4821MNOHO",
      TotalDbsFee: "£40.00",
      TotalAdminFees: "£06.00",
      TotalPaid: "£46.00",
      cancelled: "no",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
    {
      u_id: "U4721XBUCA",
      user: "Sijo Francis",
      a_id: "A4821MNOHO",
      TotalDbsFee: "£40.00",
      TotalAdminFees: "£06.00",
      TotalPaid: "£46.00",
      cancelled: "no",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
  ]);
  console.log(data);

  const columns = [
    {
      accessorFn: (row: any) => row.u_id,
      id: "u_id",
      header: () => <span>U-ID</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.user,
      id: "user",

      header: () => <span>USER</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.a_id,
      id: "a_id",
      header: () => <span>A-ID</span>,
      isSortable: true,
    },
  ];
  const [columnsDataS, setColumnsDataS] = React.useState(columns);
  return (
    <Grid container>
      <Grid xs={12} item>
        <Typography variant="h4">Editable Table </Typography>

        <CustomEditableTable
          data={data}
          setData={setData}
          setColumns={setColumnsDataS}
          columns={columnsDataS}
          isLoading={false}
          isFetching={false}
          isError={false}
          isPagination={false}
          editable={true}
          isSuccess={true}
          // count={Math.ceil(data?.data?.meta?.total / limit)}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
          rootSX={{ my: theme.spacing(2) }}
        />
      </Grid>
    </Grid>
  );
};
export const DynamicEditTable = () => {
  const theme: any = useTheme();

  // ----------------------------------------------------------------------
  const [data, setData] = React.useState(() => [
    {
      u_id: "U4721XBUCA",
      user: "Sijo Francis",
      a_id: "A4821MNOHO",
      TotalDbsFee: "£40.00",
      TotalAdminFees: "£06.00",
      TotalPaid: "£46.00",
      cancelled: "no",
      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
    {
      u_id: "U4721XBUCA",
      user: "Sijo Francis",
      a_id: "A4821MNOHO",
      TotalDbsFee: "£40.00",
      TotalAdminFees: "£06.00",
      TotalPaid: "£46.00",
      cancelled: "no",

      CancelledBy: "10-02-2022 14:23:03",
      CancelledAt: "Ani Cristea",
    },
  ]);
  console.log(data);

  const columns = [
    {
      typeof: "text",
      accessorFn: (row: any) => row.u_id,
      id: "u_id",
      header: () => <span>U-ID</span>,
      isSortable: true,
      lable: "id",
    },
    {
      typeof: "text",
      accessorFn: (row: any) => row.user,
      id: "user",

      header: () => <span>USER</span>,
      isSortable: true,
      lable: "USER",
    },
    {
      typeof: "text",
      accessorFn: (row: any) => row.a_id,
      id: "a_id",
      header: () => <span>A-ID</span>,
      isSortable: true,
      lable: "A-ID",
    },
  ];
  const [columnsDataS, setColumnsDataS] = React.useState(columns);
  return (
    <Grid container>
      <Grid xs={12} item>
        <Typography variant="h4">dynamic Table </Typography>

        <DynamicTable
          data={data}
          setData={setData}
          setColumns={setColumnsDataS}
          columns={columnsDataS}
          isLoading={false}
          isFetching={false}
          isError={false}
          isPagination={false}
          editable={true}
          isSuccess={true}
          // count={Math.ceil(data?.data?.meta?.total / limit)}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
          rootSX={{ my: theme.spacing(2) }}
        />
      </Grid>
    </Grid>
  );
};
