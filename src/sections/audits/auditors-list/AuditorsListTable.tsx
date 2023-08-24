import React from "react";
import { data } from ".";
import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { useAuditorsListTable } from "./useAuditorsListTable";
import AuditorForm from "./auditor-form/AuditorForm";

// ========================================================================

const AuditorsListTable = () => {
  const { theme, columns, SELECT_FILTERS, isModalOpen, handleCloseModal } = useAuditorsListTable();

  return (
    <>
      <Card sx={styles.card}>
        <TableHeader
          title="Auditors List"
          rootSX={{ overflowX: "scroll", mt: 0 }}
          searchKey="search"
          showSelectFilters
          selectFilters={SELECT_FILTERS}
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
      <AuditorForm open={isModalOpen} onClose={handleCloseModal} />
    </>
  );
};
export default AuditorsListTable;

// =============================================
const styles = {
  card: {
    px: 1,
    py: 2,
  },
};
