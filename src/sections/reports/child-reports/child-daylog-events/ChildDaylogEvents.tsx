import React from "react";
import {Card,} from "@mui/material";
import { tableMockData } from ".";
import { useChildDaylogEvents } from "./useChildDaylogEvents";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import DeleteModel from "@root/components/modal/DeleteModel";

const ChildDaylogEvents = () => {
  const { handleAction, openDelete, handleCloseDeleteModal, columns } =
  useChildDaylogEvents();


  return (
    <>
      <Card sx={{ py: 2, px: 1 }}>
        <TableHeader title={"CHILD DAYLOG EVENTS REPORT"} showAddBtn onAdd={() => handleAction("add")} />
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

export default ChildDaylogEvents;