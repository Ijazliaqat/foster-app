import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { Box } from "@mui/material";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";
import { useChildMissingPlacementTable } from "./useChildMissingPlacementTable";

const ChildMissingPlacementTable = (props: any) => {
  const { fosterChildId } = props;
  const {
    listDeleteHandler,
    router,
    tableHeaderRefTwo,
    setSearch,
    data,
    sortChangeHandler,
    pageChangeHandler,
    isSuccess,
    isFetching,
    isError,
    isLoading,
  } = useChildMissingPlacementTable();
  const columns = [
    {
      accessorFn: (row: any) => row?.childMissingDate,
      id: "childMissingDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: "Child Missing Date",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.reportedDate,
      id: "reportedDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: "Reported Date",
      isSortable: true,
    },

    {
      accessorFn: (row: any) => row?.childMissingReason,
      id: "childMissingReason",
      cell: (info: any) => info.getValue(),
      header: "Missing Reason",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.id,
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            size="small"
            type="edit"
            onClicked={() =>
              router.push({
                pathname:
                  "/foster-child/child-background-info/child-chronology-of-events/child-missing-placement",
                query: {
                  action: "edit",
                  id: info?.row?.original?.id,
                  fosterChildId: fosterChildId,
                },
              })
            }
          />
          {/* Delete Modal */}
          <DeletePrompt onDeleteClick={() => listDeleteHandler(info?.row?.original?.id)} />
          <TableAction
            size="small"
            type="view"
            onClicked={() =>
              router.push({
                pathname:
                  "/foster-child/child-background-info/child-chronology-of-events/child-missing-placement",
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
      header: "Actions",
      isSortable: false,
    },
  ];

  return (
    <>
      <TableHeader
        ref={tableHeaderRefTwo}
        title=""
        hideSearch
        showAddBtn
        onAdd={() => {
          router.push({
            pathname:
              "/foster-child/child-background-info/child-chronology-of-events/child-missing-placement",
            query: { action: "add", fosterChildId: fosterChildId },
          });
        }}
      />
      <CustomTable
        data={data?.data?.cc_child_missing_placement_info}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={data?.data?.metameta?.page}
        totalPages={data?.data?.metameta?.pages}
        showSerialNo
        isPagination
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default ChildMissingPlacementTable;
