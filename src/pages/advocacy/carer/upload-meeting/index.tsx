import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import UploadMeeting from "@root/sections/advocacy/carer-advocacy/upcoming-meetings/upload-meeting/UploadMeeting";

// ===============================================================================================

const PAGE_TILE = "Upload Meeting";

Panel.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          href: "/advocacy/carer",
        },
        {
          name: "Care Advocacy",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function Panel() {
  return (
    <Page title={PAGE_TILE}>
      <UploadMeeting />
    </Page>
  );
}
