import DayLogTable from "./day-log/DayLogTable";
import OOHReportsTable from "./ooh-reports/OOHReportsTable";
import OfstedNotificationsTable from "./ofsted-notifications/OfstedNotificationsTable";
import ChildMissingPlacementTable from "./child-missing-placement/ChildMissingPlacementTable";
import AbsenceInfoTable from "./absence-info/AbsenceInfoTable";
import ExclusiveInfoTable from "./exclusion-info/ExclusionInfoTable";
import ExamGradeInfoTable from "./exam-grade-info/ExamGradeInfoTable";
import VocationalCourseInfoTable from "./vocational-course-info/VocationalCourseInfoTable";
import HospitalisationInfoTable from "./hospitalisation-info/HospitalisationInfoTable";
import TherapyInfoTable from "./therapy-info/TherapyInfoTable";
import RiskAssessmentTable from "./risk-assessment/RiskAssessmentTable";
import ImmunisationInfoTable from "./immunisation-info/ImmunisationInfoTable";
import AllegationsInfoTable from "./allegation-info/AllegationInfoTable";
import ComplaintsInfoTable from "./complaints-info/ComplaintsInfoTable";
import IncidentsInfoTable from "./incidents-info/IncidentsInfoTable";

export const childChronologyListData = (fosterChildId: any) => [
  {
    title: "Day Log / Journal Entries",
    component: <DayLogTable fosterChildId={fosterChildId} />,
  },
  {
    title: "OOH Reports",
    component: <OOHReportsTable fosterChildId={fosterChildId} />,
  },
  {
    title: "Ofsted Notifications",
    component: <OfstedNotificationsTable fosterChildId={fosterChildId} />,
  },
  {
    title: "Child Missing Placement",
    component: <ChildMissingPlacementTable fosterChildId={fosterChildId} />,
  },
  {
    title: "Absence Info",
    component: <AbsenceInfoTable fosterChildId={fosterChildId} />,
  },
  {
    title: "Exclusion Info",
    component: <ExclusiveInfoTable fosterChildId={fosterChildId} />,
  },
  {
    title: "SATS / Exam / Grades Info",
    component: <ExamGradeInfoTable fosterChildId={fosterChildId} />,
  },
  {
    title: "Vocational Course Info",
    component: <VocationalCourseInfoTable fosterChildId={fosterChildId} />,
  },
  {
    title: "Hospitalisation Info",
    component: <HospitalisationInfoTable fosterChildId={fosterChildId} />,
  },
  {
    title: "Therapy Info",
    component: <TherapyInfoTable fosterChildId={fosterChildId} />,
  },
  {
    title: "Risk Assessment",
    component: <RiskAssessmentTable fosterChildId={fosterChildId} />,
  },
  {
    title: "Immunisation Info",
    component: <ImmunisationInfoTable fosterChildId={fosterChildId} />,
  },
  {
    title: "Allegations Info",
    component: <AllegationsInfoTable fosterChildId={fosterChildId} />,
  },
  {
    title: "Complaints Info",
    component: <ComplaintsInfoTable fosterChildId={fosterChildId} />,
  },
  {
    title: "Incidents Info",
    component: <IncidentsInfoTable fosterChildId={fosterChildId} />,
  },
];
