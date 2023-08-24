import { Grid } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React, { useState } from "react";
import { useFamilyTable } from "./useFamilyTable";
import { columns } from ".";
import FamilyViewForm from "./FamilyViewForm";

export default function FamilyTable({ applicationFormid, role }: any) {
  let [viewData, setViewData] = useState(null);
  let [familyData, setFamilyData] = useState(null);

  const changeView = (val: any) => {
    setViewData(val);
  };
  const {
    data,
    isLoading,
    isError,
    isFetching,
    isSuccess,
    router,
    theme,
    tableHeaderRef,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    meta,
    listDeleteHandler,
  } = useFamilyTable(applicationFormid);

  return (
    <Grid container>
      <Grid xs={12} item>
        {viewData ? (
          <FamilyViewForm
            role
            disabled={viewData == "view" ? true : false}
            familyData={familyData}
            changeView={changeView}
            viewData={viewData}
            applicationFormid={applicationFormid}
          />
        ) : (
          <>
            <TableHeader
              ref={tableHeaderRef}
              disabled={isLoading}
              title="Existing Family Member(s) Details"
              showAddBtn={role == "foster-carer" ? false : true}
              onAdd={() => {
                changeView("add");
              }}
              searchKey="search"
              onChanged={headerChangeHandler}
            />
            <CustomTable
              data={data?.data?.application_form_family}
              columns={columns(
                changeView,
                setFamilyData,
                role,
                listDeleteHandler
              )}
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
          </>
        )}
      </Grid>
    </Grid>
  );
}
