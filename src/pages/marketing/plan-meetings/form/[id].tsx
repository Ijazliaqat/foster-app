import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import MarketingPlanMeetingForm from "@root/sections/marketing/marketing-plan-meetings/form/MarketingPlanMeetingForm";

const PAGE_TITLE = "Marketing Plan Meetings";

MarketingPlanMeetingLayoutForm.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Merketing",
          href: "/marketing",
        },
        {
          name: "Marketing",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function MarketingPlanMeetingLayoutForm() {
  const router = useRouter();
  const { id } = router.query;

  return (
    <Page title={PAGE_TITLE}>
      <MarketingPlanMeetingForm id={id}/>
    </Page>
  );
}
