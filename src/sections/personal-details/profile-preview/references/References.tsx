import React from "react";
import { Typography, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";

const Rerefences = () => {
  const theme: any = useTheme();
  const [data, setData] = React.useState([
    {
      referenceType: "Character",
      referenceFullName: "John Snow",
      contactNo: "+449744165",
      emailId: "john@gmail.com",
      approvalStatus: "Pending",
      viewedOn: "09/04/2007",
      completedOn: "09/04/2007",
    },
  ]);

  const columns = [
    {
      accessorFn: (row: any) => row.referenceType,
      id: "referenceType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Reference Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.referenceFullName,
      id: "referenceFullName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Full name of the reference</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.contactNo,
      id: "contactNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Contact No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.emailId,
      id: "emailId",
      cell: (info: any) => info.getValue(),
      header: () => <span>Email ID</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.approvalStatus,
      id: "approvalStatus",
      cell: (info: any) => info.getValue(),
      header: () => <span>Approval Status</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.viewedOn,
      id: "viewedOn",
      cell: (info: any) => info.getValue(),
      header: () => <span>Ref. viewed on</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.completedOn,
      id: "completedOn",
      cell: (info: any) => info.getValue(),
      header: () => <span>Ref. completed on</span>,
      isSortable: true,
    },
  ];
  return (
    <>
      <Typography
        variant="h5"
        color={theme.palette.primary.main}
        sx={{ mb: 2 }}
        component="div"
      >
        About
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

export default Rerefences;
