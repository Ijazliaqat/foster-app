import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useRouter } from "next/router";

export default function SubstituteCarerTable(props: any) {
  const {
    columns,
    tableData,
    meta,
    title,
    searchedText,
    apiStatus,
    onPageChange,
    route,
  } = props;
  const router = useRouter();

  return (
    <>
      <TableHeader
        title={title}
        onChanged={searchedText}
        showAddBtn={true}
        onAdd={() => router.push(route)}
      />
      <CustomTable
        data={tableData}
        columns={columns}
        isLoading={apiStatus?.isLoading}
        isFetching={apiStatus?.isFetching}
        isError={apiStatus?.isError}
        isSuccess={apiStatus?.isSuccess}
        showSerialNo
        currentPage={meta?.page}
        totalPages={meta?.pages}
        onPageChange={onPageChange}
      />
    </>
  );
}
