import { Box, Checkbox, useTheme } from '@mui/material';
import TableAction from '@root/components/TableAction';
import { useRouter } from 'next/router';
import React, { useRef } from 'react'
import { TableData } from '.';
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

export const useLocalAuthorityTable = () => {
    const tableHeaderRefTwo = useRef<any>();
    const router = useRouter();
    const pathname = `/local-authority/local-authority-tab/view-all-local-authority/register-local-authority`
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
            accessorFn: (row: any) => row.LA_No,
            id: "LA_No",
            cell: (info: any) => info.getValue(),
            header: () => <span>LA No</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.LA_Name,
            id: "LA_Name",
            cell: (info: any) => info.getValue(),
            header: () => <span>LA Name</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Primary_Contact,
            id: "Primary_Contact",
            cell: (info: any) => info.getValue(),
            header: () => <span>Primary Contact</span>,
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
            id: "actions",
            cell: (info: any) => (
                <Box sx={styles.tableAction}>
                    <TableAction type="view" onClicked={() => router.push({ pathname: pathname, query: { action: 'view-local-authority' } })} />
                </Box>

            ),
            header: () => <span>actions</span>,
            isSortable: false,
        },
    ];

    return {
        TableData, tableHeaderRefTwo, router, theme, columns, pathname
    }
}
