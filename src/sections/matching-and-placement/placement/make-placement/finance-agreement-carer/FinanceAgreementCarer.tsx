import { Box, Button, Checkbox, FormControlLabel, Grid, TableCell, } from "@mui/material";
import React from "react";
import { useFinanceAgreementCarer } from "./useFinanceAgreementCarer";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import { financeAgreementCarerData } from ".";
import TableHeader from "@root/components/TableHeader";
import Image from "next/image";
import FinanceAgreementcarerAddModal from "./Modal/FinanceAgreementcarerAddModal";

const FinanceAgreementCarer = ({ handleIncreamentStep }: any) => {
    const { theme, isOpenFinanceAgreementWithcarerModal, setIsOpenFinanceAgreementWithcarerModal,
        onAddFinanceAgreementCarer } = useFinanceAgreementCarer();

    const columns = [

        {
            accessorFn: (row: any) => row.placementAgreement,
            id: "Placement Agreement / Receipts ",
            cell: (info: any) => info.getValue(),
            header: () => <span>Placement Agreement / Receipts </span>,
        },
        {
            accessorFn: (row: any) => <Image src={row.policy} alt=" Document Icon" />,
            id: "policy",
            cell: (info: any) => (
                <TableCell align="center">{info.getValue()}</TableCell>
            ),
            header: () => <span>Policy</span>,
        },
        {
            accessorFn: (row: any) => row.dateApproved,
            id: "Date Approved",
            cell: (info: any) => info.getValue(),
            header: () => <span>Date Approved</span>,
        },
        {
            accessorFn: (row: any) => row.agencyApproved,
            id: "agencyApproved",
            cell: (info: any) => info.getValue(),
            header: () => <span>Agency Approved by (Role)</span>,
        },
        {
            accessorFn: (row: any) => row.localAuthorityApproved,
            id: "LA Approved by (Role ) ",
            cell: (info: any) => info.getValue(),
            header: () => <span>LA Approved by (Role ) </span>,
        },
        {
            id: 'select',
            header: () => <span>Digital Signature</span>,
            cell: ({ row, table }: any) => (
                <TableCell align="center">
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
                </TableCell>
            ),
        },
    ];
    
    return (
        <>
        <Box sx={{ pt: 2 }}>
        <Box sx={{pl:2.5,pr:2.5}}>
            <TableHeader
                title="Finance Agreement with Carer"
                hideSearch
                showAddBtn
                onAdd={()=>setIsOpenFinanceAgreementWithcarerModal(true)}
            />
           </Box>
            <CustomTable
                data={financeAgreementCarerData}
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
                rootSX={{ my: theme.spacing(2), p:2.5 }}
            />
           <Box   ml={2.8} mb={2} mt={0}>
      <Button sx={styles.saveBtn} onClick={handleIncreamentStep}>Continue</Button>
    </Box>
        </Box>
        <FinanceAgreementcarerAddModal title='Finance Agrement With Carer' open={isOpenFinanceAgreementWithcarerModal} handleClose={()=>setIsOpenFinanceAgreementWithcarerModal(false)}
       onSubmit={onAddFinanceAgreementCarer}/>
        </>
    );
};

export default FinanceAgreementCarer;

const styles = {
    saveBtn: { backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2.2, py: 1, fontSize: "16px", fontWeight: 600 }
  };
  