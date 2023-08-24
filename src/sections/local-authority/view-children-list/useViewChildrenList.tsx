import { Box, Checkbox, useTheme } from '@mui/material';
import TableAction from '@root/components/TableAction';
import { useRouter } from 'next/router';
import React, { useRef } from 'react'
import { SELECT_FILTERS, TableData } from '.';
import Image from 'next/image'
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

const useViewChildrenList = () => {
    const tableHeaderRefTwo = useRef<any>();
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
            accessorFn: (row: any) => row.Image,
            id: "Image",
            cell: (info: any) => (
                <span >
                    <Image style={{ outline: "4px solid #FFFFFF", borderRadius: "30px" }} src={info.getValue()} width={40} height={40} alt="Picture" />
                </span>
            ),
            header: () => <span>Image</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Child_Id,
            id: "Child_Id",
            cell: (info: any) => info.getValue(),
            header: () => <span>Child ID</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Child_Name,
            id: "Child_Name",
            cell: (info: any) => info.getValue(),
            header: () => <span>Child Name</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Gender,
            id: "Gender",
            cell: (info: any) => info.getValue(),
            header: () => <span>Gender</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Local_Authority,
            id: "Local_Authority",
            cell: (info: any) => info.getValue(),
            header: () => <span>Local Authority</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.La_Social_Worker,
            id: "La_Social_Worker",
            cell: (info: any) => info.getValue(),
            header: () => <span>LA Social Worker</span>,
            isSortable: true,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={styles.tableAction}>
                    <TableAction type="view" onClicked={() => router.push(`${router.pathname}/view-children-list-form`)} />
                </Box>

            ),
            header: () => <span>actions</span>,
            isSortable: false,
        },
    ];

    return {
        TableData, tableHeaderRefTwo, router, theme, SELECT_FILTERS, columns
    }
}

export default useViewChildrenList