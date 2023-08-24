import React, { useRef, useState } from 'react'
import { useRouter } from 'next/router';
import {Box, Checkbox, useTheme } from '@mui/material'
import {TableData} from '.'
import {SELECT_FILTERS} from '.'
import TableAction from '@root/components/TableAction';
import DeleteModel from '@root/components/modal/DeleteModel';

// Styles
const styles = {
  tableAction: {
    display: "flex", gap: "5px", justifyContent: "center" 
  },
  assessmentform:{
    marginLeft:"40px",
    cursor:"pointer"
  }
}

export const useReferralSchemeTable = () => {
    const tableHeaderRefTwo = useRef<any>();
    const [IsDeleteModal, setIsDeleteModal] = useState(false)
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
        accessorFn: (row: any) => row.Referral_Type,
        id: "Referral_Type",
        cell: (info: any) => info.getValue(),
        header: () => <span>Referral Type</span>,
        isSortable: true,
      },
      {
        accessorFn: (row: any) => row.Fostering_Status,
        id: "Fostering_Status",
        cell: (info: any) => info.getValue(),
        header: () => <span>Fostering Status</span>,
        isSortable: true,
      },
      {
        accessorFn: (row: any) => row.Referral_Bonus,
        id: "Referral_Bonus",
        cell: (info: any) => info.getValue(),
        header: () => <span>Referral Bonus </span>,
        isSortable: true,
      },
      {
        accessorFn: (row: any) => row.Branch_Name,
        id: "Branch_Name",
        cell: (info: any) => info.getValue(),
        header: () => <span>Branch Name</span>,
        isSortable: true,
      },
      {
        id: "actions",
        cell: (info: any) => (
          <Box sx={styles.tableAction}>
            <TableAction type="edit" onClicked={() => router.push(`${router.pathname}/referral-scheme-edit-form`)} />
            <TableAction type="delete" onClicked={() => setIsDeleteModal(true) }/>
            <DeleteModel onDeleteClick={handleDelete} open={IsDeleteModal} handleClose={() => setIsDeleteModal(false)}/>
            <TableAction type="view" onClicked={() => router.push(`${router.pathname}/referral-scheme-view-form`)} /> 
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
  
    
  return {
    TableData,tableHeaderRefTwo,IsDeleteModal,setIsDeleteModal,router,theme,SELECT_FILTERS,columns
  }
}
