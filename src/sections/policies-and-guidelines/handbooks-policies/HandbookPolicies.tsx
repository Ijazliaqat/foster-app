import PolicyVerticalTable from '@root/components/policy-vertical-tabs/PolicyVerticalTable';
import { HandbookPoliciesData } from '.';
import React from 'react'

const HandbookPolicies = () => {
    return (
        <>
            <PolicyVerticalTable data={HandbookPoliciesData} addNewTabNavigation={'/policies-and-guidelines/handbooks/handbooks-form/'} addNewFormNavigation={'/policies-and-guidelines/handbooks/handbooks-form/'} />
        </>
    )
}

export default HandbookPolicies