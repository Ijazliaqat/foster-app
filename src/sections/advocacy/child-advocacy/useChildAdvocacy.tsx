import { Box, Button, Checkbox, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import Image from "next/image";
import UserImg from "../../../assets/img/ifaAvatar.png";

export const useChildAdvocacy = () => {

    let [expand, setExpand] = useState(false);
    const [showChildStatistics, setShowChildStatistics] = useState<boolean>();

    const router = useRouter();
    const theme = useTheme();
    let tableHeaderRefThree = useRef<any>();
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
            isSortable: true
        },
        {
            accessorFn: (row: any) => row.photo,
            id: "photo",
            cell: (info: any) => <Box ><Image width={40} height={40} style={{ objectFit: "cover" }} src={UserImg} alt="" /></Box>,
            header: () => <span>Img</span>,
        },
        {
            accessorFn: (row: any) => row.childName,
            id: "childName",
            cell: (info: any) => info.getValue(),
            header: () => <span>Child Name</span>,
            isSortable: true
        },
        {
            accessorFn: (row: any) => row.fosterCarer,
            id: "fosterCarer",
            cell: (info: any) => info.getValue(),
            header: () => <span>Foster Carer</span>,
            isSortable: true
        },
        {
            accessorFn: (row: any) => row.locality,
            id: "locality",
            cell: (info: any) => info.getValue(),
            header: () => <span>Area/Locality</span>,
            isSortable: true
        },
        {
            accessorFn: (row: any) => row.gender,
            id: "gender",
            cell: (info: any) => info.getValue(),
            header: () => <span>Gender</span>,
            isSortable: true
        },
        {
            accessorFn: (row: any) => row.areaOffice,
            id: "areaOffice",
            cell: (info: any) => info.getValue(),
            header: () => <span>Area Office</span>,
            isSortable: true
        },
        {
            id: "actions",
            cell: (info: any) => (<Button type="button" variant="contained" onClick={() => router.push({ pathname: "/advocacy/child-advocacy/details", query: { id: info.row.original.id } })}>View Details</Button>
            ),
            header: () => <span>Details</span>,
            isSortable: false,
        },
    ];
    return {
        columns,
        theme,
        router,
        tableHeaderRefThree,
        expand,
        setExpand,
        showChildStatistics,
        setShowChildStatistics,
    }
}
