import React, { useRef } from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import TableHeader from "@root/components/TableHeader";

const Documents = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const [data, setData] = React.useState([
    {
      srNo: 1,
      documentName: "Form Name",
      documenType: "PDF",
      documentDate: "19/03/2023",
      personUploaded: "Name Xame",
      password: "123abc",
    },
    {
      srNo: 2,
      documentName: "Form Name",
      documenType: "PDF",
      documentDate: "19/03/2023",
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
      accessorFn: (row: any) => row.documenType,
      id: "documenType",
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
          onClicked={() =>
            router.push(
              "/carer-info/personal-info/carer-chronology-of-events/annual-review"
            )
          }
        />
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <TableHeader ref={tableHeaderRefTwo} title="Upload Documents" />
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
      />
    </>
  );
};

export default Documents;
