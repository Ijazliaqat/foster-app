import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { Box, Paper } from "@mui/material";
import dayjs from "dayjs";
import { useChildIncidentsReportList } from "./useChildIncidentsReportList";

const ChildIncidentsReportList = () => {
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
    fosterChildId,
    isLoading,
  } = useChildIncidentsReportList();
  const columns = [
    {
      accessorFn: (row: any) => row?.status,
      id: "status",
      cell: (info: any) => "Abc123",
      header: "Case ID",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.complaintDate,
      id: "complaintDate",
      cell: (info: any) => {
        return <Box>{dayjs(info.getValue()).format("DD/MMM/YYYY :: hh:mm")}</Box>;
      },
      header: "Date / Time of Occurence",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.children,
      id: "children",
      cell: (info: any) => info.getValue(),
      header: "Child Name",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.natureOfIncident,
      id: "natureOfIncident",
      cell: (info: any) => info.getValue(),
      header: "Incident Type",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.incidentDetails,
      id: "incidentDetails",
      cell: (info: any) => info.getValue(),
      header: "Incident Description",
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
            // onClicked={() =>
            //   router.push({
            //     pathname:
            //       "/foster-child/child-background-info/child-chronology-of-events/complaints-info",
            //     query: {
            //       action: "view",
            //       id: info?.row?.original?.id,
            //       fosterChildId: fosterChildId,
            //     },
            //   })
            // }
          />
          <TableAction
            size="small"
            type="view"
            // onClicked={() =>
            //   router.push({
            //     pathname:
            //       "/foster-child/child-background-info/child-chronology-of-events/complaints-info",
            //     query: {
            //       action: "view",
            //       id: info?.row?.original?.id,
            //       fosterChildId: fosterChildId,
            //     },
            //   })
            // }
          />
          <TableAction
            size="small"
            type="delete"
            // onClicked={() =>
            //   router.push({
            //     pathname:
            //       "/foster-child/child-background-info/child-chronology-of-events/complaints-info",
            //     query: {
            //       action: "view",
            //       id: info?.row?.original?.id,
            //       fosterChildId: fosterChildId,
            //     },
            //   })
            // }
          />
          {/* <TableAction size="small" type="print" onClicked={() => console.log("")} />
          <TableAction size="small" type="share" onClicked={() => console.log("")} /> */}
        </Box>
      ),
      header: "Action",
      isSortable: false,
    },
  ];
  return (
    <Paper elevation={3}>
      <TableHeader
        ref={tableHeaderRefTwo}
        title="CHILD INCIDENTS REPORTS"
        showAddBtn
        onAdd={() => {
          router.push({
            pathname: "/foster-child/child-reports/child-incidents-report/form",
            query: { action: "add", fosterChildId: fosterChildId },
          });
        }}
      />
      <CustomTable
        data={data?.data?.child_incident_report}
        columns={columns}
        isLoading={isLoading}
        isFetching={isFetching}
        isError={isError}
        isSuccess={isSuccess}
        currentPage={data?.data?.meta?.page}
        totalPages={data?.data?.meta?.pages}
        showSerialNo
        isPagination
        onPageChange={pageChangeHandler}
        onSortByChange={sortChangeHandler}
      />
    </Paper>
  );
};

export default ChildIncidentsReportList;
