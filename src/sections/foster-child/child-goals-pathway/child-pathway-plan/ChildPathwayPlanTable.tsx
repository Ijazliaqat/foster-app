import CustomTable from "@root/components/Table/CustomTable";
import React from "react";
import { useChildPathwayPlan } from "./useChildPathwayPlan";
import TableHeader from "@root/components/TableHeader";

export const ChildPathwayPlanTable = () => {
  const {
    childPathwayPlanMockData,
    // setChildPersonalGoalMockData,
    tableHeaderRefTwo,
    // search,
    setSearch,
    columns,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    // childPersonalGoalsListError,
    // childPersonalGoalsListFetching,
    // childPersonalGoalsListLoading,
    // childPersonalGoalsListSuccess,
    // childPersonalGoalsListData,
    // meta,
  } = useChildPathwayPlan();
  return (
    <div>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Pathway Plan"
        searchKey="search"
        // showAddBtn={false}
        // onAdd={() => {
        //   router.push({
        //     pathname:
        //       "/carer-info/background-checks/statutory-checks-list/local-authority",
        //     query: { action: "add", id: "" },
        //   });
        // }}
        onChanged={(event: any) => {
          setSearch(event.search);
        }}
      />
      <CustomTable
        columns={columns}
        data={childPathwayPlanMockData}
        isFetching={false}
        isLoading={false}
        isError={false}
        isSuccess={true}
        totalPages={1}
        currentPage={1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
        // rootSX={{ my: theme.spacing(2) }}
        isPagination={true}
        // tableContainerSX = {}
        // rootSX = {}
        // showSerialNo={false}
      />
    </div>
  );
};
