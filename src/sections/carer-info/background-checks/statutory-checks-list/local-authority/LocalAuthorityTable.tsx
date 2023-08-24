import { Box } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { useLocalAuthorityTable } from "./useLocalAuthorityTable";
import dayjs from "dayjs";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";

const LocalAuthorityTable = () => {
  const {
    router,
    tableHeaderRefTwo,
    localAuthorityData,
    localAuthorityError,
    localAuthorityIsloading,
    localAuthorityIsfetching,
    localAuthorityIsSuccess,
    meta,
    pageChangeHandler,
    sortChangeHandler,
    setSearch,
    listDeleteHandler,
    fosterCarerId,
  } = useLocalAuthorityTable();
  const columns = [
    {
      accessorFn: (row: any) => row.name ?? "-",
      id: "name",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.sentToDate ?? "-",
      id: "sentToDate",
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
                  "/carer-info/background-checks/statutory-checks-list/local-authority",
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
                  "/carer-info/background-checks/statutory-checks-list/local-authority",
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
        title="Local Authority S.S.D"
        searchKey="search"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname:
              "/carer-info/background-checks/statutory-checks-list/local-authority",
            query: { action: "add", fosterCarerId: fosterCarerId },
          });
        }}
        onChanged={(event: any) => {
          setSearch(event.search);
        }}
      />
      <CustomTable
        data={localAuthorityData}
        columns={columns}
        isLoading={localAuthorityIsloading}
        isFetching={localAuthorityIsfetching}
        isError={localAuthorityError}
        isSuccess={localAuthorityIsSuccess}
        showSerialNo={true}
        totalPages={meta?.pages ?? 0}
        currentPage={meta?.page ?? 1}
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default LocalAuthorityTable;
