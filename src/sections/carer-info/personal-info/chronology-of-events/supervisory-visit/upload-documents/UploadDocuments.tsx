import { Box, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";
import React from "react";
import { useRef } from "react";

const UploadDocuments = () => {
  const tableHeaderRefTwo = useRef<any>();
  const theme: any = useTheme();
  const router = useRouter();
  const [data, setData] = React.useState([
    {
      srNo: 1,
      documentName: "Form Name",
      documentType: "PDF",
      documentDate: "19/05/2023",
      personUploaded: "Name Xame",
      password: "123abc",
    },
    {
      srNo: 2,
      documentName: "Form Name",
      documentType: "PDF",
      documentDate: "19/05/2023",
      personUploaded: "Name Xame",
      password: "123abc",
    },
  ]);

  const columns = [
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentName,
      id: "documentName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentType,
      id: "documentType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentDate,
      id: "documentDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.personUploaded,
      id: "personUploaded",
      cell: (info: any) => info.getValue(),
      header: () => <span>Person Uploaded</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.password,
      id: "password",
      cell: (info: any) => info.getValue(),
      header: () => <span>Password</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <TableAction
          size="small"
          type="view"
          onClicked={() => alert("hello")}
        />
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <Box sx={{ mb: 1 }}>
        <TableHeader ref={tableHeaderRefTwo} title="Uploaded Documents" />
      </Box>
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

export default UploadDocuments;
