import { Box, useTheme } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export const usePlacementMeetingRecord = () => {
  const [isOpenPlacementMeetingModal, setIsOpenPlacementMeetingModal] = useState(false)
  const theme: any = useTheme();
   const onAddPlacementMeetingRecord = (data:any) =>{
    console.log(data);
    
   }
  const PlacementMeetingRecordColumns = [
    {
      accessorFn: (row: any) => row.meetingAgenda,
      id: "meetingAgenda",
      cell: (info: any) => info.getValue(),
      header: () => <span>Meeting Agenda</span>,
    },
    {
      accessorFn: (row: any) => row.attendees,
      id: "attendees",
      cell: (info: any) => info.getValue(),
      header: () => <span>attendees</span>,
    },
    {
      accessorFn: (row: any) => row.meetingDate,
      id: "meetingDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Meeting Date</span>,
    },
    {
      accessorFn: (row: any) => row.meetingMinutes,
      id: "meetingMinutes",
      cell: (info: any) => info.getValue(),
      header: () => <span>Meeting Minutes</span>,
    },
    {
      accessorFn: (row: any) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={row.videoAudioMemo} alt="Audio Icon " />
        </Box>
      ),
      id: "videoAudioMemo",
      cell: (info: any) => info.getValue(),
      header: () => <span>Video/Audio Memo</span>,
    },
    {
      accessorFn: (row: any) => row.actions,
      id: "actions",
      cell: (info: any) => info.getValue(),
      header: () => <span>Actions</span>,
    },
    {
      accessorFn: (row: any) => (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image src={row.outcome} alt="Audio Icon " />
        </Box>
      ),
      id: "outcome",
      cell: (info: any) => info.getValue(),
      header: () => <span>Outcome</span>,
    },
  ];

  return {
    PlacementMeetingRecordColumns,
    theme,isOpenPlacementMeetingModal, setIsOpenPlacementMeetingModal,onAddPlacementMeetingRecord
  };
};
