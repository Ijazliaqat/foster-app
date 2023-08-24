import { useState } from "react";

export const useFosterCarerReport = () => {

  const [currentTab, setCurrentTab] = useState(0);
  const handleTabChange = (current: number) => setCurrentTab(current);
  const handleNextTab = () => setCurrentTab(currentTab + 1)

  return {
    handleTabChange,
    handleNextTab,
    currentTab
  }
}