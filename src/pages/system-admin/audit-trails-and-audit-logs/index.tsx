import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import AuditLogs from "@root/sections/system-admin/audit-trails-and-audit-logs/AuditLogs";

// Constants

const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "System Admin",
    href: "/system-admin",
  },
  {
    name: "Audit Trails And Audit Logs",
    href: "",
  },
];

const PAGE_TITLE = "Audit Trails And Audit Logs";
AuditTrailsAndAuditLogs.getLayout = function getLayout(page: any) {
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
export default function AuditTrailsAndAuditLogs() {
  return (
    <Page title={PAGE_TITLE}>
      <AuditLogs />
    </Page>
  );
}
