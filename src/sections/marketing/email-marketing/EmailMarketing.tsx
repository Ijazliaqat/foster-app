import CustomHorizaontalTab from '@root/components/customTabs'
import React from 'react'
import { useEmailMarketing } from './useEmailMarketing'
import EmailTab from './email-tab/EmailTab'
import BranchTab from './branch-tab/BranchTab'
import ListsTab from './lists-tab/ListsTab'

const EmailMarketing = () => {
  const {currentTab , handleTabChange} = useEmailMarketing()
  return (
    <CustomHorizaontalTab
    currentTab={currentTab}
    setCurrentTab={handleTabChange}
    tabsArray={["Emails", "Branch", "Lists"]}
  >
    <EmailTab />
    <BranchTab />
    <ListsTab />
  </CustomHorizaontalTab>
  )
}

export default EmailMarketing