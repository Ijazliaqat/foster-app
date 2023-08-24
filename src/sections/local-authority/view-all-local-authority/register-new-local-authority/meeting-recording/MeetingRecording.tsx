import React from "react";
import { Box, Checkbox } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { meetingRecordingData } from ".";
import { useMeetingRecording } from "./useMeetingRecording";
import AddMeetingRecording from "./add-meeting-recording/AddMeetingRecording";

const MeetingRecording = () => {
    const { theme, isAddModalOpen, setIsAddModalOpen, actionType, setActionType, route } = useMeetingRecording();

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
            accessorFn: (row: any) => row.no,
            id: "Sr. No",
            cell: (info: any) => info.getValue(),
            header: () => <span>Sr. No</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.meetingAgenda,
            id: "Meeting Agenda",
            cell: (info: any) => info.getValue(),
            header: () => <span>Meeting Agenda</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.uploadedDate,
            id: "Uploaded Date",
            cell: (info: any) => info.getValue(),
            header: () => <span>Uploaded Date</span>,
            isSortable: true,
        },
        {
            accessorFn: (row: any) => row.meetingFile,
            id: "Meeting File",
            cell: (info: any) => info.getValue(),
            header: () => <span>Meeting File</span>,
            isSortable: true,
        },
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                    <TableAction type="view" onClicked={() => { setIsAddModalOpen(true); setActionType('view') }} />
                    {route.query.action !== 'view-local-authority' && <TableAction type="edit" onClicked={() => { setIsAddModalOpen(true); setActionType('edit') }} />}
                </Box>
            ),
            header: () => <span>actions</span>,
            isSortable: false,
        },
    ];


    return (
        <>
            <TableHeader
                title={''}
                showAddBtn={route.query.action !== 'view-local-authority' && true}
                onAdd={() => { setIsAddModalOpen(true); setActionType('add') }}
            />
            <CustomTable
                data={meetingRecordingData}
                columns={columns}
                isLoading={false}
                isFetching={false}
                isError={false}
                isSuccess={true}
                currentPage={1}
                onPageChange={(data: any) => {
                    console.log("Current page data: ", data);
                }}
                onSortByChange={(data: any) => {
                    console.log("Sort by: ", data);
                }}
                rootSX={{ my: theme.spacing(2) }}
            />
            <AddMeetingRecording isAddModalOpen={isAddModalOpen} setIsAddModalOpen={setIsAddModalOpen} actionType={actionType} />
        </>
    );
}
export default MeetingRecording;