import HomeIcon from "@mui/icons-material/Home";
import { Paper } from "@mui/material";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import Layout from "@root/layouts";
import ClaDocumentationListTable from "@root/sections/foster-child/child-background-info/cla-documentation-list/ClaDocumentationTable";
import { useRouter } from "next/router";

// ----------------------------------------------------------------------

// Constants
const BREADCRUMBS = (query: any) => [
  {
    icon: <HomeIcon />,
    name: "Child Info",
    href: `/foster-child/child-background-info/cla-documentation?fosterChildId=${query}`,
  },
  {
    name: "CLA Documentation List",
    href: "",
  },
];

const PAGE_TITLE = "CLA Documentation";
// ----------------------------------------------------------------------

ClaDocumentationList.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ClaDocumentationList() {
  const router = useRouter();
  console.log(router, "sadfsadfasdfsadfasdf")
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS(router?.query?.fosterChildId)}
        title={PAGE_TITLE}
      />
      <Paper elevation={3}>
        <ClaDocumentationListTable
          fosterChildId={router?.query?.fosterChildId}
        />
      </Paper>
    </Page>
  );
}
