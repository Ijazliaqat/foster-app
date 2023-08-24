import * as Yup from "yup";
import deRegConsulationFosterImg from "../../../../assets/img/de-register/dereg-consultation-foster-img.svg";
import deFosterReviewImg from "../../../../assets/img/de-register/dereg-foster-review-img.svg";
import deFinalOutcomeImg from "../../../../assets/img/de-register/final-outcome-img.svg";

export const DeRegAssessmentStageData = [
  {
    id: 1,
    informationIcon: [
      {
        content: `At least 2 weaks prior to the formal review, the fostering social worker will share with the foster carer a copy of the quality assured review report 
        to enable them to prepare for the review in advance. The foster carer will have the opportunity to communicate his or her 
        views verbally or in writing to the fostering worker. The report will be based on feedback from any current child in placement, 
        the social worker for any child currently in placement, the parent/s of any child in placement (via their social worker) and the carers own children.
    `,
      },
      {
        content: `The fostering social worker will also, in preparation for the review, include the written comments and opinions as to the quality of care provided 
        from all social worker who have used the foster carer for a placement since the last formal review as recorded on the social worker's end of placement 
        report. This will include contacting a social worker from outside the authority where appropriate. The fostering social worker will also seek and  
        take into account the views of any child placed with the foster carer since the last review via the child's social worker. West Berkshire Children 
        and Family Servicewill also ascertain the views of the Independent Reviewing Officer. Feedback will be sent out to the relevent parties at least 
        12 weeks prior to the carer review taking place and will be monitored and followed up until it is returned, or the non return of feedback will be 
        escalated to both Locality and Family Placement Managers, at least 4 weeks before the review is due. 
    `,
      },
      {
        content: `The Review Report will be Quality Assured by the relevent manager within Family Placement Team before it is shared with the carer and will 
        be shared with the Foster Carer at least 2 weeks before the review.
    `,
      },
    ],
    imgIcon: deRegConsulationFosterImg,
    textForApi: "initalContact",
    text: "Consultation with Foster Carer",
    informationText: "Consultation with Foster Carer",
    viewForms: "View Form",
    href: "/de-registration/deregister-foster-carer/consultation-with-foster-carer",
    status: "Failed",
  },
  {
    id: 2,
    informationIcon: [
      {
        content: `The review will be chaired by the Foster Care Reviewing Officer. At the review meeting, the agenda as set out in the Foster Carer Review 
        Form will include consideration of progress of the actions agreed at the previous review, appraisal of the foster carer's training and development 
        needs andd attendance on booked training, an evaluation of the training received since the last review, the foster carer's views of the serviceand 
        support provided as well as the appropriatencess of placements made and the care provided by the foster carer. Including the quality of their 
        daily recording, attendance and training and available support groups. 
    `,
      },
    ],
    imgIcon: deFosterReviewImg,
    textForApi: "initalEnquiryStage",
    text: "Formal Review Meeting",
    informationText: "Formal Review Meeting",
    viewForms: "View Form",
    href: "/de-registration/deregister-foster-carer/formal-review-meeting",
    status: "Passed",
  },
  {
    id: 3,
    informationIcon: [
      { content: `A Review From will be completed and any recommendation discussed with the Foster carer and recorded. The Foster carer should have the 
      opportunity to put their views on the recommendations in writing to be presented to the Fostering panel or the agency decision maker (Fostering) 
      when the Review Form is considered.` },
    ],
    imgIcon: deFinalOutcomeImg,
    textForApi: "digitalInfo",
    text: "Final Outcome",
    informationText: "Final Outcome",
    viewForms: "Review Report",
    modal: true,
    status: "Pending",
  },
];

export const DeRegisterAssessmentStageCarerSchema: any = Yup.object().shape({
  updatePhoto: Yup.mixed().required("Field is Required"),
});
