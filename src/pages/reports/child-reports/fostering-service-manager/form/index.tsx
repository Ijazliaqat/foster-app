
import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import FosteringServiceManagerForm from "@root/sections/reports/child-reports/fostering-service-manager/fostering-service-manager-form/FosteringServiceManagerForm";

const PAGE_TITLE = "Fostering Service Manager Report";

FosteringServiceManagerLayout.getLayout = function getLayout(page: any) {
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
          name: "Child Reports",
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ---------------------------------------------------------------------- 

export default function FosteringServiceManagerLayout() {
    const router = useRouter();
    const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
     <FosteringServiceManagerForm action={action} id={id}/>
    </Page>
  );
}
