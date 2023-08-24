import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import PermanentFosteringForm from "@root/sections/reports/carer-report/permanent-fostering-reports/permanent-fostering-form/PermanentFosteringForm";

const PAGE_TITLE = "Permanent Fostering Reports";

PermanentFosteringLayout.getLayout = function getLayout(page: any) {
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
          name: "Permanent Fostering Reports List",
       
        },
      
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function PermanentFosteringLayout() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <PermanentFosteringForm action={action} id={id}/>
    </Page>
  );
}
