import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { Card, useTheme } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import PendingRequest from "@root/sections/local-authority/request-for-secure-data-exchange/pending-request/PendingRequest";
import ApprovedRequestTable from "@root/sections/local-authority/request-for-secure-data-exchange/approved-request/ApprovedRequestTable";

const PAGE_TILE = "Secure Data Exchange";

const dynamicTitle = (pageTitle: any) => {
  console.log("pageTitle", pageTitle);
};

SecureDataExchange.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Local Authority",
          href: "/local-authority",
        },
        {
          name: "Secure Data Exchange",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function SecureDataExchange() {
  return (
    <Page title={PAGE_TILE}>
      <Card sx={{ p: 2 }}>
        <HorizaontalTabs
          tabsDataArray={["Pending Request", "Approved Request"]}
        >
          <PendingRequest />
          <ApprovedRequestTable />
        </HorizaontalTabs>
      </Card>
    </Page>
  );
}
