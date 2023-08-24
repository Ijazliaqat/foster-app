import React from "react";
import { OrganisationalPoliciesData } from ".";
import PolicyVerticalTable from "@root/components/policy-vertical-tabs/PolicyVerticalTable";

const OrganisationalPolicies = () => {
  return (
    <PolicyVerticalTable
      data={OrganisationalPoliciesData}
      addNewTabNavigation={
        "/policies-and-guidelines/organisational-policies/organisational-policies-form"
      }
      addNewFormNavigation={
        "/policies-and-guidelines/organisational-policies/organisational-policies-form"
      }
    />
  );
};

export default OrganisationalPolicies;
