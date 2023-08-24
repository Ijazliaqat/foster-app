import { useState } from "react";
import TableAction from "@root/components/TableAction";
import { Box, Checkbox, useTheme } from "@mui/material";

// ===================================================================================

export const useUploadMeeting = () => {
  const theme = useTheme();

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [actionType, setActionType] = useState("");

  const UploadMeetingColumns = [
    {
      id: "select",
      header: ({ table, row }: any) => {
        return (
          <Box>
            <Checkbox checked={table.getIsAllRowsSelected()} onChange={table.getToggleAllRowsSelectedHandler()} />
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
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.meetingAgenda,
      id: "meetingAgenda",
      cell: (info: any) => info.getValue(),
      header: () => <span>Meeting Agenda</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.uploadedDate,
      id: "uploadedDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Uploaded Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.meetingFile,
      id: "meetingFile",
      cell: (info: any) => info.getValue(),
      header: () => <span>Meeting File</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="view"
            onClicked={() => {
              setIsAddModalOpen(true);
              setActionType("view");
            }}
          />
          <TableAction
            type="edit"
            onClicked={() => {
              setIsAddModalOpen(true);
              setActionType("edit")
            }}
          />
        </Box>
      ),
      header: () => <span>Action</span>,
      isSortable: false,
    },
  ];

  return {
    theme,
    UploadMeetingColumns,
    setIsAddModalOpen,
    isAddModalOpen,
    setActionType,
    actionType
  };
};
