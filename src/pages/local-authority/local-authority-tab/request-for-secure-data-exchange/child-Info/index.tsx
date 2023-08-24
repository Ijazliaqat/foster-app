import { Card } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import Layout from "@root/layouts";
import ChildInfo from "@root/sections/local-authority/request-for-secure-data-exchange/approved-request/childInfo/ChildInfo";

const PAGE_TILE = "Child Info";

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
      <ChildInfo />
    </Page>
  );
}
