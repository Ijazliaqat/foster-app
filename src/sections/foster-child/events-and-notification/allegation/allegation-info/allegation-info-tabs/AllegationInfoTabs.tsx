import HorizaontalTabs from "@root/components/HorizaontalTabs";
import Documents from "../documents/Documents";
import GPDetailsInfo from "../allegation-info/AllegationInfo";
import { ALLEGATIONINFOTABSDATA } from ".";

const AllegationInfoTabs = () => {
  return (
    <HorizaontalTabs tabsDataArray={ALLEGATIONINFOTABSDATA}>
      <GPDetailsInfo />
      <Documents />
    </HorizaontalTabs>
  );
};

export default AllegationInfoTabs;
