import HorizaontalTabs from "@root/components/HorizaontalTabs";
import EducationDocument from "../education-document/EducationDocument";
import ChildEducationInfoForm from "../child-education-info-form/child-info-form/ChildEducationInfoForm";

const ChildEducationInfoTabs = () => {
  return (
    <HorizaontalTabs tabsDataArray={["Education Info", "Upload Documents"]}>
      <ChildEducationInfoForm />
      <EducationDocument />
    </HorizaontalTabs>
  );
};

export default ChildEducationInfoTabs;
