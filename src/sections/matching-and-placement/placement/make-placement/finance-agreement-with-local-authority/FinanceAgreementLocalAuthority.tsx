import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import { Box, Button, Grid } from "@mui/material";
import { FinanceAgreementLocalAuthData } from '.';
import { useFinanceAgreementLocalAuthority } from './useFinanceAgreementLocalAuthority';
import TableHeader from "@root/components/TableHeader";
import FinanceAgreementAddModal from './Modal/FinanceAgreementAddModal';




const FinanceAgreementLocalAuthority = ({handleIncreamentStep}: any) => {
  const {FinanceAgreementLocalAuthorityColumns,theme,isOpenFinanceAgreementModal, setIsOpenFinanceAgreementModal,onAddFinanceAgreementModal} = useFinanceAgreementLocalAuthority()


  return (
    <Grid container >
      <Grid item xs={12} mt={2}>
      <Box sx={{pl:2.5,pr:2.5}}>
       <TableHeader
        title="Finance Agreement with Local Authority"
        showAddBtn
        hideSearch
        onAdd={()=>setIsOpenFinanceAgreementModal(true)}
      />
      </Box>
        <CustomTable
          data={FinanceAgreementLocalAuthData}
          columns={FinanceAgreementLocalAuthorityColumns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          rootSX={{ my: theme.spacing(2),p:2.5 }}

        />
      </Grid>
      <Grid item xs={12}  ml={2.8} mb={2} mt={0}>
      <Button sx={styles.saveBtn} onClick={handleIncreamentStep}>Continue</Button>
          <FinanceAgreementAddModal title='Finance Agrement With Local Authority' open={isOpenFinanceAgreementModal} handleClose={()=>setIsOpenFinanceAgreementModal(false)}
       onSubmit={onAddFinanceAgreementModal}/>
    </Grid>
    </Grid>
  )
}

export default FinanceAgreementLocalAuthority

const styles = {
  saveBtn: { backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2.2, py: 1, fontSize: "16px", fontWeight: 600 }
};

