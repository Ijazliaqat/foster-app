import Allegation from "./allegation/AllegationTable";
import AnnualReview from "./annual-review/AnnualReviewTable";
import Complaints from "./complaints/ComplaintsTable";
import Incident from "./incident/IncidentTable";
import Report from "./ooh-report/ReportTable";
import PetQuestionnaireTable from "./pet-questionnaire/PetQuestionnaireTable";
import SupervisoryVisitTable from "./supervisory-visit/SupervisoryVisitTable";
import UnannouncedVisit from "./unannounced-visit/UnannouncedVisitTable";

export const accordionData = [
  {
    title: "Annual Review",
    component: <AnnualReview />,
  },
  {
    title: "Supervisory Home Visit",
    component: <SupervisoryVisitTable />,
  },
  {
    title: "Unannounced Home Visit",
    component: <UnannouncedVisit />,
  },
  {
    title: "OOH Report",
    component: <Report />,
  },
  {
    title: "Pet Questionnaire",
    component: <PetQuestionnaireTable />,
  },
  {
    title: "Allegation",
    component: <Allegation />,
  },
  {
    title: "Complaints",
    component: <Complaints />,
  },
  {
    title: "Incident",
    component: <Incident />,
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
