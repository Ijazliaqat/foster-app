import { useState } from "react";

export const useAddSocialWorkerFom = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleTabChange = (value: any) => setCurrentTab(value);
  const handleNextTab = () => setCurrentTab(currentTab + 1);
  const handlePreviousTab = () => setCurrentTab(currentTab - 1);

  return {
    handleNextTab,
    handlePreviousTab,
    currentTab,
    handleTabChange,
  };
};
