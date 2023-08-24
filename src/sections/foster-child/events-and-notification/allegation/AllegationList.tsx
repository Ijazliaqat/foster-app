import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Box } from "@mui/material";
import { useAllegationList } from "./useAllegationList";
import DeleteModel from "@root/components/modal/DeleteModel";
const AllegationList = () => {
  const {
    allegationInfoTableColumns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
    router,
    setPage,
    ALLEGATIONLISTPAGELIMIT,
    isRecordSetForDelete,
    setIsRecordSetForDelete,
    onDeleteConfirm,
  }: any = useAllegationList();
  return (
    <>
      <Box>
        <TableHeader
          title="Allegation"
          searchKey="search"
          showAddBtn={true}
          onAdd={() =>
            router.push({
              pathname: `/foster-child/events-and-notification/allegation/allegation-info`,
              query: {
                ...(!!router?.query?.fosterChildId && {
                  fosterChildId: router?.query?.fosterChildId,
                }),
              },
            })
          }
          onChanged={(data: any) => {
            setSearchValue(data?.search);
          }}
        />

        <CustomTable
          data={data?.data?.alegation}
          columns={allegationInfoTableColumns}
          isLoading={isLoading}
          showSerialNo
          isFetching={isFetching}
          isError={isError}
          isPagination={true}
          isSuccess={isSuccess}
          currentPage={data?.data?.meta?.page}
          totalPages={data?.data?.meta?.pages}
          onPageChange={(pageNo: any) => {
            setPage((pageNo - 1) * ALLEGATIONLISTPAGELIMIT);
          }}
        />
      </Box>
      {isRecordSetForDelete && (
        <DeleteModel
          open={isRecordSetForDelete}
          handleClose={() => setIsRecordSetForDelete(false)}
          onDeleteClick={(data: any) => {
            onDeleteConfirm?.(data);
          }}
        />
      )}
    </>
  );
};

export default AllegationList;
