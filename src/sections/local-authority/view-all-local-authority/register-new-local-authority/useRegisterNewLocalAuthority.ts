import { useState } from "react";

export const useRegisterNewLocalAuthority = () => {
  const [currentTab, setCurrentTab] = useState(0);

  const handleNextTab = () => setCurrentTab(currentTab + 1);
  const handlePreviousTab = () => setCurrentTab(currentTab - 1);
  return {
    handleNextTab,
    handlePreviousTab,
    currentTab,
    setCurrentTab
  };
};
