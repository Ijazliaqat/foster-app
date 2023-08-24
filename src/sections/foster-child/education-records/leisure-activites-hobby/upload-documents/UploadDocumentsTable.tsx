import React from "react";
import { Box, Grid } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import dayjs from "dayjs";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import { enqueueSnackbar } from "notistack";
import Link from "next/link";
import { UPLOAD_DOCUMENTS, uploadDocColumns } from ".";
import UploadDocumentsModel from "./UploadDocumentsModal";
import { useUploadDocumentsTable } from "./useUploadDocumentsTable";
const LeisureUploadTable = ({ leisureActivityId, action }: any) => {
  const {
    data,
    theme,
    tableHeaderRef,
    changeView,
    open,
    setOpen,
    view,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    docData,
    setDocData,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    listDeleteHandler,
    meta,
  } = useUploadDocumentsTable({ leisureActivityId });
  return (
    <>
      <Grid container>
        <Grid xs={12} item>
          <TableHeader
            ref={tableHeaderRef}
            title="Uploaded Documents"
            showAddBtn={action == "view" ? false : true}
            onAdd={() => {
              setOpen(true);
              changeView("add");
            }}
            searchKey="search"
            onChanged={headerChangeHandler}
          />
          <CustomTable
            data={data?.data}
            columns={uploadDocColumns({
              action,
              changeView,
              setOpen,
              setDocData,
              listDeleteHandler,
            })}
            isLoading={isLoading}
            isFetching={isFetching}
            isError={isError}
            isSuccess={isSuccess}
            showSerialNo
            currentPage={meta?.page}
            totalPages={meta?.pages}
            onPageChange={pageChangeHandler}
            onSortByChange={sortChangeHandler}
          />
          {open && (
            <UploadDocumentsModel
              view={view}
              open={open}
              setOpen={setOpen}
              changeView={changeView}
              docData={docData}
              leisureActivityId={leisureActivityId}
            />
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default LeisureUploadTable;
