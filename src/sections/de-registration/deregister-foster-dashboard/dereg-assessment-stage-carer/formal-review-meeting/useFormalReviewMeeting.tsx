import React,{ useRef,useState}  from 'react'
import { Box, Checkbox, useTheme } from '@mui/material';
import TableAction from '@root/components/TableAction';
import { DeRegAssessmentTableMockData, SelectFilter } from '.';

const useFormalReviewMeeting = () => {
    const [DeRegAssessmentTableData,setDeRegAssessmentTableData] = useState(DeRegAssessmentTableMockData);
    const [isOpenAddAssessment, setOpenAddAssessment] = useState(false);
    const [actionType, setActionType] = useState('Add');
    const [editData, setEditData] = useState<any>(null);

    const onHandleAddAssessment = (data: any) => {
      
      
    };
    const onHandleEditAssessment = (row: any) => {
      setOpenAddAssessment(true);
      setActionType('Edit');
      
      
    };
    
    const tableHeaderRef = useRef();
    const theme: any = useTheme();
    SelectFilter
    const DeRegAssessmentStageOneColumn = [
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
            header: () => <span>Sr.No</span>,

        },
        {
            accessorFn: (row: any) => row.meetingDateTime,
            id: "meetingDateTime",
            cell: (info: any) => info.getValue(),
            header: () => <span>Meeting Date/Time</span>,

        },
        {
            accessorFn: (row: any) => row.sWName,
            id: "sWName",
            cell: (info: any) => info.getValue(),
            header: () => <span>SW Name</span>,

        },
        {
            accessorFn: (row: any) => row.meetingAtendees,
            id: "meetingAtendees",
            cell: (info: any) => info.getValue(),
            header: () => <span>Meeting Attendees</span>,

        },
        {
            accessorFn: (row: any) => row.meetingOutcomes,
            id: "meetingOutcomes",
            cell: (info: any) => info.getValue(),
            header: () => <span>Meeting Outcomes</span>,

        },
        {
            accessorFn: (row: any) => row.meetingActions,
            id: "meetingActions",
            cell: (info: any) => info.getValue(),
            header: () => <span>Meeting Actions</span>,

        },
        {
            accessorFn: (row: any) => row.nextReviewplan,
            id: "nextReviewplan",
            cell: (info: any) => info.getValue(),
            header: () => <span>Next Review plan</span>,

        },
        
        {
            id: "actions",
            cell: (info: any) => (
                <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>

                    <TableAction
                        type="edit"
                        onClicked={() => onHandleEditAssessment(info?.row?.original) }
                        size="small"
                    />
                    <TableAction
                        type="view"
                        onClicked={() => {setOpenAddAssessment(true);setActionType("View") ; (info.row.id) }}
                        size="small"
                    />
                </Box>
            ),
            header: "Actions",
            isSortable: false,
        },

    ];

  return {
    DeRegAssessmentStageOneColumn,
    tableHeaderRef,theme,SelectFilter,
    isOpenAddAssessment, setOpenAddAssessment,
    actionType, setActionType,editData,
    DeRegAssessmentTableData,setDeRegAssessmentTableData,onHandleAddAssessment,onHandleEditAssessment

  }
}

export default useFormalReviewMeeting