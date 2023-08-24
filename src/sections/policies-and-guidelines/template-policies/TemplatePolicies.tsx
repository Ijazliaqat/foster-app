import React from "react";
import { TemplatePoliciesData } from ".";
import PolicyVerticalTable from "@root/components/policy-vertical-tabs/PolicyVerticalTable";

// ====================================================================

const TemplatePolicies = () => {
    return (
        <PolicyVerticalTable data={TemplatePoliciesData} addNewTabNavigation={'/policies-and-guidelines/templates/template-policies-form'} />
    )
}

export default TemplatePolicies;
