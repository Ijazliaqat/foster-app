import React from "react";
import { ChecklistsPoliciesData } from ".";
import PolicyVerticalTable from "@root/components/policy-vertical-tabs/PolicyVerticalTable";

// ==========================================================================

const ChecklistPolicies = () => {
    return (
        <>
            <PolicyVerticalTable data={ChecklistsPoliciesData} addNewTabNavigation={'/policies-and-guidelines/checklists/checklist-form'}  />
        </>
    )
}

export default ChecklistPolicies;
