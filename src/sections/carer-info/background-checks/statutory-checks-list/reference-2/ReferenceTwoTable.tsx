import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { useReferenceTwoTable } from "./useReferenceTwoTable";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";

const ReferenceTwoTable = () => {
  const {
    router,
    tableHeaderRefTwo,
    referenceTwoData,
    referenceTwoError,
    referenceTwoIsloading,
    referenceTwoIsfetching,
    referenceTwoIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterCarerId,
  } = useReferenceTwoTable();
  const columns = [
    {
      accessorFn: (row: any) => row.name ?? "-",
      id: "name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.sendDate ?? "-",
      id: "sendDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Sent Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.receivedDate ?? "-",
      id: "receivedDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Received Date</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.verifiedDate ?? "-",
      id: "verifiedDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("MM/DD/YYYY")}</Box>;
      },
      header: () => <span>Verified Date</span>,
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
                  "/carer-info/background-checks/statutory-checks-list/reference-2",
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
                  "/carer-info/background-checks/statutory-checks-list/reference-2",
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
        title="Reference 2"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname:
              "/carer-info/background-checks/statutory-checks-list/reference-2",
            query: { action: "add", fosterCarerId: fosterCarerId },
          });
        }}
        onChanged={(event: any) => {
          setSearch(event.search);
        }}
      />
      <CustomTable
        data={referenceTwoData}
        columns={columns}
        isLoading={referenceTwoIsloading}
        isFetching={referenceTwoIsfetching}
        isError={referenceTwoError}
        isSuccess={referenceTwoIsSuccess}
        showSerialNo={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default ReferenceTwoTable;
