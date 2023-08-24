import { RHFRadioGroup, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import SignaturePad from "@root/components/hook-form/SignaturePad";
import * as Yup from 'yup';

export const initialValues = {
  fosterCarer: 'foster Carer',
  supervisingSocialWorker: 'supervising Social Worker',
  changesOrEventsInHousehold: 'changes Or Events In Household',
  healthUpdate: 'health Update',
  reviewPeriod: 'review Period',
  supportNetwork: 'support Network',
  haveAgreementWithSocialWorker: 'Yes',
  hasSupervisingKeptAgreement: 'Yes',
  hasSupervisingKeptAgreementFostering: 'No',
  provideDetailsWithSupervisingSocialWorker: 'provide Details With Supervising SocialWorker',
  doYouFeelAdequatelySupport: 'Yes',
  hasDelegatedAuthority: 'Yes',
  provideDetailsToContributeWithSocialWorker: 'provide Details To Contribute With Social Worker',
  effectivelyWithOtherProfessionals: 'effectively With Other Professionals',
  haveYouDevelopKnowledgeCarer1: 'have You Develop Knowledge Carer1',
  planToDevelopAndProgress: 'plan To Develop And Progress',
  haveYouDevelopKnowledgeCarer2: 'have You Develop Knowledge Carer2',
  haveYouDevelopFosteringCarer2: 'have You Develop Fostering Carer2',
  termsOfApproval: 'terms Of Approval',
  termOfApprovalAppropriate: 'Yes',
  explainTermYouThinkAppropriate: 'explain Term You Think Appropriate',
  otherCommentsAboutApproval: 'other Comments About Approval',
  signatureCarer1: null,
  date1: new Date(),
  signatureCarer2: null,
  date2: new Date(),
};

export const formSchema = Yup.object().shape({
  fosterCarer: Yup.string().required('Field is required'),
  supervisingSocialWorker: Yup.string().required('Field is required'),
  changesOrEventsInHousehold: Yup.string().required('Field is required'),
  healthUpdate: Yup.string().required('Field is required'),
  reviewPeriod: Yup.string().required('Field is required'),
  supportNetwork: Yup.string().required('Field is required'),
  haveAgreementWithSocialWorker: Yup.string().required('Field is required'),
  hasSupervisingKeptAgreement: Yup.string().required('Field is required'),
  hasSupervisingKeptAgreementFostering: Yup.string().required('Field is required'),
  provideDetailsWithSupervisingSocialWorker: Yup.string().required('Field is required'),
  doYouFeelAdequatelySupport: Yup.string().required('Field is required'),
  hasDelegatedAuthority: Yup.string().required('Field is required'),
  provideDetailsToContributeWithSocialWorker: Yup.string().required('Field is required'),
  effectivelyWithOtherProfessionals: Yup.string().required('Field is required'),
  haveYouDevelopKnowledgeCarer1: Yup.string().required('Field is required'),
  planToDevelopAndProgress: Yup.string().required('Field is required'),
  haveYouDevelopKnowledgeCarer2: Yup.string().required('Field is required'),
  haveYouDevelopFosteringCarer2: Yup.string().required('Field is required'),
  termsOfApproval: Yup.string().required('Field is required'),
  termOfApprovalAppropriate: Yup.string().required('Field is required'),
  explainTermYouThinkAppropriate: Yup.string().required('Field is required'),
  otherCommentsAboutApproval: Yup.string().required('Field is required'),
  signatureCarer1: Yup.mixed().nullable().required('Field is required'),
  date1: Yup.date().required('Field is required'),
  signatureCarer2: Yup.mixed().nullable().required('Field is required'),
  date2: Yup.date().required('Field is required'),
})

export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      label: "Foster carer(s)",
      name: 'fosterCarer',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      label: "Supervising social worker",
      name: 'supervisingSocialWorker',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: "Changes since the last review",
    tooltip: true,
    tooltipMsg: 'Please describe any significant changes or events in your household that have impacted on your fostering since the last review. Please give any changes in household composition, or changes in employment (including any disciplinary action that may have been taken against you). How have these changes impacted on you and your family?',
    otherOptions: {
      name: 'changesOrEventsInHousehold',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: "Health Update",
    tooltip: true,
    tooltipMsg: 'Please describe any significant changes in your health that have impacted on your fostering since the last review. How have these changes impacted on you and your family?',
    otherOptions: {
      name: 'healthUpdate',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: "Reflection on the review period",
    tooltip: true,
    tooltipMsg: 'Please describe what has gone well for you since the last review (positive aspects), and what has not gone well or has been challenging (negative aspects). ',
    otherOptions: {
      name: 'reviewPeriod',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: "Support network",
    tooltip: true,
    tooltipMsg: 'Please provide details about who supports you and your family in your fostering, including people who care for the child at times when you are unable to do so.',
    otherOptions: {
      name: 'supportNetwork',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    border: true
  },
  {
    gridLength: 12,
    head: 'Working with the supervising social worker/fostering service'
  },
  {
    gridLength: 12,
    title: 'Do you have a supervision agreement with your supervising social worker?',
    otherOptions: {
      name: 'haveAgreementWithSocialWorker',
      options: ['Yes', 'No', 'Not Available'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Has your supervising social worker kept to this agreement?',
    otherOptions: {
      name: 'hasSupervisingKeptAgreement',
      options: ['Yes', 'No', 'Not Available'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Do you feel adequately supported by your supervising social worker/fostering service?',
    otherOptions: {
      name: 'hasSupervisingKeptAgreementFostering',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: "Please provide details, including what you do to contribute to a good working relationship with your supervising social worker/fostering service. ",
    otherOptions: {
      name: 'provideDetailsWithSupervisingSocialWorker',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    head: 'Working with the child social worker'
  },
  {
    gridLength: 12,
    title: 'Do you feel adequately supported by the child’s social worker?',
    otherOptions: {
      name: 'doYouFeelAdequatelySupport',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'Has delegated authority been given to you appropriately?',
    otherOptions: {
      name: 'hasDelegatedAuthority',
      options: ['Yes', 'No'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: "Please provide details, including what you do to contribute to a good working relationship with the child’s social worker.",
    otherOptions: {
      name: 'provideDetailsToContributeWithSocialWorker',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    head: 'Working with the child social worker'
  },
  {
    gridLength: 12,
    title: "Describe what you do to work effectively with other professionals such as health visitors, teachers, therapists, probation, Independent Reviewing Officers, and others. ",
    otherOptions: {
      name: 'effectivelyWithOtherProfessionals',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    head: 'Develop yourself – Carer 1 '
  },
  {
    gridLength: 12,
    title: "What have you done to develop your knowledge, skills and understanding about fostering since the last review? This can include attendance at training support groups and other learning, including from feedback from others ",
    otherOptions: {
      name: 'haveYouDevelopKnowledgeCarer1',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: "What do you plan to do in order to develop and progress your fostering careerbetween now and your next review?",
    otherOptions: {
      name: 'planToDevelopAndProgress',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    head: 'Develop yourself – Carer 2 '
  },
  {
    gridLength: 12,
    title: "What have you done to develop your knowledge, skills and understanding about fostering since the last review? This can include attendance at training, support groups and other learning, including from feedback from others. ",
    otherOptions: {
      name: 'haveYouDevelopKnowledgeCarer2',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: "What do you plan to do in order to develop and progress your fostering career between now and your next review? ",
    otherOptions: {
      name: 'haveYouDevelopFosteringCarer2',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    head: 'Terms of approval'
  },
  {
    gridLength: 12,
    title: "What are your terms of approval (if any) – including type of fostering, numbers and ages of children?",
    otherOptions: {
      name: 'termsOfApproval',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Do you think that these terms of approval are appropriate?',
    otherOptions: {
      name: 'termOfApprovalAppropriate',
      options: ['Yes', 'No', 'Not Available'],
      sx: { gap: { lg: '70px', xs: '10px' } }
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 6,
    title: "lf no, please explain what terms you think are appropriate, and why",
    otherOptions: {
      name: 'explainTermYouThinkAppropriate',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    head: 'Additional comments'
  },
  {
    gridLength: 12,
    title: "Please make any other comments about your terms of approval, or your experience of fostering since your last review, including any views on the quality of training and support groups, and any suggestions about how the service might be improved.",
    otherOptions: {
      name: 'otherCommentsAboutApproval',
      fullWidth: true,
      minRows: 3,
      multiline: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    title: 'Signature carer 1',
    otherOptions: {
      name: "signatureCarer1",
    },
    component: SignaturePad,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: 'Date',
      fullWidth: true,
      name: "date1",
      sx:{mt:2}
    },
    component: RHFDatePicker
  },
  {
    gridLength: 6,
    title: 'Signature carer 2',
    otherOptions: {
      name: "signatureCarer2",
    },
    component: SignaturePad,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: 'Date',
      fullWidth: true,
      name: "date2",
      sx:{mt:2}
    },
    component: RHFDatePicker
  }
]