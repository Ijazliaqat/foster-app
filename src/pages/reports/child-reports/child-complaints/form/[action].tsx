import React, { Fragment } from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import { useRouter } from "next/router";
import ChildComplaintForm from "@root/sections/reports/child-reports/child-complaints/child-complaint-form/ChildComplaintForm";

const PAGE_TITLE = "Child Complaints Reports";

ChildComplaintFormLayout.getLayout = function getLayout(page: any) {
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

export default function ChildComplaintFormLayout() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TITLE}>
     <ChildComplaintForm action={action} id={id}/>
    </Page>
  );
}
