import React, { useRef, useState } from 'react'
import { useRouter } from 'next/router';
import { Box, Checkbox, useTheme } from '@mui/material'
import { TableData } from '.'
import { SELECT_FILTERS } from '.'
import TableAction from '@root/components/TableAction';
import DeleteModel from '@root/components/modal/DeleteModel';
import { EmployeeDirectoryModal } from './employee-directory-modal';


// Styles
const styles = {
    tableAction: {
        display: "flex", gap: "5px", justifyContent: "center"
    },
    assessmentform: {
        marginLeft: "40px",
        cursor: "pointer"
    }
}

export const useLaEmployeeDirectory = () => {
    const tableHeaderRefTwo = useRef<any>();
    const [IsDeleteModal, setIsDeleteModal] = useState(false)
    const [modalType, setModalType] = useState({ value: "", type: "" })
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
            accessorFn: (row: any) => row.Employee_Name,
            id: "Employee_Name",
            cell: (info: any) => info.getValue(),
            header: () => <span>Employee Name</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.La_Name,
            id: "La_Name",
            cell: (info: any) => info.getValue(),
            header: () => <span>LA Name</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Designation,
            id: "Designation",
            cell: (info: any) => info.getValue(),
            header: () => <span>Designation</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Reporting_Manager,
            id: "Reporting_Manager",
            cell: (info: any) => info.getValue(),
            header: () => <span>Reporting Manager</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Phone,
            id: "Phone",
            cell: (info: any) => info.getValue(),
            header: () => <span>Phone</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Email,
            id: "Email",
            cell: (info: any) => info.getValue(),
            header: () => <span>Email</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Address,
            id: "Address",
            cell: (info: any) => info.getValue(),
            header: () => <span>Address</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.La_Children,
            id: "La_Children",
            cell: (info: any) => info.getValue(),
            header: () => <span>LA Children</span>,
            isSortable: true,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={styles.tableAction}>
                    <TableAction type="delete" onClicked={() => setIsDeleteModal(true)} />
                    <DeleteModel onDeleteClick={handleDelete} open={IsDeleteModal} handleClose={() => setIsDeleteModal(false)} />
                    <TableAction type="edit" onClicked={() => router.push(`${router.pathname}/edit-local-authority-employee`)} />
                    <TableAction type="add" onClicked={() => setModalType({ ...modalType, value: "", type: "add" })} />
                    <EmployeeDirectoryModal open={modalType.type} handleClose={() => { setModalType({ type: "", value: "" }); }} />


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
        TableData, tableHeaderRefTwo, IsDeleteModal, setIsDeleteModal, router, theme, SELECT_FILTERS, columns
    }
}
