import SignaturePad from "@root/components/SignaturePad";
import {
  RHFRadioGroup,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const initialValues = {
  socialWorkerName: "select",
  localAuthority: "select",
  childName: "child name",
  fosterCarerName: "select",
  feelingsAndPreferences: "Yes",
  feelingsAndPreferencesComments: "comments",
  expectationsAroundConfidentiality: "Yes",
  expectationsAroundConfidentialityComments: "comments",
  doesFosterCarerWorkEffectively: "Yes",
  doesFosterCarerWorkEffectivelyCommets: "Yes",
  promoteContactWhereAppropriate: "Yes",
  promoteContactWhereAppropriateCommets: "comments",
  healthyPhysicalAndEmotionalCare: "Yes",
  healthyPhysicalAndEmotionalCareComments: "comments",
  challengingBehaviour: "Yes",
  challengingBehaviourComments: "comments",
  communicateEffectively: "Yes",
  communicateEffectivelyComments: "comments",
  education: "Yes",
  educationComments: "comments",
  keepChildrenSafe: "Yes",
  keepChildrenSafeComments: "comments",
  AdditionalComments: "comments",
};

export const formSchema = Yup.object().shape({
  socialWorkerName: Yup.string().required("Field is required."),
  localAuthority: Yup.string().required("Field is required."),
  childName: Yup.string().required("Field is required."),
  fosterCarerName: Yup.string().required("Field is required."),
  feelingsAndPreferences: Yup.string().required("Field is required."),
  feelingsAndPreferencesComments: Yup.string().required("Field is required."),
  expectationsAroundConfidentiality:
    Yup.string().required("Field is required."),
  expectationsAroundConfidentialityComments:
    Yup.string().required("Field is required."),
  doesFosterCarerWorkEffectively: Yup.string().required("Field is required."),
  doesFosterCarerWorkEffectivelyCommets:
    Yup.string().required("Field is required."),
  promoteContactWhereAppropriate: Yup.string().required("Field is required."),
  promoteContactWhereAppropriateCommets:
    Yup.string().required("Field is required."),
  healthyPhysicalAndEmotionalCare: Yup.string().required("Field is required."),
  healthyPhysicalAndEmotionalCareComments:
    Yup.string().required("Field is required."),
  challengingBehaviour: Yup.string().required("Field is required."),
  challengingBehaviourComments: Yup.string().required("Field is required."),
  communicateEffectively: Yup.string().required("Field is required."),
  communicateEffectivelyComments: Yup.string().required("Field is required."),
  education: Yup.string().required("Field is required."),
  educationComments: Yup.string().required("Field is required."),
  keepChildrenSafe: Yup.string().required("Field is required."),
  keepChildrenSafeComments: Yup.string().required("Field is required."),
  AdditionalComments: Yup.string().required("Field is required."),
});

export const FREFormData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Name of Social Worker",
      name: "socialWorkerName",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Local Authority",
      name: "localAuthority",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
    },
    component: RHFSelect,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Name of child",
      name: "childName",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Name of foster carer(s)",
      name: "fosterCarerName",
      fullWidth: true,
      select: true,
      options: [
        { value: "select 1", label: "select 1" },
        { value: "select 2", label: "select 2" },
        { value: "select 3", label: "select 3" },
      ],
    },
    component: RHFSelect,
  },
  { gridLength: 12, head: "Individual needs of children" },
  {
    gridLength: 12,
    title:
      "Does the foster carer listen to and take account of the individual needs, wishes, feelings and preferences of the child or young person?",
    otherOptions: {
      name: "feelingsAndPreferences",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Comments:",
      name: "feelingsAndPreferencesComments",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  {
    gridLength: 12,
    head: "Confidentiality",
  },
  {
    gridLength: 12,
    title:
      "Does the foster carer comply with your expectations around confidentiality?",
    otherOptions: {
      name: "expectationsAroundConfidentiality",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Comments",
      name: "expectationsAroundConfidentialityComments",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  { gridLength: 12, head: "Working as part of a team" },
  {
    gridLength: 12,
    title:
      "Does the foster carer work effectively with you as the child or young person’s social worker, and other professionals, including contributing to planning, and communicating effectively?",
    otherOptions: {
      name: "doesFosterCarerWorkEffectively",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12,
    otherOptions: {
      label: "Comments",
      name: "doesFosterCarerWorkEffectivelyCommets",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  { gridLength: 12, head: "Working with birth family" },
  {
    gridLength: 12,
    title:
      "Does the foster carer understand the importance of the child or young person’s birth family, and work to support and promote contact where appropriate?",
    otherOptions: {
      name: "promoteContactWhereAppropriate",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12, 
    otherOptions: {
      label: "Comments",
      name: "promoteContactWhereAppropriateCommets",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  { gridLength: 12, head: "healthy physical and emotional care" },
  {
    gridLength: 12,
    title:
      "Does the foster carer promote the healthy physical and emotional care of the child or young person, including their sexual health (where appropriate)",
    otherOptions: {
      name: "healthyPhysicalAndEmotionalCare",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12, 
    otherOptions: {
      label: "Comments",
      name: "healthyPhysicalAndEmotionalCareComments",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  { gridLength: 12, head: "Managing behaviour" },
  {
    gridLength: 12,
    title:
      "Does the foster carer promote positive behaviour and manage any challenging behaviour safely and appropriately?",
    otherOptions: {
      name: "challengingBehaviour",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12, 
    otherOptions: {
      label: "Comments",
      name: "challengingBehaviourComments",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  { gridLength: 12, head: "Communicating with children" },
  {
    gridLength: 12,
    title:
      "Does the foster carer communicate effectively with the child or young person according to their age and stage of development and encourage them to make their own decisions as appropriate?",
    otherOptions: {
      name: "communicateEffectively",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12, 
    otherOptions: {
      label: "Comments",
      name: "communicateEffectivelyComments",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  { gridLength: 12, head: "Education" },
  {
    gridLength: 12,
    title:
      "Does the foster carer support the child or young person in relation to education, training and employment, including advocating that their educational needs are met?",
    otherOptions: {
      name: "education",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12, 
    otherOptions: {
      label: "Comments",
      name: "educationComments",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  { gridLength: 12, head: "Keeping children safe" },
  {
    gridLength: 12,
    title:
      "Does the foster carer keep the child or young person safe, and feeling safe, and help the child or young person keep themselves safe, including communicating with them about risk and safety?",
    otherOptions: {
      name: "keepChildrenSafe",
      options: ["Yes", "No"],
    },
    component: RHFRadioGroup,
  },
  {
    gridLength: 12, 
    otherOptions: {
      label: "Comments",
      name: "keepChildrenSafeComments",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
  { gridLength: 12, head: "Additional comments" },
  {
    gridLength: 12,
    title:
      "If you have any additional comments, particularly any concerns that you might have, please provide details",
    otherOptions: {
      name: "AdditionalComments",
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField,
  },
];
