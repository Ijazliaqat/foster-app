import phoneImg from "../../../assets/img/recruitment/phoneMsg.png";
import initialStageImg from "../../../assets/img/recruitment/initialStage.png";
import digitalInfoImg from "../../../assets/img/recruitment/digitalInfo.png";
import iitialHomeVisitImg from "../../../assets/img/recruitment/initialHomeVisit.png";
import socialAssessmentImg from "../../../assets/img/recruitment/socialWorkAssesmment.png";
import SocialWorkerFormDialogbox from "./social-worker-form-dialogbox/SocialWorkerFormDialogbox";

export const ENQUIRYSTAGEDATA = (fosterCarerId: any) => [
  {
    id: 1,
    informationIcon: [
      {
        content: `Initial Contact is the first contact the Applicant makes with the Agency.
    This can be by any means , example : Contact form from Website , Whatsapp, social media etc
    `,
      },
    ],
    imgIcon: phoneImg,
    textForApi: "initalContact",
    text: "Initial Contact",
    informationText: "Initial Contact",
    viewForms: "View Form",
    href: `/recruitment/enquiry-stage/initial-contact?fosterCarerId=${fosterCarerId}`,
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
    imgIcon: initialStageImg,
    textForApi: "initalEnquiryStage",
    text: "Initial Enquiry Stage",
    informationText: "Initial Enquiry",
    viewForms: "View Form",
    href: `carer-info/personal-info/initial-enquiry?fosterCarerId=${fosterCarerId}`,
  },
  {
    id: 3,
    informationIcon: [
      { content: `IFA Office admin will send out a Digital  info Pack` },
      {
        content: `Digital Info Pack contains `,
        subContentTwo: [
          { content: `Intital enquiry form` },
          { content: `application form` },
          { content: `Policies and guideline of the IFA` },
          { content: `Carer Address History` },
          { content: `Training Profile` },
          { content: `Form F  ( few sections only )` },
          { content: `Fand more basic forms` },
        ],
      },
      {
        content: `Prospective Foster Carer  is given a login to the IFA Software
      The Login credential will be emailed out to the Carer
      Login [ User access :  Prospective Foster Carer  ] 
      This access will have limited access to the form`,
      },
      {
        content: `Prospective Foster Carer logins and only starts to enter the date on the  forms ( example : Intital enquiry form , Application form , Form F , Policies and guideline of the IFA )
        The Carer then sends back the forms.
        Once he has sent the form back to IFA, he only have read-only   access to the data he has entered`,
      },
      {
        content: `These data will be reviewed  by Employee of IFA  - either  Supervising Social worker /  IFA ADM ( agency decision maker ) / Office admin
        Review Criteria -> Eligibity of being a Foster Carer`,
      },
    ],
    imgIcon: digitalInfoImg,
    textForApi: "digitalInfo",
    text: "Digital Info Pack",
    informationText: "Digital Application Pack/ info Pack",
    viewForms: "View Form",
    href: `/carer-info?fosterCarerId=${fosterCarerId}`,
  },
  {
    id: 4,
    informationIcon: [
      {
        content: `Initial visit is a meeting in your home, conducted by a recruitment officer / or social worker.`,
      },
      {
        content: `The Initial Home Visit is designed to get to know the carer better – and so carer can get to know IFA too.`,
      },
      {
        content: `During the home visit, a qualified member of IFA team will discuss carer's expectations of being a foster carer.`,
      },
      {
        content: `IFA will also talk about the importance of fostering and the circumstances that lead children into foster care.`,
      },
      {
        content: `Conversation topics and questions`,
      },
      {
        content: `During the home visit, IFA will cover a range of conversation topics and ask questions to understand more about you and your family. Some of the topics we would typically cover include :`,
        subContentTwo: [
          { content: `Current situation (including relationship status)` },
          { content: `Home circumstances` },
          { content: `Family life` },
          { content: `Why you want to become a foster carer` },
          { content: `Types of fostering placements` },
          { content: `Childcare experience` },
          { content: `Background and history` },
          { content: `Pets` },
        ],
      },
      {
        content: `Functions to cover :`,
        subContentTwo: [
          {
            content: `Calendar booking -> agree on a date with the Carer for the home visit`,
          },
          {
            content: `Social worker - makes notes/ Observations  /  fills out the forms`,
          },
          { content: `Initial Home visit Checklist` },
          {
            content: `Social worker  / qualified member of IFA team wil make :`,
            subContentThree: [
              { content: `Actions` },
              { content: `Recommendation for Reconsideration` },
            ],
          },
        ],
      },
    ],
    imgIcon: iitialHomeVisitImg,
    textForApi: "initalHome",
    text: "Initial Home Visit",
    informationText: "Initial Home Visit",
    viewForms: "View Form",
    href: `/carer-info/personal-info/initial-home-visit?fosterCarerId=${fosterCarerId}`,
    status: "Passed",
  },
  {
    id: 5,
    informationIcon: [
      {
        content: `Based on the information collected on  Inital Enquiry ,  Digital  data on the Forms , Initial  Home visits , Social worker commisions a full end-to-end assesssment`,
      },
      { content: `Finally Initial Enquiry will be APPROVED by ADM` },
    ],
    imgIcon: socialAssessmentImg,
    textForApi: "socialWorker",
    text: "Social Worker Assessment",
    informationText:
      "Social Worker is commissioned to carry out the full assessment",
    viewForms: "View Form",
    modal: true,
    modalComponent: <SocialWorkerFormDialogbox />,
  },
];
