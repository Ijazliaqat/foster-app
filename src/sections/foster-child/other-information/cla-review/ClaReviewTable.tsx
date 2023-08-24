import { Card } from "@mui/material";
import TableHeader from "@root/components/TableHeader";
import usePath from "@root/hooks/usePath";
import { useTableParams } from "@root/hooks/useTableParams";
import React, { useRef, useState } from "react";
import CustomTable from "@root/components/Table/CustomTable";
import { useRouter } from "next/router";
import { getColumnsClaReview } from "./";
import DeleteModel from "@root/components/modal/DeleteModel";
import { enqueueSnackbar } from "notistack";
import {
  useDeleteClaReviewByIdMutation,
  useGetClaReviewListQuery,
} from "@root/services/foster-child/other-information/cla-review/claReviewApi";

export default function ClaReviewTable() {
  const tableHeaderRef = useRef<any>();
  const { makePath } = usePath();
  const router = useRouter();

  const [open, setOpen] = useState<any>(false);

  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();

  const columnsClaReview = getColumnsClaReview(makePath, setOpen);

  const { data, isLoading, isError, isFetching, isSuccess } =
    useGetClaReviewListQuery({ params });

  const claData = data?.cla_review_details;
  const meta = data?.meta;

  const [deleteReview] = useDeleteClaReviewByIdMutation();

  return (
    <Card sx={{ p: 2 }}>
      <TableHeader
        ref={tableHeaderRef}
        disabled={isLoading}
        title="CLA Reviews"
        searchKey="search"
        onChanged={headerChangeHandler}
        showAddBtn
        onAdd={() => {
          router.push(
            makePath({
              path: "/foster-child/other-information/cla-review/add-cla-review",
            })
          );
        }}
      />

      <CustomTable
        data={claData}
        columns={columnsClaReview}
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

      <DeleteModel
        open={!!open}
        handleClose={() => setOpen(false)}
        onDeleteClick={() => {
          deleteReview(open);
          enqueueSnackbar("CLA Review info deleted successfully!", {
            variant: "success",
          });
          setOpen(false);
        }}
      />
    </Card>
  );
}
