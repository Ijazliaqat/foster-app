import agencyDecisionImg from "../../../../assets/img/de-register/agency-decision-img.svg";
import resignationFosterCarerImg from "../../../../assets/img/de-register/resignation-foster-carers-img.svg";
import movedDeRegisterStatusImg from "../../../../assets/img/de-register/moved-deregister-status-img.svg";


export const DeRegContractsAgreementsData = [
  {
    id: 1,
    informationIcon: [
      {
        content: `The Agency Decision Maker will be sent a copy of all papers considered by the panel when reaching their recommendation.`,

      },
      {
        content: `Based on the Recommendation ,Agency Decision Maker (ADM ) will either approve or reject the Foster Carer`,

      },
    ],
    imgIcon: agencyDecisionImg,
    textForApi: "initalContact",
    text: "Agency Decision ",
    informationText: "Agency Decision ",
    viewForms: "View Form",
    href: "/de-registration/deregister-foster-carer/agency-decision",
    status: "Failed"
  },
  {
    id: 2,
    informationIcon: [
      {
        content: `A foster carer may give written notice at any time of their wish to resign from the role. Once written notice has been given, their approval will automatically be terminated 28 days after receipt of the notice. The foster carer cannot withdraw their notice once it has been received, nor can the Agency Decision Maker decline to accept the resignation.'should a foster carer who has resigned subsequently wish to foster again, they will need to be assessed under the procedure for Assessment and Approvals of Foster Carers Procedure. There is no requirement for the fostering panel to be notified of resignations. However the panel may find it helpful to be advised, as part of its monitoring role, therefore the West Berkshire Fostering Panel is informed of all Foster Carer Resignations.`,
      },
    ],
    imgIcon: resignationFosterCarerImg,
    textForApi: "initalEnquiryStage",
    text: "Resignation by Foster Carers",
    informationText: "Resignation by Foster Carers",
    viewForms: "View Form",
    modal: true,
    status: "Passed"
  },
  {
    id: 3,
    // informationIcon: [
    //   { content: `IFA Office admin will send out a Digital  info Pack` },
    //   {
    //     heading: `Deregistration Type`,
    //     subContentTwo: [
    //       { content: `Uncontested resignations.` },
    //       { content: `Termination of approval after allegations` },
    //       {
    //         content: `Termination of approval when there have been no allegations 
    //       and a resignation letter has not been received.` },
    //     ],
    //   },
    // ],
    imgIcon: movedDeRegisterStatusImg,
    textForApi: "digitalInfo",
    text: "Moved to De-register status",
    informationText: "Moved to De-register status",
    viewForms: "De-registeration Done Successfully",
    modal: true,
    status: "Pending"
  },
];


export const PolicyVerticalAddNewDefaultValues = {
  title: "",
  dateUploaded: null,
  description: "",
  version: "",
  createdBy: "",
  approvedBy: "",
  author: null,
  approver: null,
  creationTime: null,
  lastModifiedTime: null,
  modifiedBy: "",
  eSignatureofAuthor: "",
  eSignatureofApprover: "",
  updatePhoto: "",
};

