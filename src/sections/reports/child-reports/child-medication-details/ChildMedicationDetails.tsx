import React from "react";
import {Card,} from "@mui/material";
import { tableMockData } from ".";
import { useChildMedicationDetails } from "./useChildMedicationDetails";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import DeleteModel from "@root/components/modal/DeleteModel";

const ChildMedicationDetails = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } =
  useChildMedicationDetails();


  return (
    <>
      <Card sx={{ py: 2, px: 1 }}>
        <TableHeader title={"CHILD MEDICATION DETAILS REPORT"} showAddBtn onAdd={() => handleAction("add")} />
        <CustomTable
          isError={false}
          isLoading={false}
          isFetching={false}
          isSuccess={true}
          data={tableMockData}
          columns={columns}
        />
      </Card>
      <DeleteModel
        open={openDelete}
        handleClose={handleCloseDeleteModal}
        onDeleteClick={handleCloseDeleteModal}
      />
    </>
  );
};

export default ChildMedicationDetails;