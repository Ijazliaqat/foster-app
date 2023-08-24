import React from "react";
import { data } from ".";
import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { useAssignedAuditsTable } from "./useAssignedAuditsTable";

// ========================================================================

const AssignedAuditTable = () => {
  const { theme, columns } = useAssignedAuditsTable();

  return (
    <>
      <Card sx={styles.card}>
        <TableHeader
          title="Assigned Audits"
          rootSX={{ overflowX: "scroll", mt: 0 }}
          searchKey="search"
          onChanged={(data: any) => {
            console.log("Updated params: ", data);
          }}
        />
        <CustomTable
          data={data}
          columns={columns}
          showSerialNo={true}
          isLoading={false}
          isFetching={false}
          isError={false}
          isSuccess={true}
          currentPage={1}
          onPageChange={(data: any) => {
            console.log("Current page data: ", data);
          }}
          onSortByChange={(data: any) => {
            console.log("Sort by: ", data);
          }}
          rootSX={{ my: theme.spacing(2), mt: 0 }}
        />
      </Card>
    </>
  );
};
export default AssignedAuditTable;

// =============================================
const styles = {
  card: {
    px: 1,
    py: 2,
  },
};
