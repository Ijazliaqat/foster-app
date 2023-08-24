import { CheckMedicals } from "./check-medicals/CheckMedicals";
import { Exemptions } from "./exemptions/Exemptions";
import { OtherDocuments } from "./other-documents/OtherDocuments";
import { PresenrForm } from "./present-form/PresenrForm";
import { Recommendations } from "./recommendations/Recommendations";
import { ReviewMeeting } from "./review-meeting/ReviewMeeting";


export const HospitalizationFromvalue = [
  // {
  //   title: "Expand All",
  //   // component: <AnnualReview />,
  // },
  {
    title: "Present",
    component: <PresenrForm />,
  },
  {
    title: "Reports informing the review meeting",
    component: <ReviewMeeting />,
  },
  {
    title: "Checks and medicals",
    component: <CheckMedicals />,
  },
  {
    title: "Other documents",
    component: <OtherDocuments />,
  },
  {
    title: "Recommendations of last review meeting",
    component: <Recommendations />,
  },
  {
    title: "Exemptions/placements outside terms of approval",
    component: <Exemptions />,
  },
  {
    title: "Impact of fostering",
    // component: <Complaints />,
  },
  {
    title: "Needs of children",
    // component: <Incident />,
  },
  {
    title: "Working as part of a team",
    // component: <Incident />,
  },
  {
    title: "Carer’s own development (carer 1)",
    // component: <Incident />,
  },
  {
    title: "Carer’s own development (carer 2)",
    // component: <Incident />,
  },
  {
    title: "Summary",
    // component: <Incident />,
  },
  {
    title: "Changes to approval terms",
    // component: <Incident />,
  },
  {
    title: "Changes to approval terms",
    // component: <Incident />,
  },
  {
    title: "Next Review meeting",
    // component: <Incident />,
  },
];

//Sorting Mock Data

export const sortingData = [
  {
    value: "Ascending",
  },
  {
    value: "Decending",
  },
];