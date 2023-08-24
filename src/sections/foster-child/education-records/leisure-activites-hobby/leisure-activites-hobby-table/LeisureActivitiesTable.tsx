import { Grid } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import React from "react";
import TableHeader from "@root/components/TableHeader";
import { columns } from ".";
import { useLeisureActivitiesTable } from "./useLeisureActivitiesTable";

let activePath = "/foster-child/education-records/leisure-activities-hobby";
export default function LeisureActivitiesTable(props: any) {
  let { fosterChildId } = props;
  const {
    router,
    leisureActivity,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    listDeleteHandler,
    tableHeaderRef,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    meta,
  } = useLeisureActivitiesTable({ id: fosterChildId });

  return (
    <Grid container>
      <Grid xs={12} item>
        <TableHeader
          ref={tableHeaderRef}
          title="Leisure Activities/Hobbies"
          searchKey="search"
          showAddBtn
          onAdd={() => {
            router.push(`${activePath}/add-leisure-activity/${fosterChildId}`);
          }}
          onChanged={headerChangeHandler}
        />
        <CustomTable
          data={leisureActivity}
          columns={columns({ activePath, listDeleteHandler, fosterChildId })}
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
      </Grid>
    </Grid>
  );
}
