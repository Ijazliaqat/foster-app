import React from "react";
import { data } from ".";
import { Card } from "@mui/material";
import { usePanelApproval } from "./usePanelApproval";
import TableHeader from "@root/components/TableHeader";
import DecisionModal from "./decision-modal/DecisionModal";
import CustomTable from "@root/components/Table/CustomTable";

// ======================================================================

const PanelApproval = () => {
  const { theme, columns, isDecisionModal, handleClose } = usePanelApproval();

  return (
    <Card sx={{ px: 1, py: 2 }}>
      <TableHeader
        title="Panel Case List"
        searchKey="search"
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
      {isDecisionModal && <DecisionModal open={isDecisionModal} handleClose={handleClose} />}
    </Card>
  );
};
export default PanelApproval;
