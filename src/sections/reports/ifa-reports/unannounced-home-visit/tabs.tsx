import HorizaontalTabs from '@root/components/HorizaontalTabs'
import React from 'react'
import ViewUnannoucedHomeVisit from './unannounced-home-visit-form/ViewUnannoucedHomeVisit'
import UnannouncedHomeVisitUploadDocuments from './upload-documents/UploadDocuments'

const TabsSection = ({action}:any) => {
  return (
    <HorizaontalTabs
      tabsDataArray={["Unannounced Home Visit", "Upload Documents"]}
    >
      <ViewUnannoucedHomeVisit action={action} />
      <UnannouncedHomeVisitUploadDocuments />
    </HorizaontalTabs>
  )
}

export default TabsSection