import { Box, Grid, Paper } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import router from "next/router";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import { dummy, immunisationColumns } from "..";
import { useImmunisationTable } from "./useImmunisationTable";

const activepath = "/foster-child/health-medical-history/immunisation";

const ImmunisationTable = (props: any) => {
  let { fosterChildId } = props;

  let {
    data,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    headerChangeHandler,
    listDeleteHandler,
  } = useImmunisationTable(fosterChildId);
  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ borderRadius: "8px" }}>
            <Box sx={{ p: 1 }}>
              <Box sx={{ mb: 0.5 }}>
                <TableHeader
                  // ref={tableHeaderRefTwo}
                  title="Child Immunisation Info"
                  searchKey="search"
                  showAddBtn
                  onChanged={headerChangeHandler}
                  onAdd={() => {
                    router.push(
                      `${activepath}/add-immunisation/${fosterChildId}`
                    );
                  }}
                />
              </Box>
              <CustomTable
                data={data?.data?.child_immunisation_info}
                columns={immunisationColumns({
                  activepath,
                  listDeleteHandler,
                  fosterChildId,
                })}
                isLoading={isLoading}
                isFetching={isFetching}
                isError={isError}
                isSuccess={isSuccess}
                currentPage={meta?.page}
                totalPages={meta?.pages}
                showSerialNo
                onPageChange={pageChangeHandler}
                onSortByChange={sortChangeHandler}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ImmunisationTable;
