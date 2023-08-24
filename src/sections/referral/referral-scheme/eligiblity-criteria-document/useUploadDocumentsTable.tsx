
import React, { useRef, useState } from 'react'
import { useRouter } from 'next/router';
import { Box, Checkbox, useTheme } from '@mui/material'
import { TableData } from '.'
import TableAction from '@root/components/TableAction';
import DeleteModel from '@root/components/modal/DeleteModel';

// Styles
const styles = {
  tableAction: {
    display: "flex", gap: "5px", justifyContent: "center"
  },
}

export const useUploadDocumentsTable = (props: any) => {

  const tableHeaderRefTwo = useRef<any>();
  const [IsDeleteModal, setIsDeleteModal] = useState(false)
  const [isModalType, setIsModalType] = useState({ type: "", value: "" })
  const router = useRouter()
  const theme: any = useTheme();

  // table column start here
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
      accessorFn: (row: any) => row.Sr_No,
      id: "Sr_No",
      cell: (info: any) => info.getValue(),
      header: () => <span>S.NO</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.Document_Name,
      id: "Document_Name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.Document_Type,
      id: "Document_Type",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.Document_Date,
      id: "Document_Date",
      cell: (info: any) => info.getValue(),
      header: () => <span>Document Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.Person_Uploaded,
      id: "Person_Uploaded",
      cell: (info: any) => info.getValue(),
      header: () => <span>Person Uploaded</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.Password,
      id: "Password",
      cell: (info: any) => info.getValue(),
      header: () => <span>Password</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={styles.tableAction}>
          <TableAction type="refresh" onClicked={() => alert("")} />
          <TableAction type="download" onClicked={() => alert()} />
          {!props.disabled && <TableAction type="delete" onClicked={() => setIsDeleteModal(true)} />}
          <DeleteModel onDeleteClick={handleDelete} open={IsDeleteModal} handleClose={() => setIsDeleteModal(false)} />
          <TableAction size="small" type="view" onClicked={() => setIsModalType({ ...isModalType, type: "view", value: "" })} />
        </Box>

      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  const handleDelete = () => {
    alert("deleted successfully")
    setIsDeleteModal(!IsDeleteModal)
  }
  const onSubmit = () => {
    alert("submit successfully")
    setIsModalType({ type: "", value: "" })
  }


  return {
    TableData, tableHeaderRefTwo, IsDeleteModal, setIsDeleteModal, router, theme, columns, isModalType, setIsModalType, onSubmit
  }

}
