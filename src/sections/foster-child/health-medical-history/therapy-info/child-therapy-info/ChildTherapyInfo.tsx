import React from "react";
import { Box } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import HealthTherapyInfoForm from "./health-therapy-info/HealthTherapyInfoForm";
import UploadDocuments from "./upload-documents/UploadDocuments";

const ChildTherapyInfo = () => {
  return (
    <Box>
      <HorizaontalTabs
        tabsDataArray={["Health Therapy Info", "Upload documents"]}
      >
        <HealthTherapyInfoForm />
        <UploadDocuments />
      </HorizaontalTabs>
    </Box>
  );
};

export default ChildTherapyInfo;
