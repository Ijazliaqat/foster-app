import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { useDiaryRecordingsTable } from "./useDiaryRecordingsTable";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";

const DiaryRecordingsTable = () => {
  const {
    router,
    tableHeaderRefTwo,
    recordingsListIsloading,
    recordingListData,
    recordingsListIsfetching,
    recordingsListError,
    recordingsListIsSuccess,
    meta,
    fosterChildId,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
  } = useDiaryRecordingsTable();

  const columns = [
    {
      accessorFn: (row: any) => row?.date ?? "-",
      id: "date",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Date of Occurence/Time</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.entryType ?? "-",
      id: "entryType",
      cell: (info: any) => info.getValue(),
      header: () => <span>Type</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.subject ?? "-",
      id: "subject",
      cell: (info: any) => info.getValue(),
      header: () => <span>Subject</span>,
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
                  "/foster-child/child-day-log/diary-recordings/child-diary-recordings",
                query: {
                  action: "edit",
                  id: info?.row?.original?.id,
                  fosterChildId: fosterChildId,
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
                  "/foster-child/child-day-log/diary-recordings/child-diary-recordings",
                query: {
                  action: "view",
                  id: info?.row?.original?.id,
                  fosterChildId: fosterChildId,
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
        title="Foster Child Diary Recordings | Children List"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname:
              "/foster-child/child-day-log/diary-recordings/child-diary-recordings",
            query: { action: "add", fosterChildId: fosterChildId },
          });
        }}
        onChanged={(event: any) => {
          setSearch(event.search);
        }}
      />
      <CustomTable
        data={recordingListData}
        columns={columns}
        isLoading={recordingsListIsloading}
        isFetching={recordingsListIsfetching}
        isError={recordingsListError}
        isSuccess={recordingsListIsSuccess}
        showSerialNo={true}
        isPagination={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default DiaryRecordingsTable;
