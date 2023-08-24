import React, { useState } from "react";
import { useSafeCarePolicyList } from "./useSafeCarePolicyList";
import { Box, Grid } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import IsFetching from "@root/components/loaders/IsFetching";
import { useRouter } from "next/router";

const SafeCarePolicyList = () => {
  const {
    tableHeaderRef,
    columns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
    setPage,
    safeCarePolicyCon,
  }: any = useSafeCarePolicyList();
  const { someAsyncAction } = safeCarePolicyCon;
  const router = useRouter();
  const { query } = router;
  return (
    <Grid sx={{ position: "relative" }}>
      {someAsyncAction && <IsFetching isFetching />}
      <TableHeader
        ref={tableHeaderRef}
        title="Safe Care Policy"
        searchKey="search"
        showAddBtn={true}
        onAdd={() =>
          router.push(
            `/foster-child/other-information/safe-care-policy-list/details?fosterChildId=${query?.fosterChildId}&action=create`
          )
        }
        onChanged={(data: any) => {
          setSearchValue(data?.search);
          // console.log("Updated params: ", data);
        }}
      />
      <CustomTable
        data={data?.data?.safeCarePolicy}
        columns={columns}
        isLoading={isLoading}
        showSerialNo
        isFetching={isFetching}
        isError={isError}
        isPagination={true}
        isSuccess={isSuccess}
        currentPage={data?.data?.meta?.page}
        totalPages={data?.data?.meta?.pages || 1}
        // onPageChange={(data: any) => {
        //   setPage(() => data);
        // }}
        onPageChange={(pageNo: any) => {
          setPage((pageNo - 1) * 10);
        }}
        onSortByChange={(data: any) => {
          // console.log("Sort by: ", data);
          return;
        }}
      />
    </Grid>
  );
};

export default SafeCarePolicyList;
