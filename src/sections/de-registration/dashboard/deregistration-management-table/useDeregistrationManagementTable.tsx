import { Box, Checkbox, useTheme } from '@mui/material';
import { useRouter } from 'next/router';
import React, { useRef, } from 'react'
import Image from 'next/image'
import { SELECT_FILTERS, } from '.';
import DeRegTableDropdown from './select-deregistartion-dropdown/DeRegTableDropdown';

export const useDeregistrationManagementTable = () => {
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
            header: () => <span>Sr.NO</span>,
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
            accessorFn: (row: any) => row.Carer_Code,
            id: "Carer_Code",
            cell: (info: any) => info.getValue(),
            header: () => <span>Carer code</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row,
            id: "Carer_Name",
            cell: (info: any) => <Box sx={{ cursor: "pointer" }} onClick={() => router.push({ pathname: `/de-registration/deregister-foster-carer`, query: { carer_name: info?.cell?.row?.original?.Carer_Name } })}>{info?.cell?.row?.original?.Carer_Name}</Box>,
            header: () => <span>Carer Name</span>,
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
            accessorFn: (row: any) => row.Area_Locality,
            id: "Area_Locality",
            cell: (info: any) => info.getValue(),
            header: () => <span>Area/Locality</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.Area_Office,
            id: "Area_Office",
            cell: (info: any) => info.getValue(),
            header: () => <span>Area Office</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any, index: number) => row.Dereg_Status,
            id: "Dereg_Status",
            cell: (info: any) => (
                <DeRegTableDropdown status={info.status} handleChange={(val: string) => console.log("==", val)} />
            ),



            header: () => <span>Dereg Status</span>,
            isSortable: true,
        },
    ];

    return {
        tableHeaderRefTwo, router, theme, SELECT_FILTERS, columns,
    }
}
