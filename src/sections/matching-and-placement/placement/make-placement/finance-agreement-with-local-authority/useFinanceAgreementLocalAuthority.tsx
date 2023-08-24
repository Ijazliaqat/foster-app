import { Box, Checkbox, FormControlLabel, useTheme } from "@mui/material";
import Image from "next/image";
import { useState } from "react";

export const useFinanceAgreementLocalAuthority = () => {
  const [isOpenFinanceAgreementModal, setIsOpenFinanceAgreementModal] = useState(false)
  const theme: any = useTheme();
   const onAddFinanceAgreementModal = (data:any) =>{
    console.log(data);
    
   }
  const FinanceAgreementLocalAuthorityColumns = [
    {
      accessorFn: (row: any) => row.placementAgreementReceipts,
      id: "placementAgreementReceipts",
      cell: (info: any) => info.getValue(),
      header: () => <span>Placement Agreement/Receipts</span>,
    },
    {
      accessorFn: (row: any) =>  <Box sx={styles.ImgBoxStyled}><Image src={row.policy} alt="Document Icon " /></Box> ,
      id: "policy",
      cell: (info: any) => info.getValue(),
      header: () => <span>Policy</span>,
    },
    {
      accessorFn: (row: any) => row.dateApproved,
      id: "dateApproved",
      cell: (info: any) => info.getValue(),
      header: () => <span>Date Approved</span>,
    },
    {
      accessorFn: (row: any) => row.agencyApprovedByRole,
      id: "agencyApprovedByRole",
      cell: (info: any) => info.getValue(),
      header: () => <span> Agency Approved by (Role)</span>,
    },
    {
      accessorFn: (row: any) => row.LaApprovedByRole,
      id: "LaApprovedByRole",
      cell: (info: any) => info.getValue(),
      header: () => <span>LA Approved by (Role)</span>,
    },
    {
      id: 'digitalSignature',
      header: () => <span>Digital Signature</span>,
      cell: ({ row, table }: any) => (
          <Box sx={{display:'flex',justifyContent:"start",alignItems:'start',marginLeft:'80px'}}>
              <FormControlLabel 
                  control={
                      <Checkbox  
                          disabled={row?.original?.Assigned}
                          checked={row?.original?.Assigned ? false : row.getIsSelected()}
                          onChange={row.getToggleSelectedHandler()}
                      />
                  }
                  label={row.original.digitalSignature}
              />
          </Box>
      ),
  },
   
  ];

  return {
    FinanceAgreementLocalAuthorityColumns,
    theme,isOpenFinanceAgreementModal, setIsOpenFinanceAgreementModal,onAddFinanceAgreementModal
  };
};

// style
const styles = {
  ImgBoxStyled: { 
   display:'flex',
   justifyContent:'center',
   alignItems:'center', 
  },
}
