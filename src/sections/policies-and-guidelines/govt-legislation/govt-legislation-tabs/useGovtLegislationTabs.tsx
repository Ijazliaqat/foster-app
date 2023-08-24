import { usePolicyVerticalAddNew } from "@root/components/policy-vertical-tabs/policy-vertical-form/policy-vertical-add-form/usePolicyVerticalAddForm";
import { useRouter } from "next/router";
import { useState } from "react";

export const useGovtLegislationTabs = () => {
  const { currentTab, setCurrentTab, handleNextTab, handlePreviousTab, reset } =
    usePolicyVerticalAddNew();
  const [isAddUrlModalOpen, setIsAddUrlModalOpen] = useState(false);
  const [isDeleteOpenModal, setIsDeleteOpenModal] = useState(false);
  const route = useRouter();

  const handleSubmit = (data: any) => {
    handleNextTab();
    setIsAddUrlModalOpen(true);
    reset();
  };

  const handleAddUrlSubmit = () => {
    route.push("/policies-and-guidelines/govt-legislations");
  };

  const handleAction = (action: any, id: any) => {
    switch (action) {
      case "delete":
        setIsDeleteOpenModal(true);
        break;
      default:
        break;
    }
    console.log(id);
  };
  return {
    currentTab,
    setCurrentTab,
    handlePreviousTab,
    isDeleteOpenModal,
    isAddUrlModalOpen,
    setIsAddUrlModalOpen,
    handleSubmit,
    handleAddUrlSubmit,
    handleAction,
    setIsDeleteOpenModal,
    route,
  };
};
