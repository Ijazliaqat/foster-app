import { useRef, useState } from "react";
import { Box, Checkbox, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import PDF from "../../../../../assets/img/local authority/pdficon.png";
import Image from "next/image";
import { TableData } from ".";
import DeleteModel from "@root/components/modal/DeleteModel";
import UploadDocumentModal from "@root/components/modal/UploadDocumentModal/UploadDocumentModal";

export const useAdditionalDocuments = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const theme = useTheme();
  const [cancelDelete, setCancelDelete] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openEditModal, setOpenEditModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const handleDelete = () => {
    setCancelDelete(!cancelDelete);
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
      header: () => <span>Sr.No</span>,
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
      accessorFn: (row: any) => row.date,
      id: "date",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.document,
      id: "document",
      cell: (info: any) => (
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Image src={PDF} alt="pdf Icon" />
        </Box>
      ),
      header: () => <div>Document</div>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="view"
            onClicked={() => setViewModal(true)}
          />
          {viewModal && (
            <UploadDocumentModal
              disabled
              open={viewModal}
              handleClose={() => setViewModal(false)} 
            />
          )}
          <TableAction
            size="small"
            type="edit"
            onClicked={() => setOpenEditModal(true)}
          />
          {openEditModal && (
            <UploadDocumentModal
              open={openEditModal}
              handleClose={() => setOpenEditModal(false)}
              isHideSubmitButton={true}
            />
          )}
          <TableAction size="small" type="delete" onClicked={handleDelete} />
          {cancelDelete && (
            <DeleteModel
              open={cancelDelete}
              handleClose={() => setCancelDelete(false)}
              onDeleteClick={handleDelete}
            />
          )}
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return {
    tableHeaderRefTwo,
    router,
    TableData,
    columns,
    theme,
    openModal,
    setOpenModal,
  };
};
