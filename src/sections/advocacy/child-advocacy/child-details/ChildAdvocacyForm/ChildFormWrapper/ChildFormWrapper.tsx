import React from 'react'
import ChildForm from './ChildForm'
import UploadMeetingRecordings from './UploadMeetingRecordings/UploadMeetingRecordings'
import HorizaontalTabs from '@root/components/HorizaontalTabs'

const ChildFormWrapper = () => {
  return (
    <HorizaontalTabs tabsDataArray={["Advocacy Form to be Filled by Child", "Upload the Meeting Recording"]}>
      <ChildForm />
      <UploadMeetingRecordings />
    </HorizaontalTabs>
  )
}

export default ChildFormWrapper