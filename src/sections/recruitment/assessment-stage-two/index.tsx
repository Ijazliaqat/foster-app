import fosteringPanelAssessmentImg from "../../../assets/img/recruitment/FosteringPanelAssessment.png";
import fosteringPanelRecommendationImg from "../../../assets/img/recruitment/fosteringPanelRecommendation.png";
import agencyDecisionImg from "../../../assets/img/recruitment/agencyDecision.png";
import signOnApproval from "../../../assets/img/recruitment/signOnApproval.png";

export const ASSESSMENTSTAGETWODATA = (fosterCarerId: any) => [
  {
    id: 1,
    informationIcon: [
      {
        content: `Fostering panel will take place at the IFA office. The meeting consisting of about eight or nine independent panel members who have related fostering experience and skills.  `,
      },
      {
        content: `At the meeting they will sit down and together will look through your Form F to discuss the type of fostering placement that’s right for you and make recommendations about your suitability to be approved as a foster parent.   `,
      },
      {
        content: `The fostering panel's primary legal function is to make a recommendation about a person's suitability to be a foster carer.`,
      },
      {
        content: `In doing so, they consider the terms of their approval, including the number and age range of children they wish to care for.`,
        heading: `What do fostering panels do?`,
      },

      {
        content: `A fostering panel will have the following duties:`,
        subContentTwo: [
          {
            content: `To consider fostering applications and make recommendations about the suitability of applicants. This also includes making recommendations about the number, age range and backgrounds of the children placed with carers.`,
          },
          { content: `To review the continued suitability of foster carers` },
          {
            content: `To consider any serious complaint or allegation against a foster carer.`,
          },
          {
            content: `To ensure the fostering provider (UK Fostering) works to certain standards`,
            heading: `What do fostering panels do?`,
            answer: `The fostering applicant and their assessing social worker will usually be invited to attend the panel. This would normally take place as part of a number of other fostering assessments taking place that day. You would normally be asked to wait outside the panel room until called. The assessing social worker should be called in first to present your application and his/her assessment to the panel. The panel will then ask you to come in and may ask you a few further questions linked to the assessment that they have read and your assessing social workers’ presentation.`,
          },
        ],
      },
    ],
    imgIcon: fosteringPanelAssessmentImg,
    textForApi: "fosterPanelInterview",
    text: `Fostering Panel Assessment/ Interview`,
    informationText: `Fostering Panel  Assessment/ interview`,
    viewForms: "View Form",
    href: `/recruitment/assessment-stage-two/fostering-panel-assessment?fosterCarerId=${fosterCarerId}`,
  },
  {
    id: 2,
    informationIcon: [
      {
        answerOne: `Following the questions asked by the panel, and any questions you may want to ask yourself, you will be asked to leave the room whilst the panel make their recommendations. They will then call you back to inform you of their decision. `,
      },
      { answerOne: `Decisions will range from:` },

      {
        content: `Recommendation for approval`,
      },

      {
        content: `Rejection of the application`,
      },
      {
        content: `Deferral whereby they would like further information collected before they can make their decision.`,
      },
    ],
    imgIcon: fosteringPanelRecommendationImg,
    textForApi: "fosterPanelRecommendation",
    text: `Fostering Panel Recomendation`,
    informationText: "Fostering Panel Recomendation",
    viewForms: "View Form",
    href: `/recruitment/assessment-stage-two/fostering-panel-recommendation?fosterCarerId=${fosterCarerId}`,
  },
  {
    id: 3,
    informationIcon: [
      {
        content: `The Agency Decision Maker will be sent a copy of all papers considered by the panel when reaching their recommendation.  `,
      },
      {
        content: `Based on the Recommendation ,Agency Decision Maker (ADM ) will either approve or reject the Prospective Foster Carer   `,
      },

      {
        content: `The decision will comply  with `,
        subContentTwo: [
          { content: `The Fostering Services (England) Regulations 2011` },
          {
            content: `The National Minimum Standards for Fostering Services 2011`,
          },
        ],
      },
      {
        content: `In circumstances where the Agency Decision Maker does not agree with the panel recommendation, before making a final decision they are required to consult with a senior colleague with the relevant social work qualification and experience and record their discussion and the outcome. A copy of this record must be placed on the Foster Carers or applicants file by the Agency Advisor.  `,
      },
      {
        content: `If the applicants or Foster Carers disagree with this decision, they have the right to seek further consideration of their application, or status, to the Fostering Panel or they may seek further consideration through the Independent Review Mechanism (IRM) procedure. The Agency Advisor has responsibility for ensuring that the applicants or carers are advised of this opportunity to seek further action.`,
      },
    ],
    imgIcon: agencyDecisionImg,
    textForApi: "agencyDecision",
    text: `Agency Decision`,
    informationText: "Agency Decision Maker Reviews the Panel assessment",
    viewForms: "View Form",
    href: `/recruitment/assessment-stage-two/agency-decision?fosterCarerId=${fosterCarerId}`,
  },
  {
    id: 4,
    informationIcon: [
      {
        content: `The primary aim of the Fostering Agency is to ensure the provision of a high quality fostering service that safeguards and promotes the welfare of those children who are looked after by the Children's Services Trust, or children placed with our carers by any other agency. `,
      },
      {
        content: `In all matters the Fostering Agency will consider the welfare of children to be paramount. Based on this principle , the foster carer is approved to be a "Registered Foster Carer "  or " Approved Foster Carer" `,
      },
    ],
    imgIcon: signOnApproval,
    textForApi: "signoffApproval",
    text: `Sign off Approval`,
    informationText: "Sign-off  and Approval",
    viewForms: "View Form",
    href: `/recruitment/assessment-stage-two/sign-off-approval?fosterCarerId=${fosterCarerId}`,
  },
];
