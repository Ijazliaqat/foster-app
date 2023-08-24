import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import { Box, Button, Grid } from "@mui/material";
import { SpecialNeedsAgreementData } from ".";
import { usePlacementSpecialNeedsAgreement } from "./usePlacementSpecialNeedsAgreement";
import TableHeader from "@root/components/TableHeader";
import PlacementSpecialNeedsAgreementModal from "./Modal/PlacementSpecialNeedsAgreementModal";

const PlacementSpecialNeedsAgreement = ({handleIncreamentStep}: any) => {
  const {
    SpecialNeedsAgreementColumns,
    theme,
    isOpenPlacementSpecialNeedsModal, setIsOpenPlacementSpecialNeedsModal,
    onAddSpecialNeedsModalData,
  } = usePlacementSpecialNeedsAgreement();

  return (
    <Grid container>
      <Grid item xs={12} mt={2}>
      <Box sx={{pl:2.5,pr:2.5}}>
        <TableHeader
          title="Placement Special Needs Agreement"
          showAddBtn
          hideSearch
          onAdd={()=> setIsOpenPlacementSpecialNeedsModal(true)}
        />
        </Box>
        <CustomTable
          data={SpecialNeedsAgreementData}
          columns={SpecialNeedsAgreementColumns}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          rootSX={{ my: theme.spacing(2), p: 2.5 }}
        />
      </Grid>
      <Grid item xs={12} ml={2.8} mb={2} mt={0}>
      <Button sx={styles.saveBtn} onClick={handleIncreamentStep}>Continue</Button>
      </Grid>
      <PlacementSpecialNeedsAgreementModal
        title="Placement Special Needs Agreement"
        open={isOpenPlacementSpecialNeedsModal}
        handleClose={() =>
          setIsOpenPlacementSpecialNeedsModal(false)
        }
        onSubmit={onAddSpecialNeedsModalData}
      />
          
    </Grid>
  );
};

export default PlacementSpecialNeedsAgreement;

const styles = {
  saveBtn: { backgroundColor: "#0E918C", color: "#fff", "&:hover": { backgroundColor: "#0E918C" }, px: 2.2, py: 1, fontSize: "16px", fontWeight: 600 }
};
