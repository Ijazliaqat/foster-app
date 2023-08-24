import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { Stack } from "@mui/material";
import FosterCarerListTable from "@root/sections/foster-carer-list/FosterCarerListTable";
import FosterCarerTaskTable from "@root/sections/foster-carer-list/FosterCarerTaskTable";

// ----------------------------------------------------------------------

const PAGE_TITLE = "Foster Carer List";

// ----------------------------------------------------------------------

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Dashboard",
    href: "/",
  },
  {
    name: PAGE_TITLE,
    href: "",
  },
];

// ----------------------------------------------------------------------

FosterCarerList.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};

// ----------------------------------------------------------------------

export default function FosterCarerList() {
  return (
    <Page title={PAGE_TITLE}>
      <Stack direction={"column"} spacing={5}>
        <FosterCarerListTable />
        <FosterCarerTaskTable />
      </Stack>
    </Page>
  );
}
