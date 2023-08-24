import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import SessionSettings from "@root/sections/system-admin/session-settings/SessionSettings";
// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "System Admin",
    href: "/system-admin",
  },
  {
    name: "Session Settings",
    href: "",
  },
];

const PAGE_TITLE = "Session Settings";
Settings.getLayout = function getLayout(page: any) {
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
export default function Settings() {
  return (
    <Page title={PAGE_TITLE}>
      <SessionSettings />
    </Page>
  );
}
