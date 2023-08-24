import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import usePath from "@root/hooks/usePath";
import { useTableParams } from "@root/hooks/useTableParams";
import React, { useRef } from "react";
import { SELECTFILTERS, getColumnsChildReferral } from "./";
import CustomTable from "@root/components/Table/CustomTable";
import { useGetChildReferralTableApiQuery } from "@root/services/foster-child/referrals/child-referral/childReferralApi";

export default function ChildReferralTable() {
  const tableHeaderRef = useRef<any>();
  const { makePath } = usePath();

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const columnsChildReferral = getColumnsChildReferral(makePath);

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetChildReferralTableApiQuery({ params });

  const childData = data?.data?.child_referral;
  const meta = data?.data?.meta;

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        ref={tableHeaderRef}
        disabled={isLoading}
        title="Child Referrals"
        searchKey="search"
        onChanged={headerChangeHandler}
        showSelectFilters
        selectFilters={SELECTFILTERS}
      />

      <CustomTable
        data={childData}
        columns={columnsChildReferral}
        showSerialNo
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={meta?.page}
        totalPages={meta?.pages}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </Card>
  );
}
