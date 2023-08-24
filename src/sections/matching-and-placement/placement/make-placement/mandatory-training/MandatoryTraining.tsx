import React from 'react'
import CustomTable from '@root/components/Table/CustomTable';
import { Box, Button, Grid } from "@mui/material";
import {Mandatorydata } from '.';
import { useMandatoryTraining } from './useMandatoryTraining';
import TableHeader from "@root/components/TableHeader";
import MandatoryModal from './Modal/MandatoryModal';




const MandatoryTraining = ({ handleIncreamentStep }: any) => {
  const {MandatoryTrainingColumns,theme,
    IsOpenMandatoryModal, setIsOpenMandatoryModal,actionType,setActionType,
    handleEditClicked,handleAddMandatoryRecord
  } = useMandatoryTraining()


  return (
    <Grid container >
      <Grid item xs={12} mt={2}>
      <MandatoryModal
         title={actionType === 'Add' ? 'Add Mandatory Record' : actionType === 'edit' ? 'Edit Mandatory Record' : 'View Mandatory Record'}
          open={IsOpenMandatoryModal}
          handleClose={() => setIsOpenMandatoryModal(false)}
          SubmitBtnText={actionType === "Edit" ? "Update" : "Submit"}
          disabled={actionType === 'View'}
          isHideSubmitButton={actionType === 'View' }
          onSubmit={actionType === 'Add' ? (data: any) => handleAddMandatoryRecord(data) :  (data: any) => handleEditClicked(data) }
        />

       <Box sx={{pl:2.5,pr:2.5}}>
       <TableHeader 
        title="Mandatory Training"
        showAddBtn
        hideSearch
        onAdd={()=>{setIsOpenMandatoryModal(true); setActionType('Add')}}
      />
      </Box>
        <CustomTable
          data={Mandatorydata}
          columns={MandatoryTrainingColumns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          rootSX={{ my: theme.spacing(2), p:2.5}}

        />
      </Grid>
      <Grid item xs={12}  ml={2.8} mb={2} mt={0}>
      <Button sx={styles.saveBtn} onClick={handleIncreamentStep}>Continue</Button>
    </Grid>
    </Grid>
  )
}

export default MandatoryTraining

const styles = {
  saveBtn: { backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2.2, py: 1, fontSize: "16px", fontWeight: 600 }
};
