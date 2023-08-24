import CustomTable from "@root/components/Table/CustomTable";
import TableAction from "@root/components/TableAction";
import TableHeader from "@root/components/TableHeader";
import { Box, Grid, Paper } from "@mui/material";
import DeletePrompt from "@root/components/Table/prompt/DeletePrompt";
import dayjs from "dayjs";
import router from "next/router";
// import { Dummy } from ".";
import { useIncidentTable } from "./useIncidentTable";

const IncidentTable = (props: any) => {
  const activepath = "/foster-child/events-and-notification/incident/actions";
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
  } = useIncidentTable();
  console.log("🚀 ~ file: incidentTable.tsx:27 ~ IncidentTable ~ data:", data);
  const columns = [
    {
      accessorFn: (row: any) => row?.natureOfIncident,
      id: "natureOfIncident",
      cell: (info: any) => info.getValue(),
      header: "Nature Of Incident",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row.incidentDate,
      id: "incidentDate",
      // cell: (info: any) => {
      //   return <Box>{dayjs(info.getValue()).format("DD MMM YYYY")}</Box>;
      // },
      cell: (info: any) => dayjs(info.getValue()).format("MM/DD/YYYY") ?? "-",
      header: "Date of Incident",
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.status,
      id: "status",
      cell: (info: any) => info.getValue(),
      header: "Status",
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
                pathname: activepath,
                query: {
                  action: "edit",
                  id: info?.row?.original?.id,
                  fosterChildId: fosterChildId,
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
                pathname: activepath,
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
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ borderRadius: "8px" }}>
            <Box sx={{ p: 1 }}>
              <Box sx={{ mb: 0.5 }}>
                <TableHeader
                  // ref={tableHeaderRefTwo}
                  title="Incident"
                  searchKey="search"
                  showAddBtn
                  onAdd={() => {
                    router.push({
                      pathname: activepath,
                      query: { action: "add", fosterChildId: fosterChildId },
                    });
                  }}
                  onChanged={(event: any) => {
                    setSearch(event.search);
                  }}
                />
              </Box>
              <CustomTable
                // data={data?.absence_details}
                data={data?.data?.incidents}
                columns={columns}
                isLoading={isLoading}
                isFetching={isFetching}
                isError={isError}
                isSuccess={isSuccess}
                currentPage={data?.data?.metameta?.page}
                totalPages={data?.data?.metameta?.pages}
                onPageChange={pageChangeHandler}
                onSortByChange={sortChangeHandler}
                isPagination={true}
                showSerialNo={true}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
};

export default IncidentTable;
