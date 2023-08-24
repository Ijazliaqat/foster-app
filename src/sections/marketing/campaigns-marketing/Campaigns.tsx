import React from 'react'
import { useCampaigns } from './useCampaigns'
import CustomHorizaontalTab from '@root/components/customTabs'
import AllSetTable from './all-sets-table/AllSetTable'
import ResultsTable from './results-table/ResultsTable'
import CampaignsTable from './campaigns-table/CampaignsTable'

const Campaigns = () => {
    const {currentTab , handleTabChange} = useCampaigns()
    return (
      <CustomHorizaontalTab
      currentTab={currentTab}
      setCurrentTab={handleTabChange}
      tabsArray={["Campaigns", "Ad Sets", "Results",]}
    >
      <CampaignsTable/>
      <AllSetTable/>
      <ResultsTable/>
    </CustomHorizaontalTab>
    )
}

export default Campaigns