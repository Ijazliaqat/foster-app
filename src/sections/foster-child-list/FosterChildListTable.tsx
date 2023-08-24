import { Box, Grid, Paper, Button } from "@mui/material";
import CustomTable from "@root/components/Table/CustomTable";
import TableHeader from "@root/components/TableHeader";
import React from "react";
import { dummy } from ".";
import Image from "next/image";
import router from "next/router";
import { useTableParams } from "@root/hooks/useTableParams";
import { useGetFosterListsQuery } from "@root/services/foster-child/FosterChildApi";

const activepath = "/foster-child";
const FosterChildListTable = () => {
  const { params, headerChangeHandler, pageChangeHandler, sortChangeHandler } =
    useTableParams();
  const { data, isError, isFetching, isLoading, isSuccess } =
    useGetFosterListsQuery({
      params: { ...params },
    });
  console.log(data?.data?.users);
  const tabledata = {};

  const columns = [
    // {
    //   accessorFn: (row: any) => row?.id,
    //   id: "id",
    //   cell: (info: any) => info.getValue() ?? "-",
    //   header: () => <span>Sr.No</span>,
    //   isSortable: false,
    // },
    {
      accessorFn: (row: any) => row.img,
      id: "img",
      cell: (info: any) => (
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          gap={1}
        >
          {info?.row?.original?.profileImage ? (
            <Image
              src={info?.row?.original?.profileImage}
              height={40}
              width={40}
              alt="icon"
            />
          ):"-"}
        </Box>
      ),
      header: () => <span>img</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => `${row?.firstName} ${row?.lastName} `,
      id: "ChildName",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Child Name</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.fosterCarar,
      id: "fosterCarar",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Foster Carar</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.aboutCandidate?.addressDetail?.county,
      id: "Area_locality",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Area/Locality</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.gender,
      id: "gender",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Gender</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.areaOffice,
      id: "areaOffice",
      cell: (info: any) => info.getValue() ?? "-",
      header: () => <span>Area Office</span>,
      isSortable: true,
    },
    {
      accessorFn: (row: any) => row?.details,
      id: "details",
      cell: (info: any) => (
        <Box>
          <Button
            onClick={() => {
              router.push({
                pathname: activepath,
                query: { fosterChildId: info?.row?.original?.id },
              });
            }}
            variant="contained"
            color="primary"
          >
            view Details
          </Button>
        </Box>
      ),
      header: () => <span>details</span>,
      isSortable: false,
    },
  ];
  const SELECT_FILTERS = [
    {
      key: "Select child",
      label: "Select child",
      options: [{ label: "test", value: "test-value" }],
    },
  ];

  return (
    <Box>
      <Grid container>
        <Grid item xs={12}>
          <Paper elevation={2} sx={{ borderRadius: "8px" }}>
            <Box sx={{ p: 1 }}>
              <Box sx={{ mb: 0.5 }}>
                <TableHeader
                  // ref={tableHeaderRefTwo}
                  title="Foster Child List"
                  searchKey="search"
                  showSelectFilters
                  selectFilters={SELECT_FILTERS}
                  onChanged={(e: any) => {}}
                />
              </Box>
              <CustomTable
                data={data?.data?.users ?? []}
                columns={columns}
                isLoading={isLoading}
                isFetching={isFetching}
                isError={isError}
                isSuccess={isSuccess}
                isPagination={true}
                showSerialNo={true}
                // totalPages={data?.data?.pages ?? 0}
                // currentPage={data?.data?.meta?.page ?? 1}
                // onPageChange={pageChangeHandler}
                // onSortByChange={sortChangeHandler}
              />
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default FosterChildListTable;
