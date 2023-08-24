import HorizaontalTabs from "@root/components/HorizaontalTabs";
import BackgroundForm from "../background/BackgroundForm";
import Document from "../document/Document";
import InterestForm from "../interest/InterestForm";
import PrimaryCarerForm from "../primary-carer/PrimaryCarerForm";
import AssesmentForm from "../assesment/AssesmentForm";
import { INITIALHOMEVISITTABSDATA } from ".";



const InitialHomeVisitTab = () => {

  return (
    <HorizaontalTabs tabsDataArray={INITIALHOMEVISITTABSDATA}>
      <PrimaryCarerForm />
      <InterestForm />
      <BackgroundForm />
      <AssesmentForm />
      <Document />
    </HorizaontalTabs>
  );
};

export default InitialHomeVisitTab;
