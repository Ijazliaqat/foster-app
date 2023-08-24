import React from 'react'
import CustomHorizaontalTab from '@root/components/customTabs';
import PersonalInfoForm from './personal-info-form/PersonalInfoForm';
import useAddFosterChildRequestForm from './useAddFosterChildRequestForm';
import LADetailsForm from './la-details-form/LADetailsForm';
import UploadDocumentTable from './upload-documents/UploadDocumentsTable';



const AddFosterChildRequestForm = () => {
  const { currentTab,setCurrentTab,
    handleNextTab,handlePreviousTab,tabsArray,disabled}= useAddFosterChildRequestForm();
   
  return (
    <CustomHorizaontalTab tabsArray={tabsArray}
    currentTab={currentTab}
    setCurrentTab={setCurrentTab}>
    <PersonalInfoForm disabled={disabled} handleNextBtn={handleNextTab} />
    <LADetailsForm disabled={disabled} handlePreviousBtn={handlePreviousTab} />
    <UploadDocumentTable disabled={disabled} />
  </CustomHorizaontalTab>
  )
}

export default AddFosterChildRequestForm
