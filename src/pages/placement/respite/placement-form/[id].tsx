import React from "react";

import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { useRouter } from "next/router";
import RespitePlacementForm from "@root/sections/matching-and-placement/placement/respite-placement/respite-placement-form/RespitePlacementForm";

const PAGE_TILE = "Child Respite";

AddPlacementForm.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={[
        {
          icon: <HomeIcon />,
          name: "Child Respite List",
          href: "/placement/respite",
        },
        {
          name: "Child Respite",
        },
      ]}
      title={PAGE_TILE}
    >
      {page}
    </Layout>
  );
};

export default function AddPlacementForm() {
  const router = useRouter();
  const { action, id } = router.query;
  return (
    <Page title={PAGE_TILE}>
      <RespitePlacementForm action={action} id={id} />
    </Page>
  );
}
