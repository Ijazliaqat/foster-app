import React from "react";
import { Box, Badge } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useUnannouncedVisitTable } from "./useUnannouncedVisitTable";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import TableAction from "@root/components/TableAction";
import dayjs from "dayjs";

const UnannouncedVisitTable = () => {
  const {
    router,
    tableHeaderRefTwo,
    isLoading,
    unAnnouncedVisitList,
    isFetching,
    isError,
    isSuccess,
    meta,
    setSearch,
    listDeleteHandler,
    pageChangeHandler,
    sortChangeHandler,
    fosterCarerId,
  } = useUnannouncedVisitTable();

  const columns = [
    {
      accessorFn: (row: any) => row?.dateOfVisit ?? "-",
      id: "dateOfVisit",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Date of Visit</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.homeVisitStatus ?? "-",
      id: "homeVisitStatus",
      cell: (info: any) => (
        <Badge invisible={info.badge} color="secondary" sx={styles.badge}>
          {info.getValue()}
        </Badge>
      ),
      header: () => <span>Home Visit Status</span>,
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
      accessorFn: (row: any) => row.fcSignature ?? "-",
      id: "fcSignature",
      cell: (info: any) => (
        <Badge invisible={info.badge} color="secondary" sx={styles.badge}>
          {info.getValue()}
        </Badge>
      ),
      header: () => <span>FC Signature</span>,
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
                  "/carer-info/personal-info/carer-chronology-of-events/unannounced-visit",
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
                  "/carer-info/personal-info/carer-chronology-of-events/unannounced-visit",
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
          title="Unannounced Home Visit"
          searchKey="search"
          showAddBtn
          onChanged={(event: any) => {
            setSearch(event.search);
          }}
          onAdd={() => {
            router.push({
              pathname:
                "/carer-info/personal-info/carer-chronology-of-events/unannounced-visit",
              query: { action: "add", fosterCarerId: fosterCarerId },
            });
          }}
        />
      </Box>
      <CustomTable
        data={unAnnouncedVisitList}
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

export default UnannouncedVisitTable;

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
