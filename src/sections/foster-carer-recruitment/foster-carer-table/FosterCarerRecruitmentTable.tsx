import { Card } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useTableParams } from "@root/hooks/useTableParams";
import React, { useRef, useState } from "react";
import {
  SELECTFILTERS,
  columnsFosterCarerRecruitment,
  dataFosterCarerRecruitment,
} from "./";
import AddFosterCarerRecruitment from "./AddFosterCarerRecruitment";
import usePath from "@root/hooks/usePath";

export default function FosterCarerRecruitmentTable() {
  const tableHeaderRef = useRef<any>();

  const { makePath } = usePath();

  const { headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const [open, setOpen] = useState(false);

  const columns = columnsFosterCarerRecruitment(makePath);

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        ref={tableHeaderRef}
        //   disabled={isLoading}
        title="Carer List"
        showSelectFilters
        selectFilters={SELECTFILTERS}
        onChanged={headerChangeHandler}
        showAddBtn
        onAdd={() => {
          setOpen(true);
        }}
      />
      <CustomTable
        data={dataFosterCarerRecruitment}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={true}
        showSerialNo
        //   isLoading={isLoading}
        //   isFetching={isFetching}
        //   isError={isError}
        //   isSuccess={isSuccess}
        //   currentPage={meta?.page}
        //   totalPages={meta?.pages}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
      <AddFosterCarerRecruitment open={open} setOpen={setOpen} />
    </Card>
  );
}
