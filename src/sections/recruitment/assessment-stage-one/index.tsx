import regularAssessmentImg from "../../../assets/img/recruitment/regularAssessmentMeeting.png";
import statustoryChecksImg from "../../../assets/img/recruitment/statustoryCheckes.png";
import trainingVerificationImg from "../../../assets/img/recruitment/trainingVerification.png";
import stageOneApproval from "../../../assets/img/recruitment/stageOneApproval.png";

export const ASSESSMENTSTAGEONEDATA = (fosterCarerId: any) => [
  {
    id: 1,
    informationIcon: [
      {
        content: `Based on the Carer Check-list , assessments and data collections occus on regular basis, to get to know the carer much better. 
    `,
      },
      {
        content: `The credibility and eligibility  of the Foster Carer is examined throughly.  
    `,
      },
      {
        content: `As with anyother meetings, these meetings will also be `,
        subContentTwo: [
          { content: `Scheduled` },
          { content: `Recorded` },
          { content: `Actions / Recommendations  are captured` },
        ],
      },
    ],
    imgIcon: regularAssessmentImg,
    textForApi: "regularAssesmentMeeting",
    text: "Regular Assessment meeting",
    informationText: "Regular Assessment meetings with the applicant",
    viewForms: "View Form",
    href: `/recruitment/assessment-stage-one/regular-assessment-meeting?fosterCarerId=${fosterCarerId}`,
  },
  {
    id: 2,
    informationIcon: [
      {
        content: `Prospective Foster Carers / Customers makes initial enquiry by Phone / Social  media / Whatsapp  or use our Website - contact us form
    `,
      },
      {
        content: `Source of Initial enquiry`,
        subContentTwo: [
          {
            content: `Phone`,
          },
          {
            content: `Website Contact Us Form`,
          },
          {
            content: `Word of mouth`,
          },
          {
            content: `Social Media`,
          },
          {
            content: `Email`,
          },
        ],
      },

      {
        content: `IFA Office admin collects the information from the customer`,
      },

      {
        content: `IFA Office admin will perform the data entry on the inital enquiry form.`,
      },
    ],
    imgIcon: statustoryChecksImg,
    textForApi: "statutoryChecksVerify",
    text: "Statutory Checks Verification",
    informationText: "Statutory Checks Verification",
    viewForms: "View Form",
    href: `/carer-info/background-checks/statutory-checks-list?fosterCarerId=${fosterCarerId}`,
  },
  {
    id: 3,
    informationIcon: [
      {
        content: `Statutory checks are collected and verified for :  `,
        subContentTwo: [
          { content: `Primary  Carer ` },
          { content: `Secondary Carer ` },
          { content: `Back up carer ` },
          { content: `Family members of the Primary  Carer ` },
          { content: `Family members of the Secondary Carer` },
          { content: `Family members of the Back up carer ` },
          {
            content: `Primary Foster Carer provides the data of the above people `,
          },
        ],
      },
      {
        content: `Primary Foster Carer provides the data of the above people `,
      },
      {
        content: `Statutory checks`,
        subContentTwo: [
          { content: `DBS Checks` },
          { content: `DBS ChecksEmployment reference` },
          { content: `Local Authority` },
          { content: `Medical Advisor` },
          { content: `Former Partner Reference` },
          { content: `Car Insurance` },
          { content: `Drivers Licence ` },
        ],
      },
      {
        content: `IFA will verify  and confirm using ( Veriff ,  CheckMyDBS - Inhouse , Experian   ) `,
      },
    ],
    imgIcon: trainingVerificationImg,
    textForApi: "trainingVerification",
    text: "Training Verification",
    informationText: "Digital Application Pack/ info Pack",
    viewForms: "View Form",
    href: `/carer-info/training-profiles/trainings-list?fosterCarerId=${fosterCarerId}`,
  },
  {
    id: 4,
    informationIcon: [
      {
        content: `If the foster carer is trained already, the training certifications are verified. `,
      },
      {
        content: `If the foster carer is not trained, IFA will enable his training needs using the Inhouse LMS API `,
      },
      {
        content: `Mandatory core courses to be completed within 12 months `,
      },
      {
        content: `Here is a list of the mandatory core courses that must be completed within 12 months of approval and repeated at least every 3 years (unless otherwise stated in brackets). 
        `,
        subContentTwo: [
          { content: `Safeguarding and Child Protection (refresh yearly) ` },
          {
            content: `TSDS (5-year refresher)   -Training, support and development standards `,
          },
          {
            content: `Addictive Behaviour including drug abuse, alcohol abuse, smoking `,
          },
          { content: `Complex Needs ` },
          { content: `First Aid (3-year refresher) ` },
          { content: `General Data Protection Regulation (GDPR) ` },
          { content: `Fostering Allowances ` },
          { content: `Keeping Children Safe Online ` },
          {
            content: `Completing Carer Logs (logging, recording and data protection) `,
          },
          { content: `TCIF   -  Therapeutic Crisis Intervention for Families` },
          { content: `Child Development  ` },
          { content: `Safe Caring ` },
          { content: `Mental Health Awareness  ` },
          { content: `Child Sexual Exploitation (CSE) ` },
        ],
      },
    ],
    imgIcon: stageOneApproval,
    textForApi: "stageOneApproval",
    text: "Stage 1 Approval",
    informationText: "Initial Home Visit",
    viewForms: "View Form",
    href: `/recruitment/assessment-stage-one/stage-one-approval-form?fosterCarerId=${fosterCarerId}`,
  },
];
