import CustomHorizaontalTab from '@root/components/customTabs'
import React from 'react'
import { useEventMarketing } from './useEventMarketing'
import EventTab from './events-tab/EventTab'
import VIPsTab from './vips-tab/VIPsTab'
import Attendance from './attendance-tab/Attendance'
import VenuesTab from './venues-tab/VenuesTab'
import EventCalenderTab from './event-calender-tab/EventCalenderTab'
// import EmailTab from './email-tab/EmailTab'
// import BranchTab from './branch-tab/BranchTab'
// import ListsTab from './lists-tab/ListsTab'

const EventMarketing = () => {
  const {currentTab , handleTabChange} = useEventMarketing()
  return (
    <CustomHorizaontalTab
    currentTab={currentTab}
    setCurrentTab={handleTabChange}
    tabsArray={["Events", "Events Calender", "VIPs", "Attendance", "Venues"]}
  >
    <EventTab />
    <EventCalenderTab />
    <VIPsTab />
    <Attendance />
    <VenuesTab />
  </CustomHorizaontalTab>
  )
}
 
export default EventMarketing