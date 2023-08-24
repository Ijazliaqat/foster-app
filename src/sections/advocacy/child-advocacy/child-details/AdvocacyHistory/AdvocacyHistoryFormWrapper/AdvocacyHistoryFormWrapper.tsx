import HorizaontalTabs from '@root/components/HorizaontalTabs'
import React from 'react'
import AdvocacyHistoryForm from './AdvocacyHistoryForm'
import UploadMeetingRecordings from './UploadMeetingRecordings/UploadMeetingRecordings'

const AdvocacyHistoryFormWrapper = () => {
    return (
        <HorizaontalTabs tabsDataArray={["Advocacy Form", "Upload the Meeting Recording"]}>
            <AdvocacyHistoryForm />
            <UploadMeetingRecordings />
        </HorizaontalTabs>
    )
}

export default AdvocacyHistoryFormWrapper