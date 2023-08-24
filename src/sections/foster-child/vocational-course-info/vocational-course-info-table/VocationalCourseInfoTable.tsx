import React, { useState } from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";
import { Box } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";

export default function VocationalCourseInfoTable(props: any) {
  const {
    tableData,
    meta,
    title,
    searchedText,
    apiStatus,
    onPageChange,
    route,
  } = props;
  const router = useRouter();
  const [open, setOpen] = useState<any>(false);
  const columns = [
    {
      accessorFn: (row: any) => row["courseType"],
      id: "courseType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Course Type</span>,
    },
    {
      accessorFn: (row: any) => row["duration"],
      id: "duration",
      cell: (info: any) => info.getValue(),
      header: () => <span>Duration</span>,
    },
    {
      accessorFn: (row: any) => row["qualification"],
      id: "qualification",
      cell: (info: any) => info.getValue(),
      header: () => <span>Qualification</span>,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="delete"
            onClicked={() => {
              setOpen(info.row.original);
              console.log("delete this", info.row.original);
              alert("delete");
            }}
            size="small"
          />
          <TableAction type="edit" onClicked={() => {}} size="small" />
          <TableAction
            type="view"
            onClicked={() => console.log(info)}
            size="small"
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];
  return (
    <>
      <DeleteModel
        open={!!open}
        handleClose={() => setOpen(false)}
        onDeleteClick={() => console.log("deleting", open)}
      />
      <TableHeader
        title={"Vocational Course Info"}
        onChanged={searchedText}
        showAddBtn={true}
        onAdd={() => router.push(route)}
      />
      <CustomTable
        data={tableData}
        columns={columns}
        isLoading={apiStatus?.isLoading}
        isFetching={apiStatus?.isFetching}
        isError={apiStatus?.isError}
        isSuccess={apiStatus?.isSuccess}
        showSerialNo
        currentPage={meta?.page}
        totalPages={meta?.pages}
        onPageChange={onPageChange}
      />
    </>
  );
}
