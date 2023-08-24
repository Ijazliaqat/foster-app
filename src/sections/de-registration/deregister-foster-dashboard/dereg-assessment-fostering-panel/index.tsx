import fosterPanelInterviewImg from "../../../../assets/img/de-register/foster-panel-interview-img.svg";
import fosteringPanelRecommendationImg from "../../../../assets/img/de-register/foster-panel-recommendation.svg";
import proporsalTerminateImg from "../../../../assets/img/de-register/proporsal-terminate-img.svg";
import proporsalReviseImg from "../../../../assets/img/de-register/proporsal-revise.svg";
import statutoryChecksImg from "../../../../assets/img/de-register/statutory-checks.svg";
import finalOutcomeImg from "../../../../assets/img/de-register/final-outcome-img.svg";
import QuantityImg from "../../../../assets/img/de-register/quality-icon.png"

export const DeRegStagePostingPanelData = [
  {
    id: 1,
    informationIcon: [
      {
        content: `A report must be presented to the Fostering Panel on the foster carer's first review for a recommendation and thereafter may be presented to the fostering panel every three years. West Berkshire Children and Family Service complete the First Foster Care Review within 6 months of the carers approval. Other reasons to return to panel would include the following: where significant changes to the foster carer's approval or the termination of the foster carer's approval are recommended or where any circumstances exist which in the opinion of the Agency Decision Maker require consideration by the Fostering Panel. This may include the situation where an updating Disclosure and Barring Service check reveals a new concern about the foster carer or a member of the household.
    `,
      },
      {
        content: `Whether presented to the fostering panel or not, the report will be presented to the Agency Decision Maker for a decision as to whether the foster carer remains suitable to foster and whether the terms of approval remain suitable. Where it has been presented to the fostering panel, the Agency Decision Maker will take into account the panel's recommendation.
    `,
      },
    ],
    imgIcon: fosterPanelInterviewImg,
    textForApi: "initalContact",
    text: "Fostering Panel Assessment / interview",
    informationText: "Fostering Panel Assessment / interview",
    viewForms: "View Form",
    href: "/de-registration/deregister-foster-carer/fostering-panel-assessment",
    status: "Failed"
  },
  {
    id: 2,
    informationIcon: [
      {
        content: `The review findings and recommendations to the Fostering Panel  will be presented in a written report which incorporates the views of the child or children placed, the written views of the foster carer and any report provided by a social worker particularly where concerns have been expressed about a placement with the foster carer. Any recommendations for change in the foster carer's approval should be highlighted in the report. Foster Carers are invited to the review and are expected to attend.
    `,
      },
    ],
    imgIcon: fosteringPanelRecommendationImg,
    textForApi: "initalEnquiryStage",
    text: "Fostering Panel Recommendation",
    informationText: "Fostering Panel Recommendation",
    viewForms: "View Form",
    href: "/de-registration/deregister-foster-carer/fostering-panel-recommendation",
    status: "Passed"
  },
  {
    id: 3,
    informationIcon: [
      { content: `IFA Office admin will send out a Digital  info Pack` },
      {
        heading: `Deregistration Type`,
        subContentTwo: [
          { content: `Uncontested resignations.` },
          { content: `Termination of approval after allegations` },
          {
            content: `Termination of approval when there have been no allegations 
          and a resignation letter has not been received.`,
          },
        ],
      },
    ],
    imgIcon: QuantityImg,
    textForApi: "digitalInfo",
    text: "Representations/Review Procedure",
    informationText: "Representations/Review Procedure",
    viewForms: ["Proposal to Terminate", "Proposal to Revise"],
    href: "#",
    status: "Pending",
  },
  {
    id: 4,
    informationIcon: [
      {
        content: `Disclosure and Barring Service checks should be updated every 3 years and if necessary, a review of the foster carer's approval should be carried out immediately to take account of any new information.`,
      },
      {
        content: `Medical information should also be updated at least every 3 years by writing to the foster carers GP. In the event of any serious concerns about the foster carers health, a review of the foster carers approval should be carried out immediately`,
      },
    ],
    imgIcon: statutoryChecksImg,
    textForApi: "digitalInfo",
    text: "Statutory Checks",
    informationText: "Statutory Checks",
    viewForms: "View Form",
    href: "/de-registration/deregister-foster-carer/statutory-checks",
    status: "Pending"
  },
  {
    id: 5,
    informationIcon: [
      { content: `IFA Office admin will send out a Digital  info Pack` },
      {
        heading: `Deregistration Type`,
        subContentTwo: [
          { content: `Uncontested resignations.` },
          { content: `Termination of approval after allegations` },
          {
            content: `Termination of approval when there have been no allegations 
          and a resignation letter has not been received.`,
          },
        ],
      },
    ],
    imgIcon: finalOutcomeImg,
    textForApi: "digitalInfo",
    text: "Final Outcome",
    informationText: "Final Outcome",
    viewForms: ["Termination of approval of the foster carer", "Foster care give up fostering", "Revise of approval of the foster carer"],
    href: "#",
    status: "Pending",
  },
];
