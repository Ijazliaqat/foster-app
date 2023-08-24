import HorizaontalTabs from '@root/components/HorizaontalTabs'
import React from 'react'
import UploadMeetingRecordings from './UploadMeetingRecordings/UploadMeetingRecordings'
import CreateAdvocacyForm from './CreateAdvocacyForm'

const CreateAdvocacyFormWrapper = () => {
    return (
        <HorizaontalTabs tabsDataArray={["Advocacy Form Filled by Someone Else", "Upload the Meeting Recording"]}>
            <CreateAdvocacyForm />
            <UploadMeetingRecordings />
        </HorizaontalTabs>
    )
}

export default CreateAdvocacyFormWrapper