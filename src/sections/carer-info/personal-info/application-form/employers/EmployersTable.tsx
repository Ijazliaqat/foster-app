import React, { useRef, useState } from "react";
import EmployersViewForm from "./EmployersViewForm";
import TableHeader from "@root/components/TableHeader";
import CustomTable from "@root/components/Table/CustomTable";
import { columns } from ".";
import { useEmployerTable } from "./useEmployerTable";

export default function Employers({ applicationFormid, role }: any) {
  let {
    changeView,
    viewData,
    setViewData,
    theme,
    employerData,
    setEmployerData,
    data,
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
  } = useEmployerTable(applicationFormid, role);

  return (
    <>
      {viewData ? (
        <EmployersViewForm
          role
          disabled={viewData == "view" ? true : false}
          employerData={employerData}
          changeView={changeView}
          viewData={viewData}
          applicationFormid={applicationFormid}
        />
      ) : (
        <>
          <TableHeader
            ref={tableHeaderRef}
            title="Existing Employer(s) Details"
            showAddBtn={role == "foster-carer" ? false : true}
            onAdd={() => {
              changeView("add");
            }}
            searchKey="search"
            onChanged={headerChangeHandler}
          />
          <CustomTable
            showSerialNo
            data={data?.data?.application_form_employees}
            columns={columns(
              changeView,
              setEmployerData,
              role,
              listDeleteHandler
            )}
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
