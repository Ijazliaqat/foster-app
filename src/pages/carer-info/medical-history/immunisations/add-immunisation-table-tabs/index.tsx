import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Layout from "@root/layouts";
import HomeIcon from "@mui/icons-material/Home";
import { ImmunisationInfoTab } from "@root/sections/carer-info/medical-history/immunisations/immunisations-table/add-immunisation-table-tabs/immunisations-info-tab/ImmunisationInfoTab";
import { UploadDocumentsTable } from "@root/sections/carer-info/medical-history/immunisations/immunisations-table/add-immunisation-table-tabs/upload-documents-tab/UploadDocumentsTable";
import React, { useState } from "react";

export default function AddImmunisationsTableTabs() {
  const [breadCrumbData, setBreadCrumbData] = useState("Immunisation Info");

  const tabsData = ["Immunisations Info", "Upload Documents"];
  const BREADCRUMBS = [
    {
      icon: <HomeIcon />,
      name: "Immunisation List",
      href: "/carer-info/medical-history/immunisations/",
    },
    {
      name: "Immunization",
    },
  ];
  return (
    <Layout
      showTitleWithBreadcrumbs
      breadcrumbs={BREADCRUMBS}
      title={breadCrumbData}
    >
      <HorizaontalTabs tabsDataArray={tabsData}>
        <ImmunisationInfoTab breadCrumbData={setBreadCrumbData} />
        <UploadDocumentsTable breadCrumbData={setBreadCrumbData} />
      </HorizaontalTabs>
    </Layout>
  );
}
