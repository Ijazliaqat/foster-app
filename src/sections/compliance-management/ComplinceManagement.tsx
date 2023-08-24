import React from 'react'
import ComplianceVericalTabs from './ComplianceTabs';
import { ComplianceTabsData } from '.';

const ComplinceManagement = () => {
    return (
        <ComplianceVericalTabs tabsDataArray={ComplianceTabsData} />
    )
}

export default ComplinceManagement
