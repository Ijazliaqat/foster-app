import React from "react";
import { GovtLegislationData } from ".";
import PolicyVerticalTable from "@root/components/policy-vertical-tabs/PolicyVerticalTable";

const GovtLegislations = () => {
  return (
    <>
      <PolicyVerticalTable
        data={GovtLegislationData}
        addNewTabNavigation={"/policies-and-guidelines/govt-legislations/govt-legislations-form"}
      />
    </>
  );
};

export default GovtLegislations;
