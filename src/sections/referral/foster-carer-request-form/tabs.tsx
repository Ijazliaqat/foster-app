import HorizaontalTabs from "@root/components/HorizaontalTabs";
import React from "react";
import { useFosterCarerRequest } from "./useFosterCarerRequest";
import { PesonalInfoForm } from "./personal-info-form";
import { ApprovedDetailsForm } from "./approved-details-form";
import UploadDocTable from "./upload-documents/UploadDocTable";
import CustomHorizaontalTab from "@root/components/customTabs";

const TabsSection = ({ action }: any) => {
  const { handlePreviousTab, currentTab, handleTabChange } =
    useFosterCarerRequest();
  return (
    <CustomHorizaontalTab
      currentTab={currentTab}
      setCurrentTab={handleTabChange}
      tabsArray={["Personal Info", "Approved Details", "Upload Documents"]}
    >
      <PesonalInfoForm action={action} />
      <ApprovedDetailsForm action={action} handleBack={handlePreviousTab} />
      <UploadDocTable action={action} />
    </CustomHorizaontalTab>
  );
};

export default TabsSection;
