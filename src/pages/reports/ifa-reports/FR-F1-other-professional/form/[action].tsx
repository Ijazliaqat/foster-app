import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import AddOtherProfessionals from "@root/sections/reports/ifa-reports/FR-F1/add-other-professionals/AddOtherProfessionals";

const PAGE_TITLE = "Reports";

FRF1.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Dashboard",
          href: "/dashboard",
        },
        {
          name: "Reports",
          href: "/reports",
        },
        {
          name: "IFA Reports",
          href: "/reports/ifa-reports/FR-F1-other-professional",
        },
        {
          name:"FR-F1: Other Professionals"
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRF1() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <AddOtherProfessionals action={action} id={id} />
    </Page>
  );
}
