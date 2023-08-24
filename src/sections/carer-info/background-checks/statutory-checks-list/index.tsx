import CarInsuranceTable from "./car-insurance/CarInsuranceTable";
import DbsCheckTable from "./dbs-check/DbsCheckTable";
import EmployementReferenceOneTable from "./employment-reference-1/EmployementReferenceOneTable";
import EmployementReferenceTwoTable from "./employment-reference-2/EmployementReferenceTwoTable";
import LocalAuthorityTable from "./local-authority/LocalAuthorityTable";
import MedicalAdvisorTable from "./medical-advisor/MedicalAdvisorTable";
import PartnerReferenceTable from "./partner-reference/PartnerReferenceTable";
import ReferenceOneTable from "./reference-1/ReferenceOneTable";
import ReferenceTwoTable from "./reference-2/ReferenceTwoTable";
import ReferenceThreeTable from "./reference-3/ReferenceThreeTable";

//Accordian Data
export const statutoryAccordionData = [
  {
    title: "Car Insurance",
    component: <CarInsuranceTable />,
  },
  {
    title: "DBS Check",
    component: <DbsCheckTable />,
  },
  {
    title: "Employment Reference 1",
    component: <EmployementReferenceOneTable />,
  },
  {
    title: "Employment Reference 2",
    component: <EmployementReferenceTwoTable />,
  },
  {
    title: "Local Authority S.S.D",
    component: <LocalAuthorityTable />,
  },
  {
    title: "Medical Advisor",
    component: <MedicalAdvisorTable />,
  },
  {
    title: "Former Partner References",
    component: <PartnerReferenceTable />,
  },
  {
    title: "Reference 1",
    component: <ReferenceOneTable />,
  },
  {
    title: "Reference 2",
    component: <ReferenceTwoTable />,
  },
  {
    title: "Reference 3",
    component: <ReferenceThreeTable />,
  },
];

//Carer Type Mock Data
export const carerTypeData = [
  {
    value: "Option 1",
  },
  {
    value: "Option 2",
  },
  {
    value: "Option 3",
  },
  {
    value: "Option 4",
  },
];
//Carer Name Mock Data
export const carerNameData = [
  {
    value: "Option 1",
  },
  {
    value: "Option 2",
  },
  {
    value: "Option 3",
  },
  {
    value: "Option 4",
  },
];
