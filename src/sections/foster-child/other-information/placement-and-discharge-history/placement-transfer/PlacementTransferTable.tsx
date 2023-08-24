import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Box } from "@mui/material";
import { usePlacementTransferTable } from "./usePlacementTransferTable";
import { columns } from "./PlacementTransferData";

const PlacementTransferTable = (props: any) => {
  const { fosterChildId } = props;
  const {
    listDeleteHandler,
    router,
    tableHeaderRefTwo,
    setSearch,
    sortChangeHandler,
    pageChangeHandler,
  } = usePlacementTransferTable();

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
              "/foster-child/other-information/placement-and-discharge-history/placement-transfer",
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

export default PlacementTransferTable;
