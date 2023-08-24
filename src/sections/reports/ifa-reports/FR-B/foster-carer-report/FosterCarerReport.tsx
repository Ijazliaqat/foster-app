import React from 'react'
import PartA from './part-a/PartA'
import PartB from './part-b/PartB'
import CustomHorizaontalTab from '@root/components/customTabs'
import { useFosterCarerReport } from './useFosterCarerReport'

const FosterCarerReport = ({ action, id }: any) => {
  const disabled = action === 'view' ? true : false;
  const { currentTab, handleTabChange, handleNextTab } = useFosterCarerReport();
  return (
    <CustomHorizaontalTab
      tabsArray={['part a', 'part b']}
      currentTab={currentTab} setCurrentTab={handleTabChange}
    >
      <PartA disabled={disabled} handleNextTab={handleNextTab} />
      <PartB disabled={disabled} />
    </CustomHorizaontalTab>
  )
}

export default FosterCarerReport