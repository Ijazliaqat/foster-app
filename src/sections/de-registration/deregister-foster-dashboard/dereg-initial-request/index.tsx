import initialRequestImg from "../../../../assets/img/de-register/initial-request-img.svg";
import finalOutcomeImg from "../../../../assets/img/de-register/final-outcome-img.svg";
import socialWorkerInitialImg from "../../../../assets/img/de-register/social-worker-initial-img.svg";

export const DeRegInitialRequestData = [
  {
    id: 1,
    informationIcon: [
      {
        content: `Initial  Consideration / Request to Deregister the Foster Carer.
    `,
      },
    ],
    imgIcon: initialRequestImg,
    textForApi: "initalContact",
    text: "Initial Request for Deregistration",
    informationText: "Initial Request for Deregistration",
    viewForms: "View Form",
    href: "/de-registration/deregister-foster-carer/initial-request-form",
    status: "Failed"
  },
  {
    id: 2,
    informationIcon: [
      {
        content: `Based on the information collected on Initial Request, Social Worker commissions a full end-to-end assessment about the Deregistration case.`,
      },
    ],
    imgIcon: socialWorkerInitialImg,
    textForApi: "initalEnquiryStage",
    text: "Social worker Initial Assessment",
    informationText: "Social worker Initial Assessment",
    viewForms: "View Form",
    modal: true,
    status: "Passed"
  },
  {
    id: 3,
    informationIcon: [
      { content: `Deregistration Type and reason and Deregistration report is finilized by the SW.` },
      {
        heading: `Deregistration Type`,
        subContentTwo: [
          { content: `Uncontested resignations.` },
          { content: `Termination of approval after allegations` },
          {
            content: `Termination of approval when there have been no allegations 
          and a resignation letter has not been received.` },
        ],
      },
    ],
    imgIcon: finalOutcomeImg,
    textForApi: "digitalInfo",
    text: " Final Outcome",
    informationText: "Final Outcome",
    viewForms: ["Uncontested resignations", "Termination of approval without Allegation", "Termination of approval after Allegation"],
    href: "#",
    status: "Pending"
  },

];
