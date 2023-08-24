import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const initailValue = {
  summaryOfIdentityNeeds: '',
  participateInReligiousActivities: '',
  detailsOfAnyPlaceOfWorship: '',
  personalCareOrDietaryNeeds: '',
  doesNotSpeakEnglish: '',
  lifeStoryOrMemoryWork: '',
  howTheySeeThemselves: '',
  areasRegardingIdentity: '',
  stageAsylumProcess: '',
  indentifyingSolicitor: '',
  UKBorderAgency: '',
  UKBorderAgencyCaseOwner: '',
};

export const validationSchema = Yup.object().shape({
  summaryOfIdentityNeeds: Yup.string().required('Field is required'),
  participateInReligiousActivities: Yup.string().required('Field is required'),
  detailsOfAnyPlaceOfWorship: Yup.string().required('Field is required'),
  personalCareOrDietaryNeeds: Yup.string().required('Field is required'),
  doesNotSpeakEnglish: Yup.string().required('Field is required'),
  lifeStoryOrMemoryWork: Yup.string().required('Field is required'),
  howTheySeeThemselves: Yup.string().required('Field is required'),
  areasRegardingIdentity: Yup.string().required('Field is required'),
  stageAsylumProcess: Yup.string().required('Field is required'),
  indentifyingSolicitor: Yup.string().required('Field is required'),
  UKBorderAgency: Yup.string().required('Field is required'),
  UKBorderAgencyCaseOwner: Yup.string().required('Field is required'),
})

export const formData = [
  {
    gridLength: 12,
    otherOptions: {
      name: 'summaryOfIdentityNeeds',
      label: 'Summary of child/young person’s identity needs (regarding gender, sexual orientation, religion, ethnicity, culture, language, geography or community )',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'participateInReligiousActivities',
      label: 'Does the child/young person actively participate in any religious activities?',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'detailsOfAnyPlaceOfWorship',
      label: 'Details of any place of worship, times of attendance, or any religious practices to be observed',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'personalCareOrDietaryNeeds',
      label: 'Details of any personal care or dietary needs that need tp be addressed',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'doesNotSpeakEnglish',
      label: 'For child/young person who does not speak English or where English is not their first language, what arrangements are required to enable them to have language support?',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'lifeStoryOrMemoryWork',
      label: 'What are the plans for life story work or memory work? What is the role of the foster carer or social worker in doing this?',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'howTheySeeThemselves',
      label: 'Is there anything the child/young person wants to tell us about what is important to them – how they see themselves?',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'areasRegardingIdentity',
      label: "Are these areas regarding identity where the child's needs cannot be mey by the carers or within the placement? How will these gaps be filled to ensure the child/young person develops a positive understanding of his/her heritage, e.g. identified training, support or information needs of the carer?",
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Note: Any actions identified that will be required in implementing the education plan should be reflected in the Care Plan'
  },
  {
    title: 'If the child/young person is an unaccompanied asylum seeker, complete the following:'
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'stageAsylumProcess',
      label: "What stage are they at in the asylum process?",
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'indentifyingSolicitor',
      label: "Who will be responsible for indentifying a solicitor for them?",
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'UKBorderAgency',
      label: "Who will accompany the child/young person to interviews at the UK Border Agency and undertake the role of the responsible adult?",
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'UKBorderAgencyCaseOwner',
      label: "Who will be the point of contact with the UK Border Agency case owner?",
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
]