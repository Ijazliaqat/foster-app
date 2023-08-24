import { Box, Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import DeleteModel from "@root/components/modal/DeleteModel";
import React, { useState } from "react";
import { useActiveSupervisingSocialWorkerTable } from "./useActiveSupervisingSocialWorkerTable";

export default function ActiveSupervisingSocialWorkerTable(props: any) {
  const { fosterChildId } = props;
  const [open, setOpen] = useState(false);
  const {
    router,
    tableHeaderRef,
    isLoading,
    headerChangeHandler,
    family,
    isFetching,
    isError,
    isSuccess,
    meta,
    pageChangeHandler,
  } = useActiveSupervisingSocialWorkerTable();
  const columns = [
    {
      accessorFn: (row: any) => row?.name,
      id: "name",
      cell: (info: any) => info.getValue(),
      header: "Social Worker Name",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.title,
      id: "title",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Social Worker Title",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.phoneNumber,
      id: "phoneNumber",
      cell: (info: any) => info.getValue() ?? "-",
      header: "Contact",
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          {/* Can move it outside of the table if need arises */}
          {/* <TableAction
            type="delete"
            onClicked={() => {
              console.log("delete this", info.row.original);
              setOpen(true);
            }}
            size="small"
          />

          <TableAction
            type="edit"
            onClicked={() =>
              router.push({
                pathname:
                  "/foster-child/education-records/study-support-info/edit-study-support-info",
                query: {
                  action: "edit",
                  schoolInfoId: info.row.original.id,
                  fosterChildId: fosterChildId,
                },
              })
            }
            size="small"
          /> */}
          <TableAction
            type="view"
            onClicked={() =>
              router.push({
                pathname:
                  "/foster-child/social-worker-details/supervising-social-worker/view-supervising-social-worker",
                query: {
                  action: "view",
                  id: info.row.original.id,
                  fosterChildId: fosterChildId,
                  worker: "Active",
                },
              })
            }
            size="small"
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];
  return (
    <Card sx={{ p: 2 }}>
      <DeleteModel
        open={open}
        handleClose={() => setOpen(false)}
        onDeleteClick={() => {}}
      />
      <TableHeader
        ref={tableHeaderRef}
        disabled={isLoading}
        title="Active Social Worker"
        searchKey="search"
        onChanged={headerChangeHandler}
      />
      <CustomTable
        data={family}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={meta?.page}
        totalPages={meta?.pages}
        showSerialNo
        onPageChange={pageChangeHandler}
      />
    </Card>
  );
}
