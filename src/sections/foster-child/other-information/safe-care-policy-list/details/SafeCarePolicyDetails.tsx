import React from "react";
import { Box } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import UploadDocuments from "./upload-documents/UploadDocuments";
import SectionAForm from "./section-a/SectionAForm";
import SectionBForm from "./section-b/SectionBForm";
// import SectionBForm from "../../safe-care-policy-list-old/safe-care-policy/section-b/SectionBForm";

const SafeCarePolicyDetails = () => {
  return (
    <Box>
      <HorizaontalTabs
        tabsDataArray={["Section A", "Aection B", "Upload Documents"]}
      >
        <SectionAForm />
        <SectionBForm />
        <UploadDocuments />
      </HorizaontalTabs>
    </Box>
  );
};

export default SafeCarePolicyDetails;
