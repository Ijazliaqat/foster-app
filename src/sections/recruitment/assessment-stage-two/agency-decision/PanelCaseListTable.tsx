import { Box, Checkbox, Grid, Typography, Card, useTheme } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import React, { useRef } from "react";
import { useRouter } from "next/router";
import TableHeader from "@root/components/TableHeader";
import { PanelCaseListTableData, columns } from ".";
import { usePanelCaseListTable } from "./usePanelCaseListTable";

export default function PanelCaseListTable() {
  const {
    router,
    tableHeaderRef,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    theme,
  } = usePanelCaseListTable();

  return (
    <Grid container>
      <Grid
        sx={{
          overflow: { sx: "unset", sm: "auto" },
          width: { sx: "auto", sm: "300px" },
        }}
        xs={12}
        item
      >
        <Card sx={{ p: 2 }}>
          <TableHeader
            ref={tableHeaderRef}
            title="Panel Case List"
            searchKey="search"
            onChanged={(data: any) => {
              console.log("Updated params: ", data);
            }}
          />
          <CustomTable
            data={PanelCaseListTableData}
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
            rootSX={{ my: theme.spacing(2) }}
          />
        </Card>
      </Grid>
    </Grid>
  );
}
