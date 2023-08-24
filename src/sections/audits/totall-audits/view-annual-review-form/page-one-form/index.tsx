import {
  RHFCheckbox,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

export const pageOneFormData = {
  details: [
    {
      label: "Enter Name (Code):",
      value: "Sangeetha, Subramanian (FCC-3)",
    },
    {
      label: "Supervising Social Worker:",
      value: "Not Assigned",
    },
    {
      label: "Address:",
      value: "119 Brampton Road Bexleyheath, KENT DA7 4SL",
    },
    {
      label: "Phone:",
      value: "07415901391",
    },
    {
      label: "Mobile:",
      value: "07415901391",
    },
    {
      label: "Email:",
      value: "sangeetha3012@gmail.com",
    },
  ],
  formFields: [
    {
      gridLength: 6,
      otherOptions: {
        name: "reviewWritten",
        label:
          "Review Written by (if other than the Supervising Social Worker)",
      },
      component: RHFTextField,
    },
    {
      tag: <br />,
    },
    {
      gridLength: 6,
      otherOptions: {
        label: "Review Type",
        name: "reviewType",
        select: true,
        options: [{ value: "Diasabeled Choice", label: "Diasabeled Choice" }],
        sx: { mb: 4}
      },
      component: RHFSelect,
    },
    {
      gridLength: 6,
      otherOptions: {
        name: "onFile",
        label: "on File",
        sx: { mb: 4}
      },
      component: RHFCheckbox,
    },
    {
      gridLength: 6,
      otherOptions: {
        label: "Review Date",
        name: "reviewDate",
        sx: { mb: 4}
      },
      component: RHFDatePicker,
    },
    {
      gridLength: 6,
      otherOptions: {
        label: "Next Review Date",
        name: "nextReviewDate",
        sx: { mb: 4}
      },
      component: RHFDatePicker,
    },
    {
      gridLength: 6,
      otherOptions: {
        label: "Prevoius Review Date",
        name: "preReviewDate",
        sx: { mb: 4}
      },
      component: RHFDatePicker,
    },
    {
      gridLength: 6,
      otherOptions: {
        label: "Confirmation of Review Held Date:",
        name: "confirmationofReviewHeldDate",
        sx: { mb: 4}
      },
      component: RHFDatePicker,
    },
    {
      gridLength: 6,
      otherOptions: {
        name: "hasReviewTakenPlace",
        label: "Has Review Taken Place",
      },
      component: RHFCheckbox,
    },
    {
      gridLength: 12,
      otherOptions: {
        label: "Purpose Of Review:",
        name: "purposeOfReview",
        multiline: true,
        minRows: 3,
        sx: { mb: 4}
      },
      component: RHFTextField,
    },
    {
      gridLength: 12,
      otherOptions: {
        label: "Independent Review Offer:",
        name: "independentReviewOffer",
        multiline: true,
        minRows: 3,
        sx: { mb: 4}
      },
      component: RHFTextField,
    },
    {
      gridLength: 6,
      otherOptions: {
        label: "Next Panel Date:",
        name: "nextPanelDate",
        sx: { mb: 4}
      },
      component: RHFDatePicker,
    },
    {
      gridLength: 6,
      otherOptions: {
        label: "Previous Panel Date:",
        name: "previousPanelDate",
        sx: { mb: 4}
      },
      component: RHFDatePicker,
    },
    {
      gridLength: 6,
      otherOptions: {
        label: "Current Approval Date:",
        name: "currentApprovalDate",
        sx: { mb: 4}
      },
      component: RHFDatePicker,
    },
    {
      gridLength: 12,
      otherOptions: {
        label: "Terms Of Approval:",
        name: "termsOfApproval",
        multiline: true,
        minRows: 3,
        sx: { mb: 4}
      },
      component: RHFTextField,
    },
    {
      gridLength: 12,
      otherOptions: {
        label: "Pets Info:",
        name: "petsInfo",
        multiline: true,
        minRows: 3,
        sx: { mb: 4}
      },
      component: RHFTextField,
    },
    {
      gridLength: 12,
      otherOptions: {
        label: "Previous Review Officer Recommendation",
        name: "previousReviewOfficerRecommendation",
        multiline: true,
        minRows: 3,
        sx: { mb: 4}
      },
      component: RHFTextField,
    },
    {
      gridLength: 12,
      otherOptions: {
        label: "Previous Panel Recommendation",
        name: "previousPanelRecommendation",
        multiline: true,
        minRows: 3,
        sx: { mb: 4}
      },
      component: RHFTextField,
    },
    {
      gridLength: 12,
      otherOptions: {
        label: "Issues for Discussion at Review Time",
        name: "issuesforDiscussionatReviewTime",
        multiline: true,
        minRows: 3,
        sx: { mb: 4}
      },
      component: RHFTextField,
    },
    {
      gridLength: 12,
      otherOptions: {
        label: "Dates of Supervising Social Worker Visits",
        name: "datesofSupervisingSocialWorkerVisits",
        multiline: true,
        minRows: 3,
        sx: { mb: 4}
      },
      component: RHFTextField,
    },
    {
      gridLength: 12,
      otherOptions: {
        label: "Dates Of Unannounced Visit",
        name: "datesOfUnannouncedVisit",
        multiline: true,
        minRows: 3,
        sx: { mb: 4}
      },
      component: RHFTextField,
    },
    {
      gridLength: 12,
      otherOptions: {
        name: "safeCaringPolicyisUptodate",
        label: "Safe Caring Policy is Up to date?",
        sx: { mb: 4}
      },
      component: RHFCheckbox,
    },
    {
      gridLength: 12,
      otherOptions: {
        label: "Mettings",
        name: "mettings",
        multiline: true,
        minRows: 3,
        sx: { mb: 4}
      },
      component: RHFTextField,
    },
    {
      gridLength: 6,
      otherOptions: {
        label: "Number of rooms currently used for the purpose of fostering?",
        name: "numberofRooms",
        sx: { mb: 4}
      },
      component: RHFTextField,
    },
    {
      gridLength: 12,
      otherOptions: {
        label: "Foster Carer Current Placement",
        name: "FosterCarerCurrentPlacement",
        multiline: true,
        minRows: 3,
        sx: { mb: 4}
      },
      component: RHFTextField,
    },
    {
      gridLength: 12,
      otherOptions: {
        label: "Sleeping Arrangments",
        name: "sleepingArrangments",
        multiline: true,
        minRows: 3,
      },
      component: RHFTextField,
    },
    {
      gridLength: 12,
      otherOptions: {
        name: "carerRegisteredChildminder",
        label: "Is Carer a Registered Childminder?",
      },
      component: RHFCheckbox,
    },
  ],
};
