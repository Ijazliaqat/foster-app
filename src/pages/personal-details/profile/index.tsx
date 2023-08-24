import Page from "@root/components/Page";
import Layout from "@root/layouts";
import ProfilePreview from "@root/sections/personal-details/profile-preview/ProfilePreview";
import React from "react";

// Constants

const PAGE_TITLE = "Profile Preview";

// Page Layout
Profile.getLayout = function getLayout(page: any) {
  return (
    <Layout showTitleWithBreadcrumbs hideBreadcrumbs title={PAGE_TITLE}>
      {page}
    </Layout>
  );
};

export default function Profile() {
  return (
    <Page title={PAGE_TITLE}>
      <ProfilePreview />
    </Page>
  );
}
