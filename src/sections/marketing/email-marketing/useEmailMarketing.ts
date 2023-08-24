import React from 'react'
import { useState } from "react";
export const useEmailMarketing = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const handleTabChange = (value: any) => setCurrentTab(value);
    return {
      currentTab,
      handleTabChange
    };
}
