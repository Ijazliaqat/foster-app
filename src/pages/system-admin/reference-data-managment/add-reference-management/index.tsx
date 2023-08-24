import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import AddReferenceDataManagement from "@root/sections/system-admin/reference-data-managment/add-reference-data-management/AddReferenceDataManagement";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Reference Data Managment",
    href: "/system-admin/reference-data-managment",
  },
  {
    name: "Dropdown Management",
    href: "",
  },
];

const PAGE_TITLE = "System Administration";
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
      <AddReferenceDataManagement />
    </Page>
  );
}
