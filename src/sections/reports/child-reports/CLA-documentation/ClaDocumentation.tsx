import React from "react";
import { Card } from "@mui/material";
import { tableMockData } from ".";
import { useClaDocumentation } from "./useClaDocumentation";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import DeleteModel from "@root/components/modal/DeleteModel";

const ClaDocumentation = () => {
  const {
    handleAction,
    openDelete,
    handleCloseDeleteModal,
    columns,
  } = useClaDocumentation();

  return (
    <>
      <Card sx={{ py: 2, px: 1 }}>
        <TableHeader
          title="CLA DOCUMENTATION REPORT"
          searchKey="search"
          showAddBtn
          onAdd={() => handleAction("add")}
          onChanged={(data: any) => {
            console.log("Updated params: ", data);
          }}
        />
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

export default ClaDocumentation;