import React from "react";
import AdvocacyForm from "./advocacy-form/AdvocacyForm";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import CarerAdvocateForm from "./carer-advocate/CarerAdvocateForm";
import CarerAdvocacyForm from "./carer-advocacy/CarerAdvocacyForm";
import ReferralDetailsForm from "./referral-details/ReferralDetailsForm";

// ==================================================================================================

const ViewAdvocacyTab = ({ disabled }: any) => {
  return (
    <HorizaontalTabs tabsDataArray={["Carer Advocacy", "Advocacy Form", " Carer Advocate", "Referral Details"]} variant="fullWidth" spacing={0}>
      <CarerAdvocacyForm disabled={disabled} />
      <AdvocacyForm disabled={disabled} />
      <CarerAdvocateForm disabled={disabled} />
      <ReferralDetailsForm disabled={disabled} />
    </HorizaontalTabs>
  );
};

export default ViewAdvocacyTab;
