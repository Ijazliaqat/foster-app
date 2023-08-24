import { Box, Checkbox, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import { useRef, useState, } from "react";
import { useForm } from "react-hook-form";
import { defaultValues } from ".";
import Image from "next/image";
import UserImg from "../../../assets/img/ifaAvatar.png";


export const useReferralHistory = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const handleNextTab = () => setCurrentTab(currentTab + 1);
    const router = useRouter();
    const theme = useTheme();
    let tableHeaderRefThree = useRef<any>();

    const methods: any = useForm({
        defaultValues,
    });

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
            accessorFn: (row: any) => row.photo,
            id: "photo",
            cell: (info: any) => <Box sx={{ borderRadius: "50px" }}><Image width={40} height={40} style={{ borderRadius: "50px", objectFit: "cover" }} src={UserImg} alt="" /></Box>,
            header: () => <span>Photo</span>,
        },
        {
            accessorFn: (row: any) => row.refereeName,
            id: "refereeName",
            cell: (info: any) => info.getValue(),
            header: () => <span>Referee Name</span>,
        },
        {
            accessorFn: (row: any) => row.refereeType,
            id: "refereeType",
            cell: (info: any) => info.getValue(),
            header: () => <span>Referee Type</span>,
        },
        {
            accessorFn: (row: any) => row.referralDate,
            id: "referralDate",
            cell: (info: any) => info.getValue(),
            header: () => <span>Referral Date</span>,
        },
        {
            accessorFn: (row: any) => row.referredBy,
            id: "referredBy",
            cell: (info: any) => info.getValue(),
            header: () => <span>Referred By</span>,
        },
        {
            accessorFn: (row: any) => row.referrerRole,
            id: "referrerRole",
            cell: (info: any) => info.getValue(),
            header: () => <span>Referrer Role</span>,
        },
        {
            accessorFn: (row: any) => row.availability,
            id: "availability",
            cell: (info: any) => info.getValue(),
            header: () => <span>Availability</span>,
        },
        {
            accessorFn: (row: any) => row.refereeStatus,
            id: "refereeStatus",
            cell: (info: any) => info.getValue(),
            header: () => <span>Referee Status</span>,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                    <TableAction
                        type="view"
                        onClicked={() => router.push("/referral/referral-history/referral-history-form")}
                    // onClicked={() =>console.log(info,'info')}
                    />
                </Box>
            ),
            header: () => <span>actions</span>,
            isSortable: false,
        },
    ];

    return {
        columns,
        theme,
        router,
        tableHeaderRefThree,
        methods,
        currentTab,
        handleNextTab,
        setCurrentTab
    };
};
