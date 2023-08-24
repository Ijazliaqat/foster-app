import React from "react";
import {Card,} from "@mui/material";
import { tableMockData } from ".";
import { useFosteredYoungPerson } from "./useFosteredYoungPerson";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import DeleteModel from "@root/components/modal/DeleteModel";

const FosteredYoungPerson = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } =
  useFosteredYoungPerson();


  return (
    <>
      <Card sx={{ py: 2, px: 1 }}>
        <TableHeader title={"FOSTERED YOUNG PERSON'S COMMENTS"} showAddBtn onAdd={() => handleAction("add")} />
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

export default FosteredYoungPerson;
