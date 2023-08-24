import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import FAQs from "@root/sections/system-admin/manage-FAQs/FAQs";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "System Admin",
    href: "/system-admin",
  },
  {
    name: "Manage FQAs",
    href: "",
  },
];

const PAGE_TITLE = "Manage FQAs";
ManageFQAs.getLayout = function getLayout(page: any) {
  return (
    <Layout showTitleWithBreadcrumbs breadcrumbs={BREADCRUMBS} title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};
export default function ManageFQAs() {
  return (
    <Page title={PAGE_TITLE}>
      <FAQs />
    </Page>
  );
}
