import React from "react";
import { Box, Checkbox } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import UploadDocumentModal from "@root/components/modal/UploadDocumentModal/UploadDocumentModal";
import { useUploadDocument } from "./useUploadDocument";

export default function UploadDocument() {
  const {
    openDelete, 
    openDeleteFunc,
    tableHeaderRefTwo,
    openModal,
    openModalFunc,
    uploadModalDisabled,
    uploadModalDisabledFunc,
    theme,
    data,
  } = useUploadDocument();

  const columns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        console.log(table.getSelectedRowModel().flatRows);
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
      accessorFn: (row: any) => row.srNo,
      id: "Sr.No",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr.No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.documentName,
      id: "Document Name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.docuementType,
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
      accessorFn: (row: any) => row.actions,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction type="refresh" onClicked={() => alert("Reload")} />
          <TableAction type="download" onClicked={() => alert("Download")} />
          <TableAction type="delete" onClicked={() => openDeleteFunc(true)} />
          <TableAction
            type="view"
            onClicked={() => {
              uploadModalDisabledFunc("view");
            }}
          />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return (
    <React.Fragment>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Uploaded Documents"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          uploadModalDisabledFunc("add");
        }}
      />
      <CustomTable
        data={data}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
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
      <DeleteModel
        open={openDelete}
        handleClose={() => openDeleteFunc(false)}
        onDeleteClick={() => openDeleteFunc(false)}
      />
      <UploadDocumentModal
        disabled={uploadModalDisabled}
        isHideSubmitButton={!uploadModalDisabled}
        open={openModal}
        handleClose={() => {
          openModalFunc(false);
        }}
      />
    </React.Fragment>
  );
}
