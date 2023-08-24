import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Documents from "../documents/Documents";
import GPDetailsInfo from "../gp-details-info/GPDetailsInfo";
import { CHILDTHERAPYINFOTABSDATA } from ".";

const GPDetailsInfoTabs = () => {
  return (
    <HorizaontalTabs tabsDataArray={CHILDTHERAPYINFOTABSDATA}>
      <GPDetailsInfo />
      <Documents />
    </HorizaontalTabs>
  );
};

export default GPDetailsInfoTabs;
