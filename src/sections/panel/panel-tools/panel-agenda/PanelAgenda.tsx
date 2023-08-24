import React from "react";
import { data } from ".";
import { Card } from "@mui/material";
import { usePanelAgenda } from "./usePanelAgenda";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";

// =======================================================================

const PanelAgenda = () => {
  const { theme, router, columns, tableHeaderRef } = usePanelAgenda();

  return (
    <Card sx={{ px: 1, py: 2 }}>
      <TableHeader
        title="Panel Case List"
        ref={tableHeaderRef}
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push("/panel/panel-tools/agenda/panel-agenda-form");
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
  );
};
export default PanelAgenda;
