import CustomTable from "@root/components/Table/CustomTable";
// import React, { useRef } from "react";
// import { Box, Checkbox, useTheme } from "@mui/material";
// import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
// import dayjs from "dayjs";
import { useChildPersonalGoal } from "./useChildPersonalGoal";
import { useTheme } from "@mui/material";
// import { columns } from ".";

export const ChildPersonalGoalsMain = () => {
  const {
    childPersonalGoalMockData,
    // setChildPersonalGoalMockData,
    tableHeaderRefTwo,
    // search,
    setSearch,
    columns,
    headerChangeHandler,
    pageChangeHandler,
    sortChangeHandler,
    childPersonalGoalsListError,
    childPersonalGoalsListFetching,
    childPersonalGoalsListLoading,
    childPersonalGoalsListSuccess,
    childPersonalGoalsListData,
    meta,
  } = useChildPersonalGoal();
  const theme = useTheme();
  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="Personal Goals"
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
        data={childPersonalGoalsListData}
        isFetching={childPersonalGoalsListFetching}
        isLoading={childPersonalGoalsListLoading}
        isError={childPersonalGoalsListError}
        isSuccess={childPersonalGoalsListSuccess}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.pages ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
        // rootSX={{ my: theme.spacing(2) }}
        isPagination={true}
        // tableContainerSX = {}
        // rootSX = {}
        // showSerialNo={false}
      />
    </>
  );
};
