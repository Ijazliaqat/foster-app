import Image from "next/image";
import { useRef, useState } from "react";
import { Box, Checkbox, useTheme } from "@mui/material";
import TableAction from "@root/components/TableAction";
import DeleteModel from "@root/components/modal/DeleteModel";
export const useMandatoryTraining = () => {
    const [IsOpenMandatoryModal, setIsOpenMandatoryModal] = useState(false)
    const [IsOpenDeleteModal, setIsOpenDeleteModal] = useState(false)
    const [actionType, setActionType] = useState('Add');
    const tableHeaderRef = useRef();
    const theme: any = useTheme();

const handleAddMandatoryRecord =(data:any) =>{
  setIsOpenMandatoryModal(true);
  setActionType('Add');
}
const handleEditClicked =(data:any) =>{
  setIsOpenMandatoryModal(true);
  setActionType('Edit');
}
  const MandatoryTrainingColumns = [
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
        isSortable: true,
      },
        {
            accessorFn: (row: any) => row.carerName,
            id: "carerName",
            cell: (info: any) => info.getValue(),
            header: () => <span>Carer Name</span>,

        },
        {
            accessorFn: (row: any) => row.coursesAttended,
            id: "coursesAttended",
            cell: (info: any) => info.getValue(),
            header: () => <span>Courses Attended</span>,

        },
        {
            accessorFn: (row: any) => row.attendedDate,
            id: "attendedDate",
            cell: (info: any) => info.getValue(),
            header: () => <span>Attended Date</span>,
        },
        {
            id: "actions",
            cell: (info: any) => (
              <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
                <TableAction
                  size="small"
                  type="edit"
                  onClicked={() => handleEditClicked(info?.row?.original) }
                  
                />
             
                  <TableAction
                    size="small"
                    type="delete"
                    onClicked={() => setIsOpenDeleteModal(!IsOpenDeleteModal)}
                  />
                
      
                <DeleteModel
                  open={IsOpenDeleteModal}
                  onDeleteClick={IsOpenDeleteModal}
                  handleClose={() => setIsOpenDeleteModal(!IsOpenDeleteModal)}
                />
                <TableAction
                  size="small"
                  type="view"
                  onClicked={() => {setIsOpenMandatoryModal(true),setActionType('View')}}
                  
                />
              </Box>
            ),
            header: () => <span>actions</span>,
            isSortable: false,
          },
       
    ];

    return {
        MandatoryTrainingColumns,
        tableHeaderRef,
        theme,
        IsOpenMandatoryModal, setIsOpenMandatoryModal,actionType, setActionType,
        handleEditClicked,handleAddMandatoryRecord
       
    }
}
