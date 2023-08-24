import { RHFTextField } from "@root/components/hook-form";

import * as Yup from "yup";

export const defaultValues = {
  familyBackground: "",
  familyBackgroundAnalysis: "",

  adultLife: "",
  adultLifeAnalysis: "",

  personalityAndRelationship: "",
  personalityAndRelationshipAnalysis: "",

  houseHoldMembers: "",
  houseHoldMemberAnalysis: "",

  otherChildren: "",
  otherChildrenAnalysis: "",

  careforChildren: "",
  careforChildrenAnalysis: "",

  careForChildrenProvideStructure: "",
  careForchildrenProvideStructureAnalysis: "",

  careForChildrenProvideDurability: "",
  careForChildrenProvideDurabilityAnalysis: "",

  workEffectively: "",
  workEffectivelyAnalysis: "",

  understandingIdentity: "",
  understandingIdentityAnalysis: "",

  motivationAndTiming: "",
  motivationAndTimingAnalysis: "",

  preparationAndTraining: "",
  preparationAndTrainingAnalysis: "",

  Anticipated: "",
  AnticipatedAnalysis: "",

  understandingOfSafer: "",
  understandingOfSaferAnalysis: "",

  futureTraining: "",
  futureTrainingAnalysis: "",
};

export const FormSchema = Yup.object().shape({
  familyBackground: Yup.string().required("Required"),
  familyBackgroundAnalysis: Yup.string().required("Required"),

  adultLife: Yup.string().required("Required"),
  adultLifeAnalysis: Yup.string().required("Required"),

  personalityAndRelationship: Yup.string().required("Required"),
  personalityAndRelationshipAnalysis: Yup.string().required("Required"),

  houseHoldMembers: Yup.string().required("Required"),
  houseHoldMemberAnalysis: Yup.string().required("Required"),

  otherChildren: Yup.string().required("Required"),
  otherChildrenAnalysis: Yup.string().required("Required"),

  careforChildren: Yup.string().required("Required"),
  careforChildrenAnalysis: Yup.string().required("Required"),

  careForChildrenProvideStructure: Yup.string().required("Required"),
  careForchildrenProvideStructureAnalysis: Yup.string().required("Required"),

  careForChildrenProvideDurability: Yup.string().required("Required"),
  careForChildrenProvideDurabilityAnalysis: Yup.string().required("Required"),

  workEffectively: Yup.string().required("Required"),
  workEffectivelyAnalysis: Yup.string().required("Required"),

  understandingIdentity: Yup.string().required("Required"),
  understandingIdentityAnalysis: Yup.string().required("Required"),

  motivationAndTiming: Yup.string().required("Required"),
  motivationAndTimingAnalysis: Yup.string().required("Required"),

  preparationAndTraining: Yup.string().required("Required"),
  preparationAndTrainingAnalysis: Yup.string().required("Required"),

  Anticipated: Yup.string().required("Required"),
  AnticipatedAnalysis: Yup.string().required("Required"),

  understandingOfSafer: Yup.string().required("Required"),
  understandingOfSaferAnalysis: Yup.string().required("Required"),

  futureTraining: Yup.string().required("Required"),
  futureTrainingAnalysis: Yup.string().required("Required"),
});
export const aboutApplicantsFormData = [
  {
    id: 1,
    componentProps: {
      name: "familyBackground",
      label: "1. Family background and childhood (including education)",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 2,
    componentProps: {
      name: "familyBackgroundAnalysis",
      label: "",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },

  {
    id: 3,
    componentProps: {
      name: "adultLife",
      label: "2. Adult life (including employment and previous relationships)",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 4,
    componentProps: {
      name: "adultLifeAnalysis",
      label: "Analysis",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },

  {
    id: 5,
    componentProps: {
      name: "personalityAndRelationship",
      label: "3. Personality and current relationship",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 6,
    componentProps: {
      name: "personalityAndRelationshipAnalysis",
      label: "Analysis",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },

  {
    id: 7,
    componentProps: {
      name: "houseHoldMembers",
      label: "4. Household members (including children) and lifestyle",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 8,
    componentProps: {
      name: "houseHoldMemberAnalysis",
      label: "Analysis",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },

  {
    id: 9,
    componentProps: {
      name: "otherChildren",
      label:
        "5. Other children (including adults) and lifestyle / support network",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 10,
    componentProps: {
      name: "otherChildrenAnalysis",
      label: "Analysis",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 10.5,
    variant: "body2",
    heading: `
        Assessment of fostering capacity`,
  },

  {
    id: 11,
    componentProps: {
      name: "careforChildren",
      label:
        "6. Caring for children Providing warmth, empathy and encouragement",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 12,
    componentProps: {
      name: "careforChildrenAnalysis",
      label: "Analysis",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },

  {
    id: 13,
    componentProps: {
      name: "careForChildrenProvideStructure",
      label: "7. Caring for children Providing structure and boundaries",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 14,
    componentProps: {
      name: "careForchildrenProvideStructureAnalysis",
      label: "Analysis",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },

  {
    id: 15,
    componentProps: {
      name: "careForChildrenProvideDurability",
      label:
        "8. Caring for children Providing durability, ressilience and commitment",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 16,
    componentProps: {
      name: "careForChildrenProvideDurabilityAnalysis",
      label: "Analysis",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },

  {
    id: 17,
    componentProps: {
      name: "workEffectively",
      label: "9. Working effectively with others",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 18,
    componentProps: {
      name: "workEffectivelyAnalysis",
      label: "Analysis",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },

  {
    id: 19,
    componentProps: {
      name: "understandingIdentity",
      label: "10. Understanding identity and diversity",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 20,
    componentProps: {
      name: "understandingIdentityAnalysis",
      label: "Analysis",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 20.5,
    variant: "body2",
    heading: `
        Preparing to foster`,
  },

  {
    id: 21,
    componentProps: {
      name: "motivationAndTiming",
      label: "11. Motivation and timing of application",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 22,
    componentProps: {
      name: "motivationAndTimingAnalysis",
      label: "Analysis",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },

  {
    id: 23,
    componentProps: {
      name: "preparationAndTraining",
      label: "12. Preparation, training and expectations",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 24,
    componentProps: {
      name: "preparationAndTrainingAnalysis",
      label: "Analysis",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },

  {
    id: 25,
    componentProps: {
      name: "Anticipated",
      label: "13. Anticipated impact of fostering",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 26,
    componentProps: {
      name: "AnticipatedAnalysis",
      label: "Analysis",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },

  {
    id: 27,
    componentProps: {
      name: "understandingOfSafer",
      label: "14. Understanding of safer caring",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 28,
    componentProps: {
      name: "understandingOfSaferAnalysis",
      label: "Analysis",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },

  {
    id: 29,
    componentProps: {
      name: "futureTraining",
      label: "15. Future training and development",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 30,
    componentProps: {
      name: "futureTrainingAnalysis",
      label: "Analysis",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];

export { default as AboutApplicantsForm } from "./AboutApplicantsForm";
