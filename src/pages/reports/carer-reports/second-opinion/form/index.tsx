import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import HomeIcon from "@mui/icons-material/Home";
import SecondOpinionForm from "@root/sections/reports/carer-report/second-opinion-reports/second-opinion-form/SecondOpinionForm";

const PAGE_TITLE = "Second Opinion Reports";

SecondOpinionLayout.getLayout = function getLayout(page: any) {
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
          name: "Second Opinion Reports List",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function SecondOpinionLayout() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE} >
     <SecondOpinionForm action={action} id={id}/>
    </Page>
  );
}
