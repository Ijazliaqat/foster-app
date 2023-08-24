import React, { useState } from 'react';
import { OrganisationalPoliciesData } from '.';
import PolicyVerticalTable from '@root/components/policy-vertical-tabs/PolicyVerticalTable';

const AgencyGuidelines = () => {
    return (
        <>
            <PolicyVerticalTable data={OrganisationalPoliciesData} addNewTabNavigation={'/policies-and-guidelines/agency-guidelines/add'}  />
        </>
    )
}

export default AgencyGuidelines