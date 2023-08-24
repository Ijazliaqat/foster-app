import React from "react";
import { Box, Badge } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { useAllegationTable } from "./useAllegationTable";
import TableAction from "@root/components/TableAction";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";

const AllegationTable = () => {
  const {
    router,
    tableHeaderRefTwo,
    allegations,
    allegationListIsloading,
    allegationlistIsfetching,
    allegationListError,
    allegationListIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    listDeleteHandler,
    setSearch,
    fosterCarerId,
  } = useAllegationTable();

  const columns = [
    {
      accessorFn: (row: any) => row?.allegationDate ?? "-",
      id: "allegationDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Date of Allegation</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.status ?? "-",
      id: "status",
      cell: (info: any) => (
        <Badge
          invisible={info.badge}
          color="secondary"
          // badgeContent="Draft"
          sx={styles.badge}
        >
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
                  "/carer-info/personal-info/carer-chronology-of-events/allegation",
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
                  "/carer-info/personal-info/carer-chronology-of-events/allegation",
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
          title="Allegation"
          searchKey="search"
          showAddBtn
          onChanged={(event: any) => {
            setSearch(event.search);
          }}
          onAdd={() => {
            router.push({
              pathname:
                "/carer-info/personal-info/carer-chronology-of-events/allegation",
              query: { action: "add", fosterCarerId: fosterCarerId },
            });
          }}
        />
      </Box>
      <CustomTable
        data={allegations}
        columns={columns}
        isLoading={allegationListIsloading}
        isFetching={allegationlistIsfetching}
        isError={allegationListError}
        isSuccess={allegationListIsSuccess}
        showSerialNo={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default AllegationTable;

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
