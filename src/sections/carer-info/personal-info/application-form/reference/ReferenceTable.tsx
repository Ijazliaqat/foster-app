import React, { useRef, useState } from "react";
import ReferenceViewForm from "./ReferenceViewForm";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { columns } from ".";
import { useReferenceTable } from "./useReferenceTable";

export default function Reference({ applicationFormid, role }: any) {
  let [viewData, setViewData] = useState(null);
  let [refData, setRefData] = useState(null);
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
  } = useReferenceTable(applicationFormid);

  return (
    <>
      {viewData ? (
        <ReferenceViewForm
          role
          disabled={viewData == "view" ? true : false}
          refData={refData}
          changeView={changeView}
          viewData={viewData}
          applicationFormid={applicationFormid}
        />
      ) : (
        <>
          <TableHeader
            disabled={isLoading}
            ref={tableHeaderRef}
            title="Existing Reference(s) Details"
            showAddBtn={role == "foster-carer" ? false : true}
            onAdd={() => {
              changeView("add");
            }}
            searchKey="search"
            onChanged={headerChangeHandler}
          />
          <CustomTable
            showSerialNo
            data={data?.data?.application_form_reference}
            columns={columns(changeView, setRefData, role, listDeleteHandler)}
            isLoading={isLoading}
            isFetching={isFetching}
            isError={isError}
            isSuccess={isSuccess}
            currentPage={meta?.page}
            totalPages={meta?.pages}
            onPageChange={pageChangeHandler}
            onSortByChange={sortChangeHandler}
          />
        </>
      )}
    </>
  );
}
