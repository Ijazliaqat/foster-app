import movedStatusApprovedImg from "@root/assets/img/recruitment/movedToStatusApproved.png";
import policyReceiptImg from "@root/assets/img/recruitment/policyReceipt.png";
import safeguardMeasuresImg from "@root/assets/img/recruitment/safeguardMeasures.png";
import mandatoryTrainingImg from "@root/assets/img/recruitment/madnatoryTraining.png";
import riskAssessmentImg from "@root/assets/img/recruitment/riskAssessment.png";
import placementPreferenceImg from "@root/assets/img/recruitment/placementPreference.png";
import awaitingPlacementImg from "@root/assets/img/recruitment/awaitingPlacement.png";

export const READYFORPLACEMENT = (fosterCarerId: any) => [
  {
    id: 1,
    informationIcon: [
      {
        content: `By Signing the Foster Carer agrees to all the policies of the Agency, Allegations, Equalities, Behaviour Management, Supervision_Training_Support, Health,Education etc.`,
      },
    ],
    imgIcon: movedStatusApprovedImg,
    textForApi: "movedToStatusApproved",
    text: `Moved to Status "Approved" `,
    informationText: "Agency Policy",
    viewForms: `Applicant Approved`,
    href: "#",
  },
  {
    id: 2,
    informationIcon: [
      {
        content: `Agency Policy Receipt `,
      },
      {
        content: `Handbook Receipt`,
      },
      {
        content: `Data Security Receipt  `,
      },
      {
        content: `Recording Keeping Policy Receipt`,
      },
    ],
    imgIcon: policyReceiptImg,
    textForApi: "policyReceipts",
    text: "Policy Receipts",
    informationText: "Receipts Policy",
    viewForms: `View Document`,
    href: "#",
  },
  {
    id: 3,
    informationIcon: [
      {
        content: `Safeguarding Measures `,
      },
      {
        content: `Safeguarding  Training`,
      },
      {
        content: `Safeguarding Assessment`,
      },
      {
        content: `Safeguarding Approval.`,
      },
    ],
    imgIcon: safeguardMeasuresImg,
    textForApi: "safegaurdingMeasureBCP",
    text: "Safeguarding Measures (Before Child Placement)",
    informationText: "Safeguarding Measures",
    viewForms: `View Document`,
    href: `safeguarding?fosterChildId=${fosterCarerId}`,
  },
  {
    id: 4,
    informationIcon: [
      {
        content: `Safeguarding MeasuresSafeguarding and Child Protection (refresh yearly)  `,
      },
      {
        content: `TSDS (5-year refresher)  Training, support and development (TSD) standards.`,
      },
      {
        content: `Addictive Behaviour including drug abuse, alcohol abuse, smoking.`,
      },
      {
        content: `Complex Needs.`,
      },
      {
        content: `First Aid (3-year refresher).`,
      },
      {
        content: `GDPR `,
      },
      {
        content: `Fostering Allowances  `,
      },
      {
        content: `Keeping Children Safe Online `,
      },
      {
        content: `Completing Carer Logs (logging, recording and data protection)`,
      },
      {
        content: `TCIF  - Therapeutic Crisis Intervention for Families `,
      },
      {
        content: `TCIF  - Therapeutic Crisis Intervention for Families `,
      },
      {
        content: `Safe Caring`,
      },
      {
        content: `Mental Health Awareness`,
      },
      {
        content: `Child Sexual Exploitation (CSE)`,
      },
    ],
    imgIcon: mandatoryTrainingImg,
    textForApi: "mandatoryTraining",
    text: "Mandatory Training",
    informationText: "Mandatory Training",
    viewForms: `View Policy`,
    href: `training/manage-courses/course-resource-pool/category?fosterCarerId=${fosterCarerId}`,
  },
  {
    id: 5,
    informationIcon: [
      {
        content: `Risk assessment is the collection and analysis of information to determine the degree to which key factors are present in a family situation that increase the likelihood of future maltreatment to a child or adolescent.`,
      },
    ],
    imgIcon: riskAssessmentImg,
    textForApi: "riskAssessments",
    text: "Risk Assessments",
    informationText: "Risk Assessments",
    viewForms: `View Document`,
    href: `foster-child/child-background-info/child-chronology-of-events?fosterChildId=${fosterCarerId}`,
  },
  {
    id: 6,
    informationIcon: [
      {
        content: `Use Matching Algorithm that is the set of rules which will help determine which Foster Carer a referred Foster Child will be matched with. They will be matched according to compatibility in relation to the following characteristics or demographic information:`,
        subContentTwo: [
          {
            content: `Placements with a person connected to the child`,
          },
          {
            content: `Placements with siblings`,
          },
          {
            content: `Ethnicity`,
          },
          {
            content: `faith and religious observance`,
          },
          {
            content: `Parenting capacity assessment`,
          },
        ],
      },
    ],
    imgIcon: placementPreferenceImg,
    textForApi: "placementPreference",
    text: "Placement Preference",
    informationText: "Placement Preference",
    viewForms: `View Document`,
    href: `/recruitment/ready-for-placement/placement-preference?fosterCarerId=${fosterCarerId}`,
    status: "Passed",
  },
  {
    id: 7,
    informationIcon: [
      {
        content: `Final  Approval  issued for Placement `,
      },
    ],
    imgIcon: awaitingPlacementImg,
    textForApi: "awaitingPlacement",
    text: "Awaiting Placement",
    informationText: "Moved to Status “Awaiting Placement”   ",
    viewForms: `Approved`,
    href: "#",
  },
];
