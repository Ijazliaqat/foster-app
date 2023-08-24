import React from "react";
import dayjs from "dayjs";
import { Box, Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { useDocumentationTable } from "./useDocumentationTable";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import TableAction from "@root/components/TableAction";

export default function ClaDocumentationListTable(prop: any) {
  const { fosterChildId } = prop;
  console.log(fosterChildId, "my Data");
  const {
    router,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    data,
    isError,
    isLoading,
    isSuccess,
    isFetching,
    listDeleteHandler,
  } = useDocumentationTable();

  console.log("data", data);

  const columns = [
    // {
    //   accessorFn: (row: any) => row,
    //   id: "srNo",
    //   cell: (info: any) => Number(info?.row?.id) + 1,
    //   header: "Sr. No",
    // },
    {
      accessorFn: (row: any) => row.createdAt,
      id: "createdAt",
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY"),
      header: "Date",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.document,
      id: "document",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Document",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.documentType,
      id: "documentType",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Document Type",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="edit"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/child-background-info/cla-documentation/${info.getValue()}/edit`,
                query: { fosterChildId: fosterChildId },
              })
            }
          />
          <DeletePrompt
            onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push({
                pathname: `/foster-child/child-background-info/cla-documentation/${info.getValue()}`,
                query: { fosterChildId: fosterChildId },
              })
            }
            // onClicked={() =>
            //   router.push(
            //     `/foster-child/child-background-info/cla-documentation/${info.getValue()}`
            //   )
            // }
          />
          <TableAction
            type="share"
            onClicked={() => router.push(`?${info.getValue()}`)}
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        showAddBtn
        title="CLA Documentation"
        searchKey="search"
        onChanged={headerChangeHandler}
        onAdd={() =>
          router.push({
            pathname: `/foster-child/child-background-info/cla-documentation/add-cla-documentation`,
            query: { fosterChildId: fosterChildId },
          })
        }
      />
      <CustomTable
        showSerialNo
        data={data?.data}
        columns={columns}
        isSuccess={isSuccess}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        currentPage={data?.meta?.page}
        totalPages={data?.meta?.pages}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </Card>
  );
}
