import { useState } from "react";

export const useChildAbuseManagement = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const handleNextTab = () => setCurrentTab(currentTab + 1);
  const handlePrevoiusTab = () => setCurrentTab(currentTab - 1);
  const handleTabChange = (curr: number) => setCurrentTab(curr);
  const tabArray = (isCriminal: boolean) => [
    isCriminal ? 'Child Criminal Exploitation' : 'Child Sexual Exploitation',
    'CE - Child Details',
    'CE - Child Notifications',
    'Upload Documents'
  ];

  return {
    currentTab,
    tabArray,
    handleNextTab,
    handlePrevoiusTab,
    handleTabChange
  }
}