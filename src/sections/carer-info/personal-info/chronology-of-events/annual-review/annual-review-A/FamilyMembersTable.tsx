import { Box, Typography, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { useRef } from "react";

const FamilyMembersTable = () => {
  const theme: any = useTheme();
  const tableHeaderRefTwo = useRef<any>();
  const [data, setData] = React.useState([
    {
      name: "",
      dob: "",
      relation: "",
      livingHome: "",
    },
    {
      name: "",
      dob: "",
      relation: "",
      livingHome: "",
    },
  ]);

  const columns = [
    {
      accessorFn: (row: any) => row.name,
      id: "name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.dob,
      id: "dob",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date of Birth</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.relation,
      id: "relation",
      cell: (info: any) => info.getValue(),
      header: () => <span>Relation</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.livingHome,
      id: "livingHome",
      cell: (info: any) => info.getValue(),
      header: () => <span>Is Living at Home</span>,
      isSortable: true,
    },
  ];
  return (
    <Box>
      <Typography
        variant="subtitle2"
        sx={{ mb: 2, color: theme.palette.grey[600] }}
      >
        Household Compostions/Household Members:
      </Typography>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Existing Family Members Details"
      />
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
        onPageChange={(data: any) => {}}
        onSortByChange={(data: any) => {}}
      />
    </Box>
  );
};

export default FamilyMembersTable;
