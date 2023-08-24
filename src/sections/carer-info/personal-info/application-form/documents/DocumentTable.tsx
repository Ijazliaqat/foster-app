import { Grid } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import { columns } from ".";
import React, { useRef } from "react";
import TableHeader from "@root/components/TableHeader";
import UploadDocumentsModel from "./UploadDocumentModal";
import { useUploadDocumentsTable } from "./useUploadDocumentsTable";

export function DocumentTable(props: any) {
  const { applicationFormid, role } = props;
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
    meta
  } = useUploadDocumentsTable({ applicationFormid });

  return (
    <Grid container>
      <Grid xs={12} item>
        <TableHeader
          ref={tableHeaderRef}
          title="Uploaded Documents"
          showAddBtn={true}
          onAdd={() => {
            setOpen(true);
            changeView("add");
          }}
          searchKey="search"
          onChanged={headerChangeHandler}
        />
        <CustomTable
          data={data?.data?.application_form_docs}
          columns={columns({
            changeView,
            setOpen,
            role,
            setDocData,
            listDeleteHandler,
          })}
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isSuccess={isSuccess}
          showSerialNo
          onPageChange={pageChangeHandler}
          onSortByChange={sortChangeHandler}
          currentPage={meta?.page}
          totalPages={meta?.pages}
        />
        {open && (
          <UploadDocumentsModel
            view={view}
            open={open}
            setOpen={setOpen}
            changeView={changeView}
            docData={docData}
            applicationFormid={applicationFormid}
          />
        )}
      </Grid>
    </Grid>
  );
}
