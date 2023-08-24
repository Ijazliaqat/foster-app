import { useRef, useState } from "react";
import { Box, Checkbox, FormControlLabel, Typography, useTheme } from "@mui/material";
import { useRouter } from "next/router";
import Image from "next/image";
import UserImg from "../../../../assets/svg/placement/user.png";
import HighPriorityIcon from "../../../../assets/svg/placement/high.svg";
import LowPriorityIcon from "../../../../assets/svg/placement/low.svg";

export const usePlacementDashboard = () => {
    const router = useRouter();
    const theme = useTheme();
    const [isTaskModalOpen, setIsTaskModalOpen] = useState<any>(false)
    let tableHeaderRefThree = useRef<any>();

    const columns = [
        {
            id: "select",
            cell: ({ row, table }: any) => (
                <Box>
                    <FormControlLabel control={<Checkbox
                        disabled={row?.original?.Assigned}
                        checked={row?.original?.Assigned ? false : row.getIsSelected()}
                        onChange={row.getToggleSelectedHandler()}
                    />} label={row.original.task} />
                </Box>
            ),
        },
        {
            accessorFn: (row: any) => row.priority,
            id: "priority",
            cell: ({ row }: any) =>
                <Box display="flex" alignItems="center" gap={1}>
                    {row.original.priority === "High" ?
                        <Image src={HighPriorityIcon} alt="" /> :
                        <Image src={LowPriorityIcon} alt="" />}
                    <Typography fontSize="14px" fontWeight={500} color={row.original.priority === "High" ? "#D30B0B" : "#33BC03"}>{row.original.priority}</Typography>
                </Box>,
        },
        {
            accessorFn: (row: any) => row.priority,
            id: "priority",
            cell: (info: any) => <Box ><Image width={40} height={40} style={{ objectFit: "cover" }} src={UserImg} alt="" /></Box>,
        },
        {
            accessorFn: (row: any) => row.date,
            id: "date",
            cell: (info: any) => info.getValue()
        },
    ];

    const handleClose = () => {
        setIsTaskModalOpen(false)
    }

    return {
        columns,
        theme,
        router,
        tableHeaderRefThree,
        isTaskModalOpen,
        handleClose,
        setIsTaskModalOpen
    }
}
