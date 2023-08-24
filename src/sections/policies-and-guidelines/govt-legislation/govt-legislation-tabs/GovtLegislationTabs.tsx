import React from "react";
import PolicyVerticalAddNew from "@root/components/policy-vertical-tabs/policy-vertical-form/policy-vertical-add-form/PolicyVerticalAddForm";
import CustomHorizaontalTab from "@root/components/customTabs";
import { useGovtLegislationTabs } from "./useGovtLegislationTabs";
import DeleteModel from "@root/components/modal/DeleteModel";
import AddWebsiteUrlModal from "../AddUrlModal/AddUrlModal";

const GovtLegislationsTabs = () => {
  const {
    route,
    currentTab,
    setCurrentTab, 
    isDeleteOpenModal,
    setIsDeleteOpenModal,
    isAddUrlModalOpen,
    setIsAddUrlModalOpen,
    handleSubmit,
    handlePreviousTab,
    handleAddUrlSubmit, 
  } = useGovtLegislationTabs();

  return (
    <>
      <CustomHorizaontalTab
        tabsArray={[
          `${
            route?.query?.action === "add" || route?.query?.action === "view"
              ? route?.query?.name
              : "Add New Policy"
          }`,
          "Add Website URL",
        ]}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        // isDisabled={true}
      >
        <PolicyVerticalAddNew
          onSubmit={handleSubmit}
          handleAddNewBack={"/policies-and-guidelines/govt-legislations"}
        />
        <AddWebsiteUrlModal
          onSubmit={handleAddUrlSubmit}
          back={handlePreviousTab}
          open={isAddUrlModalOpen}
          handleClose={() => setIsAddUrlModalOpen(false)}
        />
      </CustomHorizaontalTab>

      <DeleteModel open={isDeleteOpenModal} handleClose={() => setIsDeleteOpenModal(false)} />
    </>
  );
};

export default GovtLegislationsTabs;
