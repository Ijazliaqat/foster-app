import agencyPolicyImg from "../../../assets/img/recruitment/agencyPolicy.png";
import financeAgreementImg from "../../../assets/img/recruitment/financeAgreement.png";
import agencySafeguardingImg from "../../../assets/img/recruitment/agencySafeguarding .png";
import recruitmentAndAssessmentPolicyImg from "../../../assets/img/recruitment/recruitmentAndAssessmentPolicy.png";
import recordingKeepingImg from "../../../assets/img/recruitment/recordingKeeping.png";
import declarationsImg from "../../../assets/img/recruitment/declarations.png";

export const CONTRACTSANDDECLARATIONDATA = (fosterCarerId: any) => [
  {
    id: 1,
    informationIcon: [
      {
        content: `By Signing the Foster Carer agrees to all the policies of the Agency, Allegations, Equalities, Behaviour Management, Supervision_Training_Support, Health,Education etc.`,
      },
    ],
    imgIcon: agencyPolicyImg,
    text: "Agency Policy",
    informationText: "Agency Policy",
    viewForms: `View Policy`,
    href: `/de-registration/deregister-foster-carer/policy-agreements?fosterCarerId=${fosterCarerId}`,
    isSigned: true,
  },
  {
    id: 2,
    informationIcon: [
      {
        content: `Finance Agreement  sets out the terms and conditions under which it is prepared to make a payment available to the Foster Carer.
    `,
      },
    ],
    imgIcon: financeAgreementImg,
    text: "Finance Agreement",
    informationText: "Finance Agreement",
    viewForms: `View Agreement`,
    href: "#",
    isSigned: true,
  },
  {
    id: 3,
    informationIcon: [
      {
        content: `Safeguarding policy and procedures  covers  right to live in safety, free from abuse and neglect.`,
      },
    ],
    imgIcon: agencySafeguardingImg,
    text: "Agency Safeguard Policy",
    informationText: "Agency Safeguard Policy",
    viewForms: `View Policy`,
    href: `/de-registration/deregister-foster-carer/policy-agreements?fosterCarerId=${fosterCarerId}`,
    isSigned: false,
  },
  {
    id: 4,
    informationIcon: [
      {
        content: `A recruitment policy is a statement on how you hire. It outlines your company's preferred hiring practices and promotes consistency within your employee recruiting process`,
      },
    ],
    imgIcon: recruitmentAndAssessmentPolicyImg,
    text: "Recruitment and Assessment Policy",
    informationText: "Recruitment and Assessment Policy",
    viewForms: `View Policy`,
    href: `/de-registration/deregister-foster-carer/policy-agreements?fosterCarerId=${fosterCarerId}`,
    isSigned: false,
  },
  {
    id: 5,
    informationIcon: [
      {
        content: `A record keeping policy is a set of rules to control document and information lifecycle in an organization, from the moment it is created or received, until it is stored for historical reference or destroyed.`,
      },
    ],
    imgIcon: recordingKeepingImg,
    text: "Recording Keeping Policy",
    informationText: "Recording Keeping Policy",
    viewForms: `View Policy`,
    href: `/de-registration/deregister-foster-carer/policy-agreements?fosterCarerId=${fosterCarerId}`,
    isSigned: true,
  },
  {
    id: 6,
    informationIcon: [
      {
        content: `The act of declaration means to provide a statement of fact or to make a formal announcement. `,
      },
    ],
    imgIcon: declarationsImg,
    text: "Declarations",
    informationText: "Declarations",
    viewForms: `View Declaration`,
    href: `/recruitment/contracts-and-declaration/view-declaration?fosterCarerId=${fosterCarerId}`,
    isSigned: true,
  },
];
