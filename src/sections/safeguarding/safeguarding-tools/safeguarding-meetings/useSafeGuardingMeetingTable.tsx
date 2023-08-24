import React, { useRef } from 'react'
import { Box, Checkbox,useTheme} from "@mui/material";
import Image from "next/image";
import EditIcon from  '../../../../assets/svg/safeguarding/EditIcon.svg'
import Link from 'next/link';
import { useRouter } from 'next/router';


export const SafeguardingTableColumns = [
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
    accessorFn: (row: any) => row.meetingTitle,
    id: "meetingTitle",
    cell: (info: any) => info.getValue(),
    header: () => <span>Meting Title</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.meetingDate,
    id: "meetingDate",
    cell: (info: any) => info.getValue(),
    header: () => <span>Meeting Date</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.meetingLocation,
    id: "meetingLocation",
    cell: (info: any) => info.getValue(),
    header: () => <span>Meeting Location</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.meetingAttendence,
    id: "meetingAttendence",
    cell: (info: any) => info.getValue(),
    header: () => <span>Meeting Attendence (role)</span>,
    isSortable: true,
  },
  {
    accessorFn: (row: any) => row.document,
    id: "document",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <Image src={require('../../../../assets/svg/safeguarding/PDFDownloadIcon.svg')} width={20} height={24} alt="PDFDownloadIcon"/>
      </Box>
    ),
    header: () => <span>Meeting Doc</span>,
    isSortable: true,
  },
  {
    id: "actions",
    cell: (info: any) => (
      <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
        <Link href="/safeguarding/safeguarding-tools/safeguarding-meetings/edit-safeguarding-meetings">
       <Image src={EditIcon} alt="EditIcon" width={24} height={24}/>
       </Link>
      </Box>
    ),
    header: () => <span>actions</span>,
    isSortable: false,
  },

];
export const useSafeGuardingMeetingTable = () => {
    const tableHeaderRef = useRef();
    const theme: any = useTheme();
    let router = useRouter();
  return {
    tableHeaderRef,
    theme,
    router

  }
}
