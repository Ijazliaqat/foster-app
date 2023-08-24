import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import AnnualReviewA from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/annual-review-A/AnnualReviewA";
import { AnnualReviewB } from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/annual-review-B";
import AnnualReviewC from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/annual-review-C/AnnualReviewC";
import { AnnualReviewD } from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/annual-review-D";
import AnnualReviewE from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/annual-review-E/AnnualReviewE";
import PlacementReview from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/placement-review/PlacementReview";
import Documents from "@root/sections/carer-info/personal-info/chronology-of-events/annual-review/documents/Documents";
import { useRouter } from "next/router";
import { TitleWithBreadcrumbLinks } from "@root/components/PageBreadcrumbs";

AnnualReview.getLayout = function getLayout(page: any) {
  return <Layout showTitleWithBreadcrumbs={false}>{page}</Layout>;
};

export default function AnnualReview() {
  const router: any = useRouter();
  const { action, id, fosterCarerId } = router.query;
  if (!action && !id) {
    router.push({
      pathname: "/carer-info/personal-info/carer-chronology-of-events",
      query: { fosterCarerId: fosterCarerId },
    });
  }

  // Constants
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Review List",
      href: {
        pathname: "/carer-info/personal-info/carer-chronology-of-events",
        query: { fosterCarerId: fosterCarerId },
      },
    },
    {
      name: "Annual Review",
      href: "",
    },
  ];

  const PAGE_TITLE = "Annual Review";

  return (
    <>
      <TitleWithBreadcrumbLinks
        sx={{ mb: 2 }}
        breadcrumbs={BREADCRUMBS}
        title={PAGE_TITLE}
      />
      <HorizaontalTabs
        tabsDataArray={[
          "Annual Review A",
          "Annual Review B",
          "Annual Review C",
          "Annual Review D",
          "Annual Review E",
          "Placement Review",
          "Documents",
        ]}
      >
        {/* Annual Review A Component */}
        <AnnualReviewA action={action} id={id} />
        {/* Annual Review B Component */}
        <AnnualReviewB action={action} id={id} />
        {/* Annual Review C Component */}
        <AnnualReviewC />
        {/* Annual Review D Component */}
        <AnnualReviewD />
        {/* Annual Review E Component */}
        <AnnualReviewE />
        {/* Placement Review Component */}
        <PlacementReview />
        {/* Documents Component */}
        <Documents />
      </HorizaontalTabs>
    </>
  );
}
