import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { tableData } from ".";
import { Box, Checkbox, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
import UploadDocumentModal from "./upload-document-form/UploadDocumentForm";

export const useUploadDocTable = (props: any) => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const theme = useTheme();
  const [cancelDelete, setCancelDelete] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [viewOpenModal, setViewOpenModal] = useState(false);

  const handleDelete = () => {
    alert("deleted successfully");
    setCancelDelete(!cancelDelete);
  };

  const onSubmit = () => {
    alert("data submitted");
    setOpenModal(!openModal);
  };

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
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="refresh"
            onClicked={() =>
              router.push({
                pathname: "",
                query: { action: "edit", id: "" },
              })
            }
          />
          <TableAction
            size="small"
            type="download"
            onClicked={() =>
              router.push({
                pathname: "",
                query: { action: "edit", id: "" },
              })
            }
          />
          {!props.disabled && (
            <TableAction
              size="small"
              type="delete"
              onClicked={() => setCancelDelete(!cancelDelete)}
            />
          )}

          <DeleteModel
            open={cancelDelete}
            onDeleteClick={handleDelete}
            handleClose={() => setCancelDelete(!cancelDelete)}
          />
          <TableAction
            size="small"
            type="view"
            onClicked={() => setViewOpenModal(!viewOpenModal)}
          />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];

  return {
    tableHeaderRefTwo,
    openModal,
    setOpenModal,
    onSubmit,
    tableData,
    columns,
    setViewOpenModal,
    viewOpenModal,
    theme,
  };
};
