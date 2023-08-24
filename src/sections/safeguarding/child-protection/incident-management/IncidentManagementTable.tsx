import React from "react";
import { Box, Checkbox } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useIncidentManagementTable } from "./useIncidentManagementTable";

const IncidentManagementTable = () => {
  const {columns, data, router } =
    useIncidentManagementTable();

  return (
    <>
      <TableHeader
        title="Incident Management"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname:`/safeguarding/child-protection/incident-management/incident-management-form`,
            query:{action:"add"}
        });
        }}
        onChanged={(data: any) => {
          console.log("Updated params: ", data);
        }}
      />
      <CustomTable
        data={data}
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

export default IncidentManagementTable;
