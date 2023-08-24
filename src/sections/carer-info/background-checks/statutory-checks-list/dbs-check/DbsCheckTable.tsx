import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { useDbsCheckTable } from "./useDbsCheckTable";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";

const DbsCheckTable = () => {
  const {
    router,
    tableHeaderRefTwo,
    dbsCheckListIsloading,
    dbsCheckListData,
    dbsCheckListIsfetching,
    dbsCheckListError,
    dbsCheckListIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterCarerId,
  } = useDbsCheckTable();

  const columns = [
    {
      accessorFn: (row: any) => row?.sentToCarerDate ?? "-",
      id: "sentToCarerDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Sent To Carer Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.sentToDbsDate ?? "-",
      id: "sentToDbsDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Sent To Dbs Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.disclosureDate ?? "-",
      id: "disclosureDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Disclosure Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.result ?? "-",
      id: "result",
      cell: (info: any) => info.getValue(),
      header: () => <span>Result</span>,
      isSortable: true,
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="edit"
            onClicked={() =>
              router.push({
                pathname:
                  "/carer-info/background-checks/statutory-checks-list/dbs-check",
                query: {
                  action: "edit",
                  id: info?.row?.original?.id,
                  fosterCarerId: fosterCarerId,
                },
              })
            }
          />
          {/* Delete Modal */}
          <DeletePrompt
            onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
          />
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname:
                  "/carer-info/background-checks/statutory-checks-list/dbs-check",
                query: {
                  action: "view",
                  id: info?.row?.original?.id,
                  fosterCarerId: fosterCarerId,
                },
              })
            }
          />
        </Box>
      ),
      header: () => <span>actions</span>,
      isSortable: false,
    },
  ];
  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="DBS Check"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname:
              "/carer-info/background-checks/statutory-checks-list/dbs-check",
            query: { action: "add", fosterCarerId: fosterCarerId },
          });
        }}
        onChanged={(event: any) => {
          setSearch(event.search);
        }}
      />
      <CustomTable
        data={dbsCheckListData}
        columns={columns}
        isLoading={dbsCheckListIsloading}
        isFetching={dbsCheckListIsfetching}
        isError={dbsCheckListError}
        isSuccess={dbsCheckListIsSuccess}
        showSerialNo={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default DbsCheckTable;
