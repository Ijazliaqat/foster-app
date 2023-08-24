
import React from "react";
import {Card,} from "@mui/material";
import { tableMockData } from ".";
import { useAgencyDecision } from "./useAgencyDecision";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import DeleteModel from "@root/components/modal/DeleteModel";

const AgencyDecision = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } =
  useAgencyDecision();


  return (
    <>
      <Card sx={{ py: 2, px: 1 }}>
        <TableHeader title={"Panel Case List"} />
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

export default AgencyDecision;
 
