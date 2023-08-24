import React from 'react'
import ChildSexualExploitation from '../child-sexual-exploitation-management/ChildSexualExploitationManagement';
import ChildDetails from '../child-details/ChildDetails';
import ChildNotification from '../child-notification/ChildNotification';
import UploadDocument from '../upload-document/UploadDocument';
import CustomHorizaontalTab from '@root/components/customTabs';
import { useChildAbuseManagement } from './useChildAbuseManagement';
import ChildCriminalExploitation from '../child-ciminal-expolitation-management/ChildCiminalExpolitationManagement';

const TabsPanel = ({ isCriminal, action, id }: any) => {
  const {
    currentTab,
    tabArray,
    handleNextTab,
    handlePrevoiusTab,
    handleTabChange
  } = useChildAbuseManagement();

  const disabled = action === 'view' ? true : false;

  return (
    <CustomHorizaontalTab
      tabsArray={tabArray(isCriminal)}
      currentTab={currentTab}
      setCurrentTab={handleTabChange}
    >
      {isCriminal ?
        <ChildCriminalExploitation
          handleNextBtn={handleNextTab}
          disabled={disabled}
        /> :
        <ChildSexualExploitation
          handleNextBtn={handleNextTab}
          disabled={disabled}
        />
      }
      <ChildDetails
        handleNextBtn={handleNextTab}
        handlePrevoiusBtn={handlePrevoiusTab}
        disabled={disabled}
      />
      <ChildNotification
        handleNextBtn={handleNextTab}
        handlePrevoiusBtn={handlePrevoiusTab}
        disabled={disabled}
      />
      <UploadDocument disabled={disabled} />
    </CustomHorizaontalTab>
  )
}

export default TabsPanel