import HorizaontalTabs from "@root/components/HorizaontalTabs";
import SanctionDetailsForm from "../sanction-details-form/SanctionDetailsForm";
import SanctionDocument from "../sanction-document/SanctionDocument";

const SanctionDetailsTabs = () => {
  return (
    <HorizaontalTabs tabsDataArray={["Sanction Details", "Upload Documents"]}>
      <SanctionDetailsForm />
      <SanctionDocument />
    </HorizaontalTabs>
  );
};

export default SanctionDetailsTabs;
