import { usePolicyVerticalAddNew } from "@root/components/policy-vertical-tabs/policy-vertical-form/policy-vertical-add-form/usePolicyVerticalAddForm";
import { useRouter } from "next/router";
import { useState } from "react";

export const useOrganisationalPoliciesTabs = () => {
  const { currentTab, setCurrentTab, handleNextTab, handlePreviousTab, reset } = usePolicyVerticalAddNew();
  const [isUploadDocumentOpenModal, setIsUploadDocumentOpenModal] = useState(false);
  const [isDeleteOpenModal, setIsDeleteOpenModal] = useState(false);
  const [actionView, setActionView] = useState<any>()
  const [count, setCount] = useState(0);
  const route = useRouter();
  console.log(actionView)

  const handleSubmit = (data: any) => {
    handleNextTab();
    reset();
  };

  const handleUploadedSubmit = () => {
    if (count === 1) {
      route.push("/policies-and-guidelines/organisational-policies/");
    } else {
      setIsUploadDocumentOpenModal(true);
    }
  };

  const handleAction = (action: any, id: any) => {
    switch (action) {
      case "delete":
        setIsDeleteOpenModal(true);
        break;
      case "view":
        setIsUploadDocumentOpenModal(true);
        setActionView(action)
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
    isUploadDocumentOpenModal,
    isDeleteOpenModal,
    setCount,
    handleSubmit,
    handleUploadedSubmit,
    handleAction,
    setIsUploadDocumentOpenModal,
    setIsDeleteOpenModal,
    count,
    route,
    actionView
  };
};
