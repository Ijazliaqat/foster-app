import React from "react";
import { Box } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import SatsExamGradForm from "./sats-exam-grad/SatsExamGradForm";
import UploadDocuments from "./upload-documents/UploadDocuments";

const SatsExamGradeDetails = () => {
  return (
    <Box>
      <HorizaontalTabs tabsDataArray={["SATS/Exam/Grades", "Document(s)"]}>
        <SatsExamGradForm />
        <UploadDocuments />
      </HorizaontalTabs>
    </Box>
  );
};

export default SatsExamGradeDetails;
