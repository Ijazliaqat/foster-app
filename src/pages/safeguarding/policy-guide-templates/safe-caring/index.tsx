import Layout from '@root/layouts';
import React, { useRef } from 'react'
import HomeIcon from "@mui/icons-material/Home";
import Page from '@root/components/Page';
import SafeCaring from '@root/sections/safeguarding/policy-guide-templates/safe-caring/SafeCaring';


const PAGE_TITLE = "Safe Caring Policy List";

SafeCaringLayout.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Safeguarding Panel",
          href: "/safeguarding",
        },
        {
          name: "Safe Caring Policy List",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
export default function SafeCaringLayout() {
  return (
    <Page title={PAGE_TITLE}>
        <SafeCaring />
    </Page>
  );
}

