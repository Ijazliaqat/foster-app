import React from 'react'
import CustomHorizaontalTab from '@root/components/customTabs';
import { uploadDocumentData } from '.'
import UploadDocumentModal from '@root/components/modal/UploadDocumentModal/UploadDocumentModal';
import DeleteModel from '@root/components/modal/DeleteModel';
import { useHandbookPoliciesTabs } from './useHandbookPoliciesTabs';
import PolicyVerticalAddNew from '@root/components/policy-vertical-tabs/policy-vertical-form/policy-vertical-add-form/PolicyVerticalAddForm';
import PolicyVerticalUploadDocument from '@root/components/policy-vertical-tabs/policy-vertical-form/PolicyVerticalUploadDocument';

const HandbookPoliciesTabs = () => {
    const { currentTab, setCurrentTab, handlePreviousTab, isUploadDocumentOpenModal, isDeleteOpenModal, setCount, handleSubmit, handleUploadedSubmit, handleAction, setIsUploadDocumentOpenModal, setIsDeleteOpenModal, count, route } = useHandbookPoliciesTabs();
    return (
        <>
            <CustomHorizaontalTab tabsArray={[`${route.query.action === 'add' || route.query.action === 'view' ? route.query.name : 'Add New Handbook'}`, "Upload document"]} currentTab={currentTab} setCurrentTab={setCurrentTab} isDisabled={true}>
                <PolicyVerticalAddNew onSubmit={handleSubmit} handleAddNewBack={'/policies-and-guidelines/handbooks/'} />
                <PolicyVerticalUploadDocument data={uploadDocumentData} addUploadDocument={() => setIsUploadDocumentOpenModal(true)} handleSubmit={handleUploadedSubmit} isUploadBackBtn={count === 1 && true} handleBackBtn={() => handlePreviousTab()} handleAction={handleAction} />
            </CustomHorizaontalTab>

            <UploadDocumentModal open={isUploadDocumentOpenModal} handleClose={() => setIsUploadDocumentOpenModal(false)} isHideSubmitButton={true} onSubmit={() => { setIsUploadDocumentOpenModal(false); setCount(1) }} />
            <DeleteModel open={isDeleteOpenModal} handleClose={() => setIsDeleteOpenModal(false)} />
        </>
    )
}

export default HandbookPoliciesTabs