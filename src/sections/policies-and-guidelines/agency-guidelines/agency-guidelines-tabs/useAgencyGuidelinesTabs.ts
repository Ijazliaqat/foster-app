import { usePolicyVerticalAddNew } from "@root/components/policy-vertical-tabs/policy-vertical-form/policy-vertical-add-form/usePolicyVerticalAddForm";
import { useRouter } from "next/router";
import { useState } from "react";

export const useAgencyGuidelinesTabs = () => {
  const { currentTab, setCurrentTab, handleNextTab, handlePreviousTab, reset } = usePolicyVerticalAddNew();
  const [isUploadDocumentOpenModal, setIsUploadDocumentOpenModal] = useState(false);
  const [isDeleteOpenModal, setIsDeleteOpenModal] = useState(false);
  const [actionView, setActionView] = useState<any>()
  const [count, setCount] = useState(0);
  const route = useRouter();

  console.log("actionView",actionView)

  const handleSubmit = (data: any) => {
    handleNextTab();
    reset();
  };

  const handleUploadedSubmit = () => {
    if (count === 1) {
      route.push("/policies-and-guidelines/agency-guidelines");
    } else {
      setIsUploadDocumentOpenModal(true);
    }
  };

  return {
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
    actionView
  };
};
