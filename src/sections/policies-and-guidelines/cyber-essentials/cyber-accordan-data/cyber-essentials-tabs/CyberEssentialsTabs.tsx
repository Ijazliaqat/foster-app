import React from "react";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadedDocument from "./uploaded-document/UploadedDocument";
import CyberEseentialsForm from "./cyber-essentials-form/CyberEseentialsForm";

// =====================================================================================

const CyberEssentialsTabs = ({ disabled, title }: any) => {
  return (
    <HorizaontalTabs tabsDataArray={[title, "Upload Documents"]}>
      <CyberEseentialsForm disabled={disabled} />
      <UploadedDocument />
    </HorizaontalTabs>
  );
};

export default CyberEssentialsTabs;
