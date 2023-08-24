import React from "react";
import { Typography, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";

const BankDetailsTable = () => {
  const theme: any = useTheme();
  const [data, setData] = React.useState([
    {
      userName: "John Christ",
      bankName: "Foster",
      sortCode: "35416",
      accountNumber: "2524521452",
      accountType: "2545878525",
    },
  ]);

  const columns = [
    {
      accessorFn: (row: any) => row.userName,
      id: "userName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Account User Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.bankName,
      id: "bankName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Bank Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.sortCode,
      id: "sortCode",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sort Code</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.accountNumber,
      id: "accountNumber",
      cell: (info: any) => info.getValue(),
      header: () => <span>Account Number</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.accountType,
      id: "accountType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Account Type</span>,
      isSortable: true,
    },
  ];
  return (
    <>
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 2, mt: 3 }}
        component="div"
      >
        Bank Details
      </Typography>
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
    </>
  );
};

export default BankDetailsTable;
