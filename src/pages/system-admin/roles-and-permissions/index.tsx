import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import RolesAndPermissions from "@root/sections/system-admin/roles-and-permissions/RolesAndPermissions";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "System Admin",
    href: "/system-admin",
  },
  {
    name: "Roles & Permissions",
    href: "",
  },
];

const PAGE_TITLE = "System Admin";
SystemAdmin.getLayout = function getLayout(page: any) {
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

export default function SystemAdmin() {
  return (
    <Page title={PAGE_TITLE}>
      <RolesAndPermissions />
    </Page>
  );
}
