import usePath from "@root/hooks/usePath";
import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import Page from "@root/components/Page";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";
import { ClaReviewTable } from "@root/sections/foster-child/other-information/cla-review";

const PAGE_TITLE = "CLA Review";

ClaReview.getLayout = function getLayout(page: any) {
  return <Layout>{page}</Layout>;
};

export default function ClaReview() {
  const { makePath } = usePath();

  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Child Info",
      href: makePath({
        path: "/foster-child",
      }),
    },
    {
      name: "CLA Reviews List",
      href: "",
    },
  ];
  return (
    <Page title={PAGE_TITLE}>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />

      <ClaReviewTable />
    </Page>
  );
}
