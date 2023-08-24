import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import AddFosteringServiceManagerReport from "@root/sections/reports/ifa-reports/FR-H/add-fostering-service-manager-report/AddFosteringServiceManagerReport";

const PAGE_TITLE = "Reports";

FRH.getLayout = function getLayout(page: any) {
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
          href: "/reports/ifa-reports/FR-H-fostering-service-manager",
        },
        {
          name:"FR-H Fostering Service Manager Report"
        },
      ]}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
// ----------------------------------------------------------------------

export default function FRH() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
      <AddFosteringServiceManagerReport action={action} id={id} />
    </Page>
  );
}
