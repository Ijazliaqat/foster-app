import { Box, Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";
import React from "react";
import { useKidieeSavingTable } from "./useKidieeSavingTable";

export const KidieeSavingTable = (props: any) => {
  const router = useRouter();
  const { fosterChildId } = props;
  const {
    //   data,
      // isError,
      // isLoading,
      // isSuccess,
      // isFetching,
    headerChangeHandler,
    listDeleteHandler,
    pageChangeHandler,
    sortChangeHandler,
  } = useKidieeSavingTable();

const TableData = [
    {
      date: "12.11.2021",
      amount: "$10",
      category: "AA",
      comment: "Abc",
      total: "$10",
      subTotal: "$10, $10",
    },
  ];
  

  const columns = [
    {
      accessorFn: (row: any) => row?.date,
      id: "date",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.amount,
      id: "amount",
      cell: (info: any) => info.getValue(),
      header: () => <span>Amount</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.category,
      id: "category",
      cell: (info: any) => info.getValue(),
      header: () => <span>Category</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.comment,
      id: "comment",
      cell: (info: any) => info.getValue(),
      header: () => <span>Comment</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.total,
      id: "total",
      cell: (info: any) => info.getValue(),
      header: () => <span>Total</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.subTotal,
      id: "subTotal",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sub Total</span>,
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
                pathname: `/money-management/kidiee-saving/${info.getValue()}/edit`,
                // query: { fosterChildId: fosterChildId },
              })
            }
          />
          <TableAction
            type="view"
            onClicked={() =>
              router.push({
                pathname: `/money-management/kidiee-saving/add-kidiee-saving-form/${info.getValue()}/view`,
                // query: { fosterChildId: fosterChildId },
              })
            }
          />
          <DeletePrompt
            onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
          />
        </Box>
      ),
      header: () => <span>Actions</span>,
      isSortable: false,
    },
  ];



  return (
    <>
      <Card>
        <TableHeader
          showAddBtn
          title="Kidiee Saving"
          searchKey="search"
          onChanged={headerChangeHandler}
          onAdd={() =>
            router.push({
              pathname:"/money-management/kidiee-saving/add-kidiee-saving-form",
              // query: { fosterChildId: fosterChildId },
            })
          }
        />
        <CustomTable
        showSerialNo
           data={TableData}
           columns={columns}
           isLoading={false}
           isFetching={false}
           isError={false}
           isPagination={false}
           isSuccess={true}
           currentPage={1}
           onPageChange={pageChangeHandler}
           onSortByChange={sortChangeHandler}
        />
      </Card>
    </>
  );
};
