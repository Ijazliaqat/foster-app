import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import { Box } from "@mui/material";
import { useChildDaylogEventsReportList } from "./useChildDaylogEventsReportList";
import DeleteModel from "@root/components/modal/DeleteModel";
const ChildDaylogEventsReportList = () => {
  const {
    childDaylogEventsReportInfoTableColumns,
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
  }: any = useChildDaylogEventsReportList();
  return (
    <>
      <Box>
        <TableHeader
          title="DAY LOG EVENTS REPORTS"
          searchKey="search"
          showAddBtn={true}
          onAdd={() =>
            router.push({
              pathname: `/foster-child/child-reports/child-daylog-events-report/child-daylog-events-report-info`,
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
          columns={childDaylogEventsReportInfoTableColumns}
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

export default ChildDaylogEventsReportList;
