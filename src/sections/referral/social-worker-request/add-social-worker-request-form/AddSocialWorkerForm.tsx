import React from "react";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import PersonalInfo from "./personal-info/PersonalInfo";
import ApprovedDetails from "./approved-details/ApprovedDetails";
import UploadDocument from "./social-worker-upload-document/UploadDocument";
import { useAddSocialWorkerFom } from "./useAddSocialWorkerFom";
import CustomHorizaontalTab from "@root/components/customTabs";

const AddSocialWorkerForm = ({ action }: any) => {
  const { handlePreviousTab, currentTab, handleTabChange } =
    useAddSocialWorkerFom();
  return (
    <CustomHorizaontalTab
      currentTab={currentTab}
      setCurrentTab={handleTabChange}
      tabsArray={["Personal Info", "Approved Details", "Upload Documents"]}
    >
      <PersonalInfo message="Added" action={action} />
      <ApprovedDetails
        message="Added"
        action={action}
        handleBack={handlePreviousTab}
      />
      <UploadDocument />
    </CustomHorizaontalTab>
  );
};

export default AddSocialWorkerForm;
