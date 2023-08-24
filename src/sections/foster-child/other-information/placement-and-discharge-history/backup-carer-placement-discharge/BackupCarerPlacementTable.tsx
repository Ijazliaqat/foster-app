import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Box } from "@mui/material";
import { useBackupCarerPlacementTable } from "./useBackupCarerPlacementTable";
import { columns } from "./BackupCarerPlacementData";

const BackupCarerPlacementTable = (props: any) => {
  const { fosterChildId } = props;
  const {
    listDeleteHandler,
    router,
    tableHeaderRefTwo,
    setSearch,
    sortChangeHandler,
    pageChangeHandler,
  } = useBackupCarerPlacementTable();

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
              "/foster-child/other-information/placement-and-discharge-history/backup-carer-placement-discharge",
            query: { action: "add", fosterChildId: fosterChildId },
          });
        }}
      />
      <CustomTable
        data={[]}
        columns={columns({ router, fosterChildId, listDeleteHandler })}
        isLoading={false}
        isFetching={false}
        isError={false}
        isSuccess={false}
        // currentPage={data?.data?.metameta?.page}
        // totalPages={data?.data?.metameta?.pages}
        showSerialNo
        isPagination
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </>
  );
};

export default BackupCarerPlacementTable;
