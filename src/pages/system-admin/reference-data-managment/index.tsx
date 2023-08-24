import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import ReferenceDataManagement from "@root/sections/system-admin/reference-data-managment/ReferenceDataManagement";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "System Admin",
    href: "/system-admin",
  },
  {
    name: "Reference Data Managment",
    href: "",
  },
];

const PAGE_TITLE = "Reference Data Managment";
DataManagment.getLayout = function getLayout(page: any) {
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
export default function DataManagment() {
  return (
    <Page title={PAGE_TITLE}>
      <ReferenceDataManagement />
    </Page>
  );
}
