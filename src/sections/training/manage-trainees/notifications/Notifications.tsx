import React from 'react'
import useNotifications from './useNotifications'
import CustomHorizaontalTab from '@root/components/customTabs'
import TrainingClockEngineTable from './training-clock-engine-tab/TrainingClockEngineTable'
import NotificationTable from './notification-settings-tab/NotificationTable'

const Notifications = () => {
    const { currentTab,setCurrentTab}= useNotifications();
    const tabsArray = [
        "Training Clock Engine",
        "Notification Settings",
      ];
  return (
    <CustomHorizaontalTab
        tabsArray={tabsArray}
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}>
        <TrainingClockEngineTable />
        <NotificationTable/>
      </CustomHorizaontalTab>
  )
}

export default Notifications