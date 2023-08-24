import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { Box } from "@mui/material";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import { useVocationalCourseInfoTable } from "./useVocationalCourseInfoTable";

const VocationalCourseInfoTable = (props: any) => {
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
  } = useVocationalCourseInfoTable();
  const columns = [
    {
      accessorFn: (row: any) => row?.courseType,
      id: "courseType",
      cell: (info: any) => info.getValue(),
      header: "Course Type",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.duration,
      id: "duration",
      cell: (info: any) => info.getValue(),
      header: "Duration",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.qualification,
      id: "qualification",
      cell: (info: any) => info.getValue(),
      header: "Qualification",
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
                  "/foster-child/child-background-info/child-chronology-of-events/vocational-course-info",
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
                  "/foster-child/child-background-info/child-chronology-of-events/vocational-course-info",
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
      header: "Action",
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
              "/foster-child/child-background-info/child-chronology-of-events/vocational-course-info",
            query: { action: "add", fosterChildId: fosterChildId },
          });
        }}
      />
      <CustomTable
        data={data?.data?.cc_vocational_course_info}
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

export default VocationalCourseInfoTable;
