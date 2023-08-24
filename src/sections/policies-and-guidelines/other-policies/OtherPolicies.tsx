import React from "react";
import { OtherPoliciesData } from ".";
import PolicyVerticalTable from "@root/components/policy-vertical-tabs/PolicyVerticalTable";

const OtherPolicies = () => {
  return (
    <>
      <PolicyVerticalTable
        data={OtherPoliciesData}
        addNewTabNavigation={
          "/policies-and-guidelines/other-policies/other-policies-form/"
        }
        addNewFormNavigation={
          "/policies-and-guidelines/other-policies/other-policies-form/"
        }
      />
    </>
  );
};

export default OtherPolicies;
