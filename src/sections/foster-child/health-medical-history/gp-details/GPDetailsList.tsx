import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Box } from "@mui/material";
import { useGPDetailsList } from "./useGPDetailsList";
import DeleteModel from "@root/components/modal/DeleteModel";
const GPDetailsList = () => {
  const {
    gpDetailsInfoTableColumns,
    data,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    setSearchValue,
    router,
    setPage,
    GPDETAILSLISTPAGELIMIT,
    isRecordSetForDelete,
    setIsRecordSetForDelete,
    onDeleteConfirm,
  }: any = useGPDetailsList();
  return (
    <>
      <Box>
        <TableHeader
          title="Child GP Details"
          searchKey="search"
          showAddBtn={true}
          onAdd={() =>
            router.push({
              pathname: `/foster-child/health-medical-history/gp-details/gp-details-info`,
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
          data={data?.data?.gp_info}
          columns={gpDetailsInfoTableColumns}
          isLoading={isLoading}
          showSerialNo
          isFetching={isFetching}
          isError={isError}
          isPagination={true}
          isSuccess={isSuccess}
          currentPage={data?.data?.meta?.page}
          totalPages={data?.data?.meta?.pages}
          onPageChange={(pageNo: any) => {
            setPage((pageNo - 1) * GPDETAILSLISTPAGELIMIT);
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

export default GPDetailsList;
