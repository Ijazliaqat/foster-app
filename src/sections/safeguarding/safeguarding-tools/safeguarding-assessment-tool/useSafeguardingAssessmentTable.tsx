import React, { useRef, useState } from 'react'
import { useRouter } from 'next/router';
import { Box, Checkbox, useTheme } from '@mui/material'
import { TableData } from '.'
import TableAction from '@root/components/TableAction';
import Image from 'next/image';
import pdfDownload from "@root/assets/svg/safeguarding/pdfDownload.svg";
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


export const useSafeguardingAssessmentTable = () => {
    const tableHeaderRefTwo = useRef<any>();
    const [IsDeleteModal, setIsDeleteModal] = useState(false)
    const router = useRouter()

    const theme: any = useTheme();

    const handleDelete = () => {
        alert("deleted successfully")
        setIsDeleteModal(!IsDeleteModal)
    }

//  table column start here
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
            accessorFn: (row: any) => row.Assessment_Date,
            id: "Assessment_Date",
            cell: (info: any) => info.getValue(),
            header: () => <span>Assessment Date</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Child_Name,
            id: "Child_Name",
            cell: (info: any) => info.getValue(),
            header: () => <span>Child Name </span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Assessed_By,
            id: "Assessed_By",
            cell: (info: any) => info.getValue(),
            header: () => <span>Assessed By  (Role)</span>,
            isSortable: true,
        },
        {
            id: "Assessment_Form",
            cell: (info: any) => (
                <Box sx={styles.assessmentform}>
                    <Image src={pdfDownload} alt="pdf" />
                </Box>
            ),
            header: () => <span>Assessment Form</span>,
            isSortable: false,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={styles.tableAction}>
                    <TableAction type="view" onClicked={() => router.push(`${router.pathname}/view-safeguarding-assessment`)} />
                    <TableAction type="edit" onClicked={() => router.push(`${router.pathname}/edit-safeguarding-assessment`)} />
                    <TableAction type="delete" onClicked={() => setIsDeleteModal(true)} />
                    <DeleteModel onDeleteClick={handleDelete} open={IsDeleteModal} handleClose={() => setIsDeleteModal(false)} />

                </Box>

            ),
            header: () => <span>actions</span>,
            isSortable: false,
        },
    ];

    return {
        TableData,
        theme,
        router,
        tableHeaderRefTwo,
        setIsDeleteModal,
        IsDeleteModal,
        handleDelete,
        columns
    }
}