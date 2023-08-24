
import CheckIcon from "../../../assets/svg/de-register/check-icon.svg";
import UnCheckIcon from "../../../assets/svg/de-register/cross-icon.svg";
import AssessmentStageIcon from "../../../assets/svg/de-register/uncheck.svg";
import DeRegInitialRequest from "./dereg-initial-request/DeRegInitialRequest";
import DeregAssessmentStageCarer from "./dereg-assessment-stage-carer/DeregAssessmentStageCarer";
import DeregAssessmentFosteringPanel from "./dereg-assessment-fostering-panel/DeregAssessmentFosteringPanel";
import FinalDeRegistration from "./final-de-registration/FinalDeRegistration";
import DeregContractsAgreements from "./dereg-contracts-agreements/DeregContractsAgreements";

export const deRegisterFosterStep = [
  {
    id: 1,
    label: "DeReg initial Request",
    component: <DeRegInitialRequest />,
    background: "linear-gradient(106.35deg, #F6830F 0%, #F6C30F 100%)",
    color: "#F6A30F",
    icon: CheckIcon
  },
  {
    id: 2,
    label: "DeReg Assessment Stage 1",
    component: <DeregAssessmentStageCarer />,
    background: "linear-gradient(106.35deg, #4B79A1 0%, #283E51 100%)",
    color: "#395C79",
    icon: UnCheckIcon
  },
  {
    id: 3,
    label: "DeReg Assessment Stage 2",
    component: <DeregAssessmentFosteringPanel />,
    background: "linear-gradient(106.35deg, #0A6460 0%, #23E0D9 100%)",
    color: "#16A29C",
    icon: AssessmentStageIcon
  },
  {
    id: 4,
    label: "DeReg Contracts and Agreements",
    component: <DeregContractsAgreements />,
    background: "linear-gradient(106.35deg, #134E5E 0%, #71B280 100%)",
    color: "#42806F",
    icon: UnCheckIcon
  },
  {
    id: 5,
    label: "Final De-Registration",
    component: <FinalDeRegistration />,
    background: "linear-gradient(90deg, #2CB764 10.76%, #0E918C 133.7%)",
    color: "#0aad77",
    icon: AssessmentStageIcon
  },
];
