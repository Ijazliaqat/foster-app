import CustomHorizaontalTab from "@root/components/customTabs";
import React from "react";
import { uploadDocumentData } from ".";
import UploadDocumentModal from "@root/components/modal/UploadDocumentModal/UploadDocumentModal";
import DeleteModel from "@root/components/modal/DeleteModel";
import { useAgencyGuidelinesTabs } from "./useAgencyGuidelinesTabs";
import PolicyVerticalUploadDocument from "@root/components/policy-vertical-tabs/policy-vertical-form/PolicyVerticalUploadDocument";
import PolicyVerticalAddNew from "@root/components/policy-vertical-tabs/policy-vertical-form/policy-vertical-add-form/PolicyVerticalAddForm";

const AgencyGuidelinesTabs = () => {
  const {
    currentTab,
    setCurrentTab,
    handlePreviousTab,
    isUploadDocumentOpenModal,
    isDeleteOpenModal,
    setCount,
    handleSubmit,
    handleUploadedSubmit,
    setIsUploadDocumentOpenModal,
    setIsDeleteOpenModal,
    count,
    route,
    actionView,
  } = useAgencyGuidelinesTabs();

  return (
    <>
      <CustomHorizaontalTab
        tabsArray={[
          `${
            route.query.action === "add" || route.query.action === "view"
              ? route.query.name
              : "Add New Policy"
          }`,
          "Upload document",
        ]}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        isDisabled={true}
      >
        <PolicyVerticalAddNew
          onSubmit={handleSubmit}
          handleAddNewBack={"/policies-and-guidelines/agency-guidelines"}
        />

        <PolicyVerticalUploadDocument
          data={uploadDocumentData}
          addUploadDocument={() => setIsUploadDocumentOpenModal(true)}
          handleSubmit={handleUploadedSubmit}
          isUploadBackBtn={count === 1 && true}
          handleBackBtn={() => handlePreviousTab()}
          handleDelete={() => setIsDeleteOpenModal(true)}
          handleView={() => {
            setIsUploadDocumentOpenModal(true);
          }}
        />
      </CustomHorizaontalTab>

      <UploadDocumentModal
        open={isUploadDocumentOpenModal}
        handleClose={() => setIsUploadDocumentOpenModal(false)}
        isHideSubmitButton={actionView !== "view" ? true : false}
        disabled={actionView === "view" ? true : false}
        onSubmit={() => {
          setIsUploadDocumentOpenModal(false);
          setCount(1);
        }}
      />

      <DeleteModel
        open={isDeleteOpenModal}
        handleClose={() => setIsDeleteOpenModal(false)}
      />
    </>
  );
};

export default AgencyGuidelinesTabs;
