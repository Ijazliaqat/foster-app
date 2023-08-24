import React, { useState } from 'react'

export const useCampaigns = () => {
    const [currentTab, setCurrentTab] = useState(0);
    const handleTabChange = (value: any) => setCurrentTab(value);
    return {
      currentTab,
      handleTabChange
    };
}
