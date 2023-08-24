import { useRef, useState } from "react";
import { Box, Checkbox, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import { TableData } from ".";
import DeleteModel from "@root/components/modal/DeleteModel";

export const useChildFamilyRelatives = () => {
  const tableHeaderRefTwo = useRef<any>();
  const router = useRouter();
  const theme = useTheme();
  const [cancelDelete, setCancelDelete] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openForm, setOpenForm] = useState(false);

  const handleDelete = () => {
    setCancelDelete(!cancelDelete);
  };

  const columns = [
    {
      accessorFn: (row: any) => row.srNo,
      id: "srNo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Sr.No</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.name,
      id: "name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.relationship,
      id: "relationship",
      cell: (info: any) => info.getValue(),
      header: () => <span>Relationship</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.contactNumber,
      id: "contactNumber",
      cell: (info: any) => info.getValue(),
      header: () => <span>Contact Number</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.parentalResposibility,
      id: "parentalResposibility",
      cell: (info: any) => info.getValue(),
      header: () => <span>Parental Resposibilityr</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="view"
            onClicked={() => setOpenForm(true)}
          />
          <TableAction
            size="small"
            type="edit"
            onClicked={() => setOpenForm(true)}
          />
          <TableAction size="small" type="delete" onClicked={handleDelete} />
          <DeleteModel
            open={cancelDelete}
            handleClose={() => setCancelDelete(false)}
            onDeleteClick={handleDelete}
          />
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
    openForm,
    setOpenForm,
  };
};
