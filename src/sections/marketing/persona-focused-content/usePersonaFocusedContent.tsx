import { useState } from "react";

export const usePersonaFocusedContent = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleTabChange = (value: any) => setCurrentTab(value);
  return {
    currentTab,
    handleTabChange
  };
};
