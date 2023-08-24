import RefereeDetailsForm from "./RefereeDetailsForm";
import ReferralPersonalDetailsForm from "./ReferralPersonalDetailsForm";
import CustomHorizaontalTab from "@root/components/customTabs";
import { useReferralHistory } from "../useReferralHistory";

const ReferralHistoryForm = (props: any) => {
  const { currentTab, setCurrentTab, handleNextTab } = useReferralHistory();

  return (
    <CustomHorizaontalTab
      tabsArray={["Referee Details", "Referral Personal Details"]}
      currentTab={currentTab}
      setCurrentTab={setCurrentTab}
    >
      <RefereeDetailsForm disabled={true} handleNextTab={handleNextTab} />
      <ReferralPersonalDetailsForm disabled={true} />
    </CustomHorizaontalTab >
  );
}
export default ReferralHistoryForm