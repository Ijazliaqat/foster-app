import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Box, Checkbox, MenuItem, Select, TextField, useTheme } from "@mui/material";

export const useCarerNotifications = () => {

    const [selectedIds, setSelectedIds] = useState<any>([]);


    const handleActiveDeactive = (event: any, rowId: any) => {
        if (event.target.checked) {
            setSelectedIds([...selectedIds, rowId])
        }
        else {
            setSelectedIds(selectedIds.filter((id: any) => id !== rowId))
        }
    }

    const router = useRouter();
    const theme = useTheme();
    let tableHeaderRefThree = useRef<any>();
    const columns = [
        {
            id: "select",
            header: () => <span>Active / Deactive</span>,
            cell: (info: any) => (
                <Box>
                    <Checkbox onChange={(e: any) => handleActiveDeactive(e, info.row.original.id)} checked={selectedIds.includes(info.row.original.id)} />
                </Box>
            ),
        },
        {
            accessorFn: (row: any) => row.formName,
            id: "formName",
            cell: (info: any) => <span style={{ color: selectedIds.includes(info.row.original.id) ? theme.palette.mode : "#898989" }}>{info.getValue()}</span>,
            header: () => <span>Form Name</span>,
        },
        {
            accessorFn: (row: any) => row.photo,
            id: "photo",
            cell: (info: any) => <Box display="flex">
                <TextField size="small" defaultValue={2} sx={{ maxWidth: "60px", marginRight: "10px" }} disabled={selectedIds.includes(info.row.original.id) ? false : true} />
                <Select name='advocacyRequirement' size='small' defaultValue="days" disabled={selectedIds.includes(info.row.original.id) ? false : true}>
                    <MenuItem value="days">Day(s)</MenuItem>
                    <MenuItem value="months">Month(s)</MenuItem>
                </Select></Box>,
            header: () => <span>Advance Notification</span>,
        },
        {
            accessorFn: (row: any) => row.childName,
            id: "childName",
            cell: (info: any) => <Box display="flex">
                <TextField size="small" defaultValue={2} sx={{ maxWidth: "60px", marginRight: "10px" }} disabled={selectedIds.includes(info.row.original.id) ? false : true} />
                <Select name='advocacyRequirement' size='small' defaultValue="days" disabled={selectedIds.includes(info.row.original.id) ? false : true}>
                    <MenuItem value="days">Day(s)</MenuItem>
                    <MenuItem value="months">Month(s)</MenuItem>
                </Select></Box>,
            header: () => <span>Frequency</span>,
        },
        {
            accessorFn: (row: any) => row.fosterCarer,
            id: "fosterCarer",
            cell: (info: any) => <Checkbox disabled={selectedIds.includes(info.row.original.id) ? false : true} />,
            header: () => <span>SocialWorker Notified</span>,
        },
        {
            accessorFn: (row: any) => row.locality,
            id: "locality",
            cell: (info: any) => <Checkbox disabled={selectedIds.includes(info.row.original.id) ? false : true} />,
            header: () => <span>Carer Notified</span>,
        },
        {
            accessorFn: (row: any) => row.gender,
            id: "gender",
            cell: (info: any) => <Select name='advocacyRequirement' size='small' defaultValue="select" disabled={selectedIds.includes(info.row.original.id) ? false : true}>
                <MenuItem value="select">Select</MenuItem>
                <MenuItem value="days">Days</MenuItem>
            </Select>,
            header: () => <span>Select User</span>,
        },
        {
            accessorFn: (row: any) => row.areaOffice,
            id: "areaOffice",
            cell: (info: any) => <TextField size="small" placeholder="Email" disabled={selectedIds.includes(info.row.original.id) ? false : true} />,
            header: () => <span>Additional Email</span>,
        },
    ];
    return {
        columns,
        theme,
        router,
        tableHeaderRefThree,
    }
}
