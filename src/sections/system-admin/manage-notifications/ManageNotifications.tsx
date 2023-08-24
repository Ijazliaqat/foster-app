import React from 'react'
import HorizaontalTabs from '@root/components/HorizaontalTabs'
import CarerNotifications from './carer-notifications/CarerNotifications'
import HRNotifications from './hr-notifications/HRNotifications'
import ChildNotifications from './child-notifications/ChildNotifications'

const ManageNotifications = () => {
    return (
        <HorizaontalTabs tabsDataArray={["Child Notifications", "Carer Notifications", "HR Notifications"]}>
            <ChildNotifications />
            <CarerNotifications />
            <HRNotifications />
        </HorizaontalTabs>
    )
}

export default ManageNotifications