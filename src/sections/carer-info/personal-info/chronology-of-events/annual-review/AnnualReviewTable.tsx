import React from "react";
import { Box, Badge } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useAnnualReviewTable } from "./useAnnualReviewTable";
import TableAction from "@root/components/TableAction";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";

const AnnualReviewTable = () => {
  const {
    router,
    tableHeaderRefTwo,
    annualReviewList,
    annualReviewListIsloading,
    annualReviewlistIsfetching,
    annualReviewListError,
    annualReviewListIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    listDeleteHandler,
    setSearch,
    fosterCarerId,
  } = useAnnualReviewTable();

  const columns = [
    {
      accessorFn: (row: any) => row?.reviewDate ?? "-",
      id: "reviewDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Review Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.status ?? "-",
      id: "status",
      cell: (info: any) => (
        <Badge invisible={info.badge} color="secondary">
          {info.getValue() ?? "-"}
        </Badge>
      ),
      header: () => <span>Status</span>,
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
                  "/carer-info/personal-info/carer-chronology-of-events/annual-review",
                query: {
                  action: "edit",
                  id: info?.row?.original?.id,
                  fosterCarerId: fosterCarerId,
                },
              })
            }
          />

          {/* Calling Delete Modal */}
          <DeletePrompt
            onDeleteClick={() => listDeleteHandler(info?.row?.origial?.id)}
          />
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname:
                  "/carer-info/personal-info/carer-chronology-of-events/annual-review",
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
      <Box sx={{ mb: 1 }}>
        <TableHeader
          ref={tableHeaderRefTwo}
          title="Annual Review"
          searchKey="search"
          showAddBtn
          onChanged={(event: any) => {
            setSearch(event.search);
          }}
          onAdd={() => {
            router.push({
              pathname:
                "/carer-info/personal-info/carer-chronology-of-events/annual-review",
              query: { action: "add", fosterCarerId: fosterCarerId },
            });
          }}
        />
      </Box>
      <CustomTable
        data={annualReviewList}
        columns={columns}
        isLoading={annualReviewListIsloading}
        isFetching={annualReviewlistIsfetching}
        isError={annualReviewListError}
        isSuccess={annualReviewListIsSuccess}
        showSerialNo={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default AnnualReviewTable;
