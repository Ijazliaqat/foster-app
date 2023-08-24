import React from "react";
import { agencyPolicyData } from ".";
import PolicyVerticalTable from "@root/components/policy-vertical-tabs/PolicyVerticalTable";

const AgencyPolicyAgreements = () => {
    return (
        <PolicyVerticalTable
            data={agencyPolicyData}
            addNewTabNavigation={
                "/de-registration/deregister-foster-carer/policy-agreements/form"
            }
            addNewFormNavigation={
                "/de-registration/deregister-foster-carer/policy-agreements/form"
            }
        />
    );
};

export default AgencyPolicyAgreements;
