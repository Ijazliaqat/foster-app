import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import TableAction from "@root/components/TableAction";
import { Box } from "@mui/material";
import { useRouter } from "next/router";
import SubstituteCarerTable from "@root/sections/carer-info/substitute-cares/SubstituteCarerTable";
import {
  useDeleteSubstituteCarerMutation,
  useGetSelectedSubstituteCarerQuery,
} from "@root/services/carer-info/substitute-carers/substituteCarerApi";
import usePath from "@root/hooks/usePath";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

// ----------------------------------------------------------------------

const PAGE_TITLE = "Respite Carer";

RespiteCarer.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export default function RespiteCarer() {
  const { makePath } = usePath();
  const router = useRouter();
  const id = router?.query?.fosterCarerId;

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Carer Info",
      href: makePath({
        path: "/carer-info",
      }),
    },
    {
      name: "Respite Carer",
      href: "/carer-info/substitute-cares/respite-carer",
    },
  ];
  const { data, isSuccess, isLoading, isError } =
    useGetSelectedSubstituteCarerQuery({
      limit: "10",
      offset: "0",
      type: "RC",
    });
  const [deleteHandler, status] = useDeleteSubstituteCarerMutation();

  const title = "Respite Carer List";
  const FORMROUTE = `/carer-info/substitute-cares/respite-carer/respite-carer-details?fosterCarerId=${id}`;

  const columns = [
    {
      accessorFn: (row: any) => row["firstName"],
      id: "firstName",
      cell: (info: any) => info.getValue(),
      header: () => <span>Name</span>,
    },
    {
      accessorFn: (row: any) => row["telephone"],
      id: "telephone",
      cell: (info: any) => info.getValue(),
      header: () => <span>Phone Number</span>,
    },
    {
      accessorFn: (row: any) => row["level"],
      id: "level",
      // to be changed later
      cell: (info: any) => (info.getValue() ? "Level 1" : "Level 2"),
      header: () => <span>Level</span>,
    },
    {
      accessorFn: (row: any) => row["status"],
      id: "status",
      cell: (info: any) => info.getValue(),
      header: "Status",
    },
    {
      accessorFn: (row: any) => row["familyDetails"],
      id: "familyDetails",
      cell: (info: any) => info.getValue(),
      header: "familyDetails",
    },
    {
      id: "actions",
      cell: (info: any) => (
        <Box sx={{ display: "flex", gap: "5px", justifyContent: "center" }}>
          <TableAction
            type="edit"
            onClicked={() => {
              router.push(`${FORMROUTE}&carerId=${info.row.original.id}`);
            }}
            size="small"
          />
          <TableAction
            type="delete"
            onClicked={() => {
              deleteHandler(info.row.original);
            }}
            size="small"
          />
          <TableAction
            type="view"
            onClicked={() => viewDetailsHandler(info.row.original)}
            size="small"
          />
        </Box>
      ),
      header: "Actions",
      isSortable: false,
    },
  ];
  const tableData = [
    {
      name: "test Name",
      phone: "090078601",
      level: "Level 1",
      status: "Living",
      familyDetails: "18 siblings",
    },
  ];
  // const status = {
  //   isLoading: false,
  //   isFetching: false,
  //   isError: false,
  //   isSuccess: true,
  // };
  const meta = {
    page: "1",
    pages: "1",
  };

  const viewDetailsHandler = (item: any) => {
    router.push(`${FORMROUTE}&carerId=${item.id}&view=true`);
  };
  const searchTextHandler = (item: any) => {
    console.log(item);
  };
  const pageChangeHandler = (item: any) => {
    console.log(item);
  };
  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <SubstituteCarerTable
        columns={columns}
        // tableData={tableData}
        // meta={meta}
        tableData={data?.data?.carers}
        meta={data?.data?.meta}
        title={title}
        searchedText={searchTextHandler}
        apiStatus={{ isSuccess, isLoading, isError }}
        onPageChange={pageChangeHandler}
        route={FORMROUTE}
      />
    </>
  );
}
