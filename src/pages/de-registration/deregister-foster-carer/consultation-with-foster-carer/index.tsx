import React from "react";
import Layout from "@root/layouts";
import Page from "@root/components/Page";
import HomeIcon from "@mui/icons-material/Home";
import ConsultationWithFosterCarerTable from "@root/sections/de-registration/deregister-foster-dashboard/dereg-assessment-stage-carer/consultation-with-foster-carer/ConsultationWithFosterCarerTable";

const PAGE_TILE = "De-Registration";

ConsultationFosterCarer.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "De-reg Assessment Stage 1",
          href: "/de-registration",
        },
        {
          name: "Consultation with foster carer",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function ConsultationFosterCarer() {
  return (
    <Page title={PAGE_TILE}>
     <ConsultationWithFosterCarerTable/>
    </Page>
  );
}
