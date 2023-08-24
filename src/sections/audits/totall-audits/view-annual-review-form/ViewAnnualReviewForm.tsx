import { Card } from "@mui/material";
import HorizaontalTabs from "@root/components/HorizaontalTabs";
import React from "react";
import PageOneForm from "./page-one-form/PageOneForm";
import UploadedDocumentTable from "./uploaded-documents/UploadedDocumentTable";
import PageTwoForm from "./page-two-form/PageTwoForm";
import PageThreeForm from "./page-three-form/PageThreeForm";
import PageFourForm from "./page-four-form/PageFourForm";
import PlacementReviewForm from "./placement-review-form/PlacementReviewForm";
import PageFiveTables from "./page-five/PageFiveTables";

const ViewAnnualReviewForm = () => {
  const tabsArray: string[] = [
    "Page 1",
    "Page 2",
    "Page 3",
    "page 4",
    "page 5",
    "Placement Review",
    "Uploaded Documents",
  ];

  return (
    <Card sx={styles.main}>
      <HorizaontalTabs tabsDataArray={tabsArray} spacing={0}>
        <PageOneForm />
        <PageTwoForm />
        <PageThreeForm />
        <PageFourForm />
        <PageFiveTables />
        <PlacementReviewForm />
        <UploadedDocumentTable />
      </HorizaontalTabs>
    </Card>
  );
};

export default ViewAnnualReviewForm;

const styles = {
  main: {
    boxShadow: "2px 4px 7px 2px rgba(14, 145, 140, 0.2)",
    borderRadius: "10px",
    "& .MuiTabs-scroller": {
      padding: "0 15px",
    },
  },
};
