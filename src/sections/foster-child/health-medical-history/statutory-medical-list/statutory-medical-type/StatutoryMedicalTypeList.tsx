import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Box } from "@mui/material";
import { useStatutoryMedicalTypeList } from "./useStatutoryMedicalTypeList";
import DeleteModel from "@root/components/modal/DeleteModel";

const StatutoryMedicalTypeList = (props: any) => {
  const {
    statutoryMedicalListXTableColumns,
    data,
    router,
    setHeaderHeading,
    setSearchValue,
    setPage,
    isRecordSetForDelete,
    setIsRecordSetForDelete,
    onDeleteConfirm,
    isLoading,
    isSuccess,
    isError,
    isFetching,
    STATUTORYMEDICALLISTTYPEPAGELIMIT,
  } = useStatutoryMedicalTypeList(props);
  return (
    <>
      <Box>
        <TableHeader
          title={setHeaderHeading(props.type)}
          searchKey="search"
          showAddBtn={true}
          onChanged={(data: any) => {
            setSearchValue(data.search);
          }}
          onAdd={() =>
            router.push({
              pathname: `/foster-child/health-medical-history/statutory-medical-list/statutory-medical-type`,
              query: {
                type: props.type,
                ...(!!router?.query?.fosterChildId && {
                  fosterChildId: router?.query?.fosterChildId,
                }),
              },
            })
          }
        />

        <CustomTable
          data={data?.data?.statutory_medical}
          columns={statutoryMedicalListXTableColumns}
          showSerialNo
          isLoading={isLoading}
          isFetching={isFetching}
          isError={isError}
          isSuccess={isSuccess}
          isPagination={true}
          currentPage={data?.data?.meta?.page ?? 1}
          totalPages={data?.data?.meta?.pages ?? 2}
          onPageChange={(pageNo: any) => {
            setPage((pageNo - 1) * STATUTORYMEDICALLISTTYPEPAGELIMIT);
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

export default StatutoryMedicalTypeList;
