import React from 'react'
import {useTheme} from '@mui/material';
export const SafguardingMeetingFormTableColumns = [
    {
      accessorFn: (row: any) => row.action,
      id: "action",
      cell: (info: any) => info.getValue(),
      header: () => <span>Action</span>,
    
    },
    {
      accessorFn: (row: any) => row.byWho,
      id: "byWho",
      cell: (info: any) => info.getValue(),
      header: () => <span>By Who</span>,
    
    },
    {
      accessorFn: (row: any) => row.byWhen,
      id: "byWhen",
      cell: (info: any) => info.getValue(),
      header: () => <span>By When</span>,
    
    },
    {
      accessorFn: (row: any) => row.reviewDate,
      id: "reviewDate",
      cell: (info: any) => info.getValue(),
      header: () => <span>Review Date</span>,
    
    },
   
  ];
export const useAddSafeguardingMeetingTable = () => {
    const theme: any = useTheme();
  return {
    theme
  }
}
