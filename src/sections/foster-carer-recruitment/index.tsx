import InitalEnquiry from "@root/assets/img/foster-carer-recruitment/InitalEnquiry.png";
import DigitalApplication from "@root/assets/img/foster-carer-recruitment/DigitalApplication.png";
import InitialHomeVisit from "@root/assets/img/foster-carer-recruitment/InitialHomeVisit.png";
import SocialWorker from "@root/assets/img/foster-carer-recruitment/SocialWorker.png";
import RegularAssessment from "@root/assets/img/foster-carer-recruitment/RegularAssessment.png";
import StatutoryChecks from "@root/assets/img/foster-carer-recruitment/StatutoryChecks.png";
import TraningVarification from "@root/assets/img/foster-carer-recruitment/TraningVarification.png";
import Stage1Approval from "@root/assets/img/foster-carer-recruitment/Stage1Approval.png";
import FosteringPanel1 from "@root/assets/img/foster-carer-recruitment/FosteringPanel1.png";
import FosteringPanel2 from "@root/assets/img/foster-carer-recruitment/FosteringPanel2.png";
import AgencyDecision from "@root/assets/img/foster-carer-recruitment/AgencyDecision.png";
import SignOff from "@root/assets/img/foster-carer-recruitment/SignOff.png";
import SocialWorkerAllocated from "@root/assets/img/foster-carer-recruitment/SocialWorkerAllocated.png";
import FosterCarer from "@root/assets/img/foster-carer-recruitment/FosterCarer.png";
import CarerAwaiting from "@root/assets/img/foster-carer-recruitment/CarerAwaiting.png";

export const FosterCarerRecruitmentModal = [
  {
    title: "Enquiry Stage",
    arrow: true,
    subDetails: [
      {
        details: [
          {
            bullet:
              "Prospective Foster Carers / Customers makes initial enquiry by Phone / Social  media / Whatsapp  or use our Website - contact us form",
          },
          {
            bullet: "Source of Initial enquiry",
            subBullet: [
              "Phone",
              "Website Contact Us Form",
              "Word of mouth",
              "Social Media",
              "Email",
            ],
          },
          {
            bullet:
              "IFA Office admin collects the information from the customer",
          },
          {
            bullet:
              "IFA Office admin will perform the data entry on the initial enquiry form.",
          },
        ],
        src: InitalEnquiry,
        caption: "Initial Enquiry form Applicant",
      },
      {
        details: [
          {
            bullet: "IFA Office admin will send out a Digital  info Pack",
          },
          {
            bullet: "Digital Info Pack contains",
            subBullet: [
              "Initial enquiry form",
              "Application form",
              "Policies and guideline of the IFA",
              "Carer Address History",
              "Training Profile",
              "Form F  ( few sections only )",
              "and more basic forms",
            ],
          },
          {
            bullet:
              "Prospective Foster Carer  is given a login to the IFA Software\nThe Login credential will be emailed out to the Carer\nLogin [ User access :  Prospective Foster Carer  ]\nThis access will have limited access to the form",
          },
          {
            bullet:
              "Prospective Foster Carer logins and only starts to enter the date on the  forms ( example : Initial enquiry form , Application form , Form F , Policies and guideline of the IFA )\nThe Carer then sends back the forms.\nOnce he has sent the form back to IFA, he only have read-only   access to the data he has entered",
          },
          {
            bullet:
              "These data will be reviewed  by Employee of IFA  - either  Supervising Social worker /  IFA ADM ( agency decision maker ) / Office admin\nReview Criteria -> Eligibility of being a Foster Carer",
          },
        ],
        src: DigitalApplication,
        caption: "Digital Application Pack / info Pack",
      },
      {
        details: [
          {
            bullet:
              "Initial visit is a meeting in your home, conducted by a recruitment officer / or social worker.",
          },
          {
            bullet:
              "The Initial Home Visit is designed to get to know the carer better – and so carer can get to know IFA too.",
          },
          {
            bullet:
              "During the home visit, a qualified member of IFA team will discuss carer's expectations of being a foster carer.",
          },
          {
            bullet:
              "IFA will also talk about the importance of fostering and the circumstances that lead children into foster care.",
          },
          {
            bullet: "Conversation topics and questions",
          },
          {
            bullet:
              "During the home visit, IFA will cover a range of conversation topics and ask questions to understand more about you and your family. Some of the topics we would typically cover include :",
            subBullet: [
              "Current situation (including relationship status)",
              "Home circumstances",
              "Family life",
              "Why you want to become a foster carer",
              "Types of fostering placements",
              "Childcare experience",
              "Background and history",
              "Pets",
            ],
          },
          {
            bullet: "Functions to cover :",
            subBullet: [
              "Calendar booking -> agree on a date with the Carer for the home visit",
              "Social worker - makes notes/ Observations  /  fills out the forms",
              "Initial Home visit Checklist",
              `Social worker  / qualified member of IFA team wil make : \n.Action\n.Recommendation for Reconsideration`,
            ],
          },
        ],
        src: InitialHomeVisit,
        caption: "Initial Home Visit",
      },
      {
        details: [
          {
            bullet:
              "Based on the information collected on  Initial Enquiry ,  Digital  data on the Forms , Initial  Home visits , Social worker commissions a full end-to-end assessment",
          },
          {
            bullet: "Finally Initial Enquiry will be APPROVED by ADM",
          },
        ],
        src: SocialWorker,
        caption:
          "Social Worker is commissioned to carry out the full assessment",
      },
    ],
  },
  {
    title: "Assessment Stage 1",
    arrow: true,
    subDetails: [
      {
        details: [
          {
            bullet:
              "Based on the Carer Check-list , assessments and data collections occurs on regular basis, to get to know the carer much better.",
          },
          {
            bullet:
              "The credibility and eligibility  of the Foster Carer is examined thoroughly.",
          },
          {
            bullet: "As with any other meetings, these meetings will also be",
            subBullet: [
              "Scheduled",
              "Recorded",
              "Actions / Recommendations  are captured",
            ],
          },
          { title: "APPROVED / REJECTED at any stage" },
        ],
        src: RegularAssessment,
        caption: "Regular Assessment meeting with  the applicant",
      },
      {
        details: [
          {
            bullet: "Statutory checks are collected and verified for :",
            subBullet: [
              "Primary  Carer",
              "Secondary Carer ",
              "Back up carer ",
              "Family members of the Primary  Carer ",
              "Family members of the Secondary Carer",
              "Family members of the Back up carer ",
              "Primary Foster Carer provides the data of the above people ",
            ],
          },
          {
            bullet:
              "Primary Foster Carer provides the data of the above people ",
          },
          {
            bullet: "Statutory checks",
            subBullet: [
              "DBS Checks ",
              "Employment reference ",
              "Local Authority ",
              "Medical Advisor",
              "Former Partner Reference ",
              "Car Insurance ",
              "Drivers License",
            ],
          },
          {
            bullet:
              "IFA will verify  and confirm using ( Veriff ,  CheckMyDBS - Inhouse , Experian   ) ",
          },
        ],
        src: StatutoryChecks,
        caption: "Statutory Checks Verification",
      },
      {
        details: [
          {
            bullet:
              "If the foster carer is trained already, the training certifications are verified. ",
          },
          {
            bullet:
              "If the foster carer is not trained, IFA will enable his training needs using the Inhouse LMS API ",
          },
          {
            bullet: "Mandatory core courses to be completed within 12 months ",
          },
          {
            bullet:
              "Here is a list of the mandatory core courses that must be completed within 12 months of approval and repeated at least every 3 years (unless otherwise stated in brackets).",
            subBullet: [
              "Safeguarding and Child Protection (refresh yearly) ",
              "TSDS (5-year refresher)   -Training, support and development standards ",
              "Addictive Behavior including drug abuse, alcohol abuse, smoking ",
              "Complex Needs",
              "First Aid (3-year refresher) ",
              "General Data Protection Regulation (GDPR) ",
              "Fostering Allowances ",
              "Keeping Children Safe Online ",
              "Completing Carer Logs (logging, recording and data protection) ",
              "TCIF - Therapeutic Crisis Intervention for Families",
              "Child Development  ",
              "Safe Caring ",
              "Mental Health Awareness",
              "Child Sexual Exploitation (CSE)",
            ],
          },
        ],
        src: TraningVarification,
        caption: "Training Verification",
      },
      {
        details: [
          {
            bullet: "Based on the information collected under : ",
            subBullet: [
              "Regular Assessment meetings with the applicant",
              "Statutory Checks Verification ",
              "Training Verifications ",
            ],
          },
          {
            bullet:
              "The Potential Foster Carer is approved for Stage 1 and he is signed for the Panel interview.",
          },
        ],
        src: Stage1Approval,
        caption: "Stage 1 Approval",
      },
    ],
  },
  {
    title: "Assessment Stage 2",
    arrow: true,
    subDetails: [
      {
        details: [
          {
            bullet:
              "Fostering panel will take place at the IFA office. The meeting consisting of about eight or nine independent panel members who have related fostering experience and skills. ",
          },
          {
            bullet:
              "At the meeting they will sit down and together will look through your Form F to discuss the type of fostering placement that’s right for you and make recommendations about your suitability to be approved as a foster parent.",
          },
          {
            bullet:
              "The fostering panel's primary legal function is to make a recommendation about a person's suitability to be a foster carer.",
          },
          {
            bullet:
              "In doing so, they consider the terms of their approval, including the number and age range of children they wish to care for.",
          },
          { title: "What do fostering panels do?" },
          {
            bullet: "A fostering panel will have the following duties:",
            subBullet: [
              "To consider fostering applications and make recommendations about the suitability of applicants. This also includes making recommendations about the number, age range and backgrounds of the children placed with carers.",
              "To review the continued suitability of foster carers",
              "To consider any serious complaint or allegation against a foster carer.",
              "To ensure the fostering provider (UK Fostering) works to certain standards",
            ],
          },
          {
            title: "What do fostering panels do?",
          },
          {
            para: "The fostering applicant and their assessing social worker will usually be invited to attend the panel. This would normally take place as part of a number of other fostering assessments taking place that day. You would normally be asked to wait outside the panel room until called. The assessing social worker should be called in first to present your application and his/her assessment to the panel. The panel will then ask you to come in and may ask you a few further questions linked to the assessment that they have read and your assessing social workers’ presentation.",
          },
        ],
        src: FosteringPanel1,
        caption: "Fostering panel Assessment / interview",
      },
      {
        details: [
          {
            para: "Following the questions asked by the panel, and any questions you may want to ask yourself, you will be asked to leave the room whilst the panel make their recommendations. They will then call you back to inform you of their decision. ",
          },
          {
            bullet: "Decisions will range from:",
            subBullet: [
              "Recommendation for approval",
              "Rejection of the application",
              "Deferral whereby they would like further information collected before they can make their decision.",
            ],
          },
        ],
        src: FosteringPanel2,
        caption: "Fostering Panel Recommendation",
      },
      {
        details: [
          {
            bullet:
              "The Agency Decision Maker will be sent a copy of all papers considered by the panel when reaching their recommendation.",
          },
          {
            bullet:
              "Based on the Recommendation ,Agency Decision Maker (ADM ) will either approve or reject the Prospective Foster Carer ",
          },
          {
            bullet: "The decision will comply  with ",
            subBullet: [
              "The Fostering Services (England) Regulations 2011",
              "The National Minimum Standards for Fostering Services 2011",
            ],
          },
          {
            bullet:
              "In circumstances where the Agency Decision Maker does not agree with the panel recommendation, before making a final decision they are required to consult with a senior colleague with the relevant social work qualification and experience and record their discussion and the outcome. A copy of this record must be placed on the Foster Carers or applicants file by the Agency Advisor. ",
          },
          {
            bullet:
              "If the applicants or Foster Carers disagree with this decision, they have the right to seek further consideration of their application, or status, to the Fostering Panel or they may seek further consideration through the Independent Review Mechanism (IRM) procedure. The Agency Advisor has responsibility for ensuring that the applicants or carers are advised of this opportunity to seek further action.",
          },
        ],
        src: AgencyDecision,
        caption: "Agency Decision Maker reviews the panel assessment",
      },
      {
        details: [
          {
            bullet:
              "The primary aim of the Fostering Agency is to ensure the provision of a high quality fostering service that safeguards and promotes the welfare of those children who are looked after by the Children's Services Trust, or children placed with our carers by any other agency.",
          },
          {
            bullet:
              "In all matters the Fostering Agency will consider the welfare of children to be paramount. Based on this principle , the foster carer is approved to be a 'Registered Foster Carer'  or 'Approved Foster Carer'",
          },
        ],
        src: SignOff,
        caption: "Sign-off and Approval",
      },
    ],
  },
  {
    title: "Start of Fostering",
    arrow: false,
    subDetails: [
      {
        details: [
          {
            bullet:
              "Social workers explain the terms&conditions of the IFA. Also collects the placement needs from the carer. ",
          },
          {
            bullet:
              "Their role is to help improve outcomes in people's lives. They maintain professional relationships and act as guides and advocates.",
          },
          {
            bullet:
              "Social workers support individuals and their families through difficult times and ensure that vulnerable people, including children and adults, are safeguarded from harm",
          },
        ],
        src: SocialWorkerAllocated,
        caption: "Social Worker is allocated to the carer",
      },
      {
        details: [
          {
            bullet: "Foster carer is fully eligible for the placement ",
          },
          {
            bullet: "The Placement needs and preference are also collected. ",
          },
        ],
        src: CarerAwaiting,
        caption: "Foster Carer is put on the 'vacancy list'",
      },
      {
        details: [
          {
            bullet:
              "Carer awaits the right placement based on the Matching Criteria.",
          },
        ],
        src: FosterCarer,
        caption: "Carer Awaiting Placement for Fostering Child",
      },
    ],
  },
];

export { default as FosterCarerRecruitmentHeader } from "./FosterCarerRecruitmentHeader";
