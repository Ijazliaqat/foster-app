import Layout from "@root/layouts";
import React from "react";
import HomeIcon from "@mui/icons-material/Home";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import CarerSectionA from "@root/sections/carer-info/personal-info/chronology-of-events/supervisory-visit/carer-section-A/CarerSectionA";
import CarerSectionB from "@root/sections/carer-info/personal-info/chronology-of-events/supervisory-visit/carer-section-B/CarerSectionB";
import UploadDocuments from "@root/sections/carer-info/personal-info/chronology-of-events/supervisory-visit/upload-documents/UploadDocuments";

// Constants
const BREADCRUMBS = [
  {
    icon: <HomeIcon />,
    name: "Supervisory Home Visit List",
    href: "/carer-info/personal-info/carer-chronology-of-events",
  },
  {
    name: "Supervisory Home Visit",
    href: "",
  },
];

const PAGE_TITLE = "Supervisory Home Visit";
SupervisoryVisit.getLayout = function getLayout(page: any) {
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={PAGE_TITLE}
    >
      {page}
    </Layout>
  );
};
export default function SupervisoryVisit() {
  // -------
  return (
    <HorizaontalTabs
      tabsDataArray={["Carer Section A", "Carer Section B", "Upload Documents"]}
    >
      {/* Carer Section A Component */}
      <CarerSectionA />
      {/* Carer Section B Component */}
      <CarerSectionB />
      {/* Upload Documents Component */}
      <UploadDocuments />
    </HorizaontalTabs>
  );
}
