import React from "react";
import { Box, Badge } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useReportTable } from "./useReportTable";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";

const ReportTable = () => {
  const {
    router,
    tableHeaderRefTwo,
    isLoading,
    reportList,
    isFetching,
    isError,
    isSuccess,
    meta,
    setSearch,
    listDeleteHandler,
    pageChangeHandler,
    sortChangeHandler,
    fosterCarerId,
  } = useReportTable();

  const columns = [
    {
      accessorFn: (row: any) => row?.reportDate ?? "-",
      id: "reportDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Report Date/Time</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.emergencyPlacementRequired ?? "-",
      id: "emergencyPlacementRequired",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Emergency Placement Required</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.status ?? "-",
      id: "status",
      cell: (info: any) => (
        <Badge invisible={info.badge} color="secondary" sx={styles.badge}>
          {info.getValue()}
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
                  "/carer-info/personal-info/carer-chronology-of-events/ooh-report",
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
            onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)}
          />
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname:
                  "/carer-info/personal-info/carer-chronology-of-events/ooh-report",
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
          title="OOH Report"
          searchKey="search"
          showAddBtn
          onChanged={(event: any) => {
            setSearch(event.search);
          }}
          onAdd={() => {
            router.push({
              pathname:
                "/carer-info/personal-info/carer-chronology-of-events/ooh-report",
              query: { action: "add", fosterCarerId: fosterCarerId },
            });
          }}
        />
      </Box>
      <CustomTable
        data={reportList}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        showSerialNo={true}
        isPagination={true}
        currentPage={meta?.page}
        totalPages={meta?.pages}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default ReportTable;

//Styling
const styles: any = {
  badge: (theme: any) => ({
    "& .MuiBadge-badge": {
      fontSize: 9,
      top: 11,
      right: -22,
      height: 15,
      background: theme.palette.primary.main,
      cursor: "pointer",
    },
  }),
};
