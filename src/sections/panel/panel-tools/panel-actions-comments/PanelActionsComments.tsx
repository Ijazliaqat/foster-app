import React from "react";
import { data } from ".";
import { Card } from "@mui/material";
import { usePanelActions } from "./usePanelActions";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import DeleteModel from "@root/components/modal/DeleteModel";

// ===================================================================================

const PanelActionsComments = () => {
  const { columns, theme, isDeleteModal, handleClose, router } = usePanelActions();

  return (
    <Card sx={{ py: 2, px: 1 }}>
      <TableHeader
        title="Panel Case List"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push("/panel/panel-tools/action-comment/action-comment-form");
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
        rootSX={{ my: theme.spacing(2)}}
      />
      <DeleteModel open={isDeleteModal} handleClose={handleClose} />
    </Card>
  );
};
export default PanelActionsComments;
