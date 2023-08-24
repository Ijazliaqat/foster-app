import React from "react";
import { CyberEssentialsData, accordionData } from ".";
import { useCyberEseentials } from "./useCyberEssentials";
import CustomAccordian from "@root/components/CustomAccordian";
import PolicyVerticalTabs from "@root/components/policy-vertical-tabs/PolicyVerticalTabs";

// =====================================================================================

const CyberEssentials = () => {
  const { router, handleAdd } = useCyberEseentials();

  return (
    <>
      <PolicyVerticalTabs
        accordianChild={true}
        tabsDataArray={CyberEssentialsData}
        handleAddTabs={() =>
          router.push({ pathname: "/policies-and-guidelines/cyber-essentials/cyber-essentials-form", query: { title: "Add New Policy" } })
        }
      >
        <CustomAccordian handleAdd={handleAdd} data={accordionData} addIcon firstAccStyle />
      </PolicyVerticalTabs>
    </>
  );
};

export default CyberEssentials;
