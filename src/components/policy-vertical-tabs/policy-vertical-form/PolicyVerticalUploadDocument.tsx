import { Box, Button, Checkbox, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";
import React, { useState } from "react";

const PolicyVerticalUploadDocument = (props: any) => {
  const {
    data,
    handleSubmit,
    isUploadBackBtn,
    addUploadDocument,
    handleBackBtn,
    handleDelete,
    handleView,
  } = props;
  const theme = useTheme();
  const route = useRouter();
  console.log(route.query.action);

  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => { 
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
      accessorFn: (row: any) => row.no,
      id: "Sr. No",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr. No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentName,
      id: "Title",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentType,
      id: "Document Type",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentDate,
      id: "Document Date",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.personUploaded,
      id: "Person Uploaded",
      cell: (info: any) => info.getValue(),
      header: () => <span>Person Uploaded</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.password,
      id: "Password",
      cell: (info: any) => info.getValue(),
      header: () => <span>Password</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box display={"flex"} gap={0.5}>
          <TableAction type={"download"} />
          {route.query.action !== "view" && (
            <TableAction type={"delete"} onClicked={handleDelete} />
          )}
          <TableAction
            type={"view"}
            onClicked={() => {
              handleView();
            }}
          />
        </Box>
      ),
      header: () => <span>actions</span>,
    },
  ];

  return (
    <>
      <TableHeader
        title="Uploaded Documents"
        showAddBtn={route.query.action !== "view" ? true : false}
        onAdd={addUploadDocument}
      />
      <CustomTable
        data={data}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
        rootSX={{ my: theme.spacing(2) }}
      />
      <Box>
        {route.query.action !== "view" && (
          <Button
            type="submit"
            variant="contained"
            sx={{ mr: 2 }}
            onClick={handleSubmit}
          >
            Submit
          </Button>
        )}
        {isUploadBackBtn && (
          <Button
            sx={{
              backgroundColor: "#F6830F",
              "&:hover": { backgroundColor: "#F6830F" },
            }}
            type="button"
            variant="contained"
            onClick={handleBackBtn}
          >
            Back
          </Button>
        )}
      </Box>
    </>
  );
};

export default PolicyVerticalUploadDocument;
