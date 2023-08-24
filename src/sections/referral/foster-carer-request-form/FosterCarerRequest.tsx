import React from "react";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useFosterCarerRequest } from "./useFosterCarerRequest";

const FosterCarerRequestFormTable: React.FC = () => {
  const {
    router,
    tableHeaderRefTwo,
    SELECT_FILTERS,
    tableData,
    columns,
    theme,
  } = useFosterCarerRequest();

  return (
    <>
      <TableHeader
        showSelectFilters={true}
        selectFilters={SELECT_FILTERS}
        ref={tableHeaderRefTwo}
        title="Referrals"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname:
              "/referral/foster-carer-request-form/form",
            query:{ action: "add",},
          });
        }}
        onChanged={(data: any) => {}}
       
      />
      <CustomTable
        data={tableData}
        columns={columns}
        isLoading={false}
        isFetching={false}
        isError={false}
        isPagination={false}
        isSuccess={true}
        currentPage={1}
        onPageChange={(data: any) => {}}
        onSortByChange={(data: any) => {}}
        rootSX={{ my: theme.spacing(2) }}
      />
    </>
  );
};

export default FosterCarerRequestFormTable;
