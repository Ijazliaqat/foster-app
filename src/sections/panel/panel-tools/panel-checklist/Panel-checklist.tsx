import React from 'react';
import { Box } from '@mui/material';
import HorizaontalTabs from '@root/components/HorizaontalTabs';
import PanelChecklistComponent from './panel-case-list-table/panel-case-list-table';
import ChecklistAdditionalInformation from './checklist-additional-information/checklist-additional-information';

const PanelChecklist = () => {
    const tabs = ['Panel Case List', 'Checklist']
    return (
        <Box>
            <HorizaontalTabs tabsDataArray={tabs}>
                <PanelChecklistComponent />
                <ChecklistAdditionalInformation />
            </HorizaontalTabs>
        </Box>
    )
}

export default PanelChecklist