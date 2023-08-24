import EnquiryStage from "./enquiry-stage/EnquiryStage";
import AssessmentStageOne from "./assessment-stage-one/AssessmentStageOne";
import AssessmentStageTwo from "./assessment-stage-two/AssessmentStageTwo";
import ContractsAndDeclarations from "./contracts-and-declarations/ContractsAndDeclarations";
import ReadyForPlacement from "./ready-for-placement/ReadyForPlacement";
export const steps = [
  {
    id: 1,
    label: "Enquiry Stage",
    component: <EnquiryStage />,
    background: "linear-gradient(106.35deg, #F6460F 0%, #FE2B5E 100%)",
    color: "rgb(246, 70, 15)",
  },
  {
    id: 2,
    label: "Assessment Stage 1",
    component: <AssessmentStageOne />,
    background: "linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)",
    color: "rgb(246,131,15)",
  },
  {
    id: 3,
    label: "Assessment Stage 2",
    component: <AssessmentStageTwo />,
    background: "linear-gradient(106.35deg, #2CB764 0%, #33E87C 100%)",
    color: " rgb(44,183,100)",
  },
  {
    id: 4,
    label: "Contracts and Declarations",
    component: <ContractsAndDeclarations />,
    background: "linear-gradient(106.35deg, #0E918C 0%, #23E0D9 100%)",
    color: "rgb(14,145,140)",
  },
  {
    id: 5,
    label: "Ready for Placement",
    component: <ReadyForPlacement />,
    background: "linear-gradient(106.35deg, #134E5E 0%, #71B280 100%)",
    color: "rgb(19,78,94)",
  },
];
