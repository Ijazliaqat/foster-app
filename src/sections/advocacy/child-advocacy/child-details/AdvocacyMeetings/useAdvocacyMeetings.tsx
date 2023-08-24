import { yupResolver } from "@hookform/resolvers/yup";
import { Box, Checkbox, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import { useRouter } from "next/router";
import { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { uploadMeetingRecordingInitialValues, uploadMeetingRecordingSchema } from ".";

export const useAdvocacyMeetings = () => {
    const [isUploadModalOpen, setIsUploadModalOpen] = useState<boolean>(false);
    const [actionType, setActionType] = useState('add');

    const router = useRouter();
    const theme = useTheme();
    let tableHeaderRefThree = useRef<any>();

    const methods: any = useForm({
        resolver: yupResolver(uploadMeetingRecordingSchema),
        defaultValues: uploadMeetingRecordingInitialValues,
    });


    const { handleSubmit, reset } = methods;

    const onSubmit = (data: any) => {
        console.log('data', data);
        setIsUploadModalOpen(false);
        reset();
    }

    const meetingRecordingColumns = [
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
            accessorFn: (row: any) => row.date,
            id: "date",
            cell: (info: any) => info.getValue(),
            header: () => <span>Date</span>,
            isSortable: true
        },
        {
            accessorFn: (row: any) => row.attendees,
            id: "attendees",
            cell: (info: any) => info.getValue(),
            header: () => <span>Meeting Attendees</span>,
            isSortable: true
        },
        {
            accessorFn: (row: any) => row.meetingChair,
            id: "meetingChair",
            cell: (info: any) => info.getValue(),
            header: () => <span>Meeting Chair</span>,
            isSortable: true
        },
        {
            accessorFn: (row: any) => row.notes,
            id: "notes",
            cell: (info: any) => info.getValue(),
            header: () => <span>Meeting Notes</span>,
            isSortable: true
        },
        {
            accessorFn: (row: any) => row.meetingActions,
            id: "meetingActions",
            cell: (info: any) => info.getValue(),
            header: () => <span>Meeting Actions</span>,
            isSortable: true
        },
        {
            accessorFn: (row: any) => row.report,
            id: "report",
            cell: (info: any) => info.getValue(),
            header: () => <span>Report</span>,
            isSortable: true
        },
        {
            accessorFn: (row: any) => row.recording,
            id: "recording",
            cell: (info: any) => info.getValue(),
            header: () => <span>Meeting Recording</span>,
            isSortable: true
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                    <TableAction
                        type="view"
                        onClicked={() => { setIsUploadModalOpen(true); setActionType('view') }}
                    />
                    <TableAction
                        type="edit"
                        onClicked={() => { setIsUploadModalOpen(true); setActionType('edit') }}
                    />
                </Box>
            ),
            header: () => <span>actions</span>,
            isSortable: false,
        },
    ];

    return {
        meetingRecordingColumns,
        theme,
        router,
        tableHeaderRefThree,
        methods,
        handleSubmit,
        onSubmit,
        isUploadModalOpen,
        setIsUploadModalOpen,
        actionType,
        setActionType
    }
}