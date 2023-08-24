import { Box, useTheme } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export const usePlacementSpecialNeedsAgreement = () => {
  const [isOpenPlacementSpecialNeedsModal, setIsOpenPlacementSpecialNeedsModal] = useState(false)
  const theme: any = useTheme();
  
  const onAddSpecialNeedsModalData = (data:any) =>{
console.log(data);

  }
  const SpecialNeedsAgreementColumns = [
    {
      accessorFn: (row: any) => row.specialNeedsAgreement,
      id: "specialNeedsAgreement",
      cell: (info: any) => info.getValue(),
      header: () => <span>Special Needs Agreement</span>,
    },
    {
      accessorFn: (row: any) => row.description,
      id: "description",
      cell: (info: any) => info.getValue(),
      header: () => <span>Description</span>,
    },
    {
      accessorFn: (row: any) => row.assignedToRole,
      id: "assignedToRole",
      cell: (info: any) => info.getValue(),
      header: () => <span>Assigned To (Role)</span>,
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
          <Image src={row.status} alt="Status Icon " />
        </Box>
      ),
      id: "status",
      cell: (info: any) => info.getValue(),
      header: () => <span>Status</span>,
    },
    {
      accessorFn: (row: any) => row.comments,
      id: "comments",
      cell: (info: any) => info.getValue(),
      header: () => <span>Comments</span>,
    },
  
  ];

  return {
    SpecialNeedsAgreementColumns,
    theme,isOpenPlacementSpecialNeedsModal, setIsOpenPlacementSpecialNeedsModal,onAddSpecialNeedsModalData
  };
};
