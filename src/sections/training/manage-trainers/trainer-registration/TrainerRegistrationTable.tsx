import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useTrainerRegistrationTable } from "./useTrainerRegistrationTable";

const TrainerRegistrationtTable = () => {
  const { columns, TableDummyData, router } = useTrainerRegistrationTable();

  return (
    <>
      <TableHeader
        title="Trainer Evaluation Form"
        searchKey="search"
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <CustomTable
        data={TableDummyData}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        // count={Math.ceil(data?.data?.meta?.total / limit)}
        currentPage={1}
        onPageChange={(data: any) => {
          console.log("Current page data: ", data);
        }}
        onSortByChange={(data: any) => {
          console.log("Sort by: ", data);
        }}
      />
    </>
  );
};

export default TrainerRegistrationtTable;
