import { Box } from '@mui/material'
import VericalTabs from "@root/components/VericalTabs";
import React from 'react'
import LaBasicInformation from './la-basic-information/LaBasicInformation';
import AddLaEmployee from './add-la-employee/AddLaEmployee';
import SingleChildDataExchange from './single-child-data-exchange/SingleChildDataExchange';
import SecureChildrenDataExchange from './secure-children-data-exchange/SecureChildrenDataExchange';
import LaBankDetails from './la-bank-details/LaBankDetails';
import LaPoliciesAgreement from './la-policies-agreement/LaPoliciesAgreement';
import AnyOtherDocument from './any-other-document/AnyOtherDocument';
import MeetingRecording from './meeting-recording/MeetingRecording';
import LaSocialMedia from './la-social-media/LaSocialMedia';
import { useRegisterNewLocalAuthority } from './useRegisterNewLocalAuthority';
import { registerLocalAuthorityTabs } from '.';

const RegisterNewLocalAuthority = () => {
    const { handleNextTab, handlePreviousTab, currentTab, setCurrentTab } = useRegisterNewLocalAuthority()
    return (
        <VericalTabs tabsDataArray={registerLocalAuthorityTabs} >
            <LaBasicInformation handleNextTab={handleNextTab} />
            <AddLaEmployee />
            <SingleChildDataExchange />
            <SecureChildrenDataExchange />
            <LaBankDetails />
            <LaPoliciesAgreement />
            <AnyOtherDocument />
            <MeetingRecording />
            <LaSocialMedia />
        </VericalTabs>
    )
}

export default RegisterNewLocalAuthority