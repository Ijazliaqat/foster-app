import * as Yup from "yup";
import finalFinanceImg from "../../../../assets/img/de-register/final-finance-img.svg";
import agencyPolicyAgreementsImg from "../../../../assets/img/de-register/agency-policy-agreements-img.svg";
import noticeProporsalImg from "../../../../assets/img/de-register/notice-proporsal-img.svg";
import termsApprovalImg from "../../../../assets/img/de-register/terms-approval-img.svg";
import consentFormImg from "../../../../assets/img/de-register/consent-form-img.svg";

export const DeRegContractsAgreementsData = [
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
    imgIcon: finalFinanceImg,
    textForApi: "initalContact",
    text: "Final Finance settlements",
    informationText: "Final Finance settlements",
    viewForms: "View Form",
    modal: true,
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
    imgIcon: agencyPolicyAgreementsImg,
    textForApi: "initalEnquiryStage",
    text: "Agency Policy Agreements",
    informationText: "Agency Policy Agreements",
    viewForms: "View Form",
    href: "/de-registration/deregister-foster-carer/policy-agreements",
    status: "Passed",
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
    imgIcon: noticeProporsalImg,
    textForApi: "digitalInfo",
    text: "Written notice of the proposal",
    informationText: "Written notice of the proposal",
    viewForms: "View Form",
    modal: true,
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
    imgIcon: termsApprovalImg,
    textForApi: "digitalInfo",
    text: "Terms of approval",
    informationText: "Terms of approval",
    viewForms: "View Form",
    modal: true,
    status: "Pending",
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
    imgIcon: consentFormImg,
    textForApi: "digitalInfo",
    text: "Consent Form",
    informationText: "Consent Form",
    viewForms: "View Form",
    href: "/de-registration/deregister-foster-carer/contract-and-agreement-consent-form",
    status: "Pending",
  },
];

export const DeRegisterFinalFinanceSchema: any = Yup.object().shape({
  updatePhoto: Yup.mixed().required("Field is Required"),
});