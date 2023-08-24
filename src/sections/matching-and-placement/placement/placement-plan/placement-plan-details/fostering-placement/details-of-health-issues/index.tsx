import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const initailValue = {
  summaryOfAnyHealthIssues: '',
  detailsOfCurrentMedication: '',
  detailsOfMedicalDentalAppointments: '',
  detailsOfHealthDocuments: '',
  delegatedAuthorityIssues: '',
  summaryOfEmotionalAndBehaviouralDevelopment: '',
  whatSituations: '',
  manageTheseSituations: '',
  interventionsOrStrategies: '',
  viewsOfChildYoungPerson: '',
};

export const validationSchema = Yup.object().shape({
  summaryOfAnyHealthIssues: Yup.string().required('Field is required'),
  detailsOfCurrentMedication: Yup.string().required('Field is required'),
  detailsOfMedicalDentalAppointments: Yup.string().required('Field is required'),
  detailsOfHealthDocuments: Yup.string().required('Field is required'),
  delegatedAuthorityIssues: Yup.string().required('Field is required'),
  summaryOfEmotionalAndBehaviouralDevelopment: Yup.string().required('Field is required'),
  whatSituations: Yup.string().required('Field is required'),
  manageTheseSituations: Yup.string().required('Field is required'),
  interventionsOrStrategies: Yup.string().required('Field is required'),
  viewsOfChildYoungPerson: Yup.string().required('Field is required'),
})

export const formData = [
  {
    gridLength: 12,
    otherOptions: {
      name: 'summaryOfAnyHealthIssues',
      label: 'Summary of any health issues, medical conditions or disabilities, including allergies',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'detailsOfCurrentMedication',
      label: 'Details of current medication',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'detailsOfMedicalDentalAppointments',
      label: 'Details of any existing or outstanding medical/dental appointments',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'detailsOfHealthDocuments',
      label: 'Details of health documents made available to foster carer',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'delegatedAuthorityIssues',
      label: 'Have delegated authority issues regarding health been agreed (see Section B Health) and consent documents been provided?',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title: 'Emotional and behavioural development'
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'summaryOfEmotionalAndBehaviouralDevelopment',
      label: 'Summary of child/young person’s needs regarding their emotional and behavioural development',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'whatSituations',
      label: 'What situations does the child/young person find most difficult to cope with? Are there any “trigger factors” that the foster carer needs to be aware of?',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'manageTheseSituations',
      label: 'What has worked best in the past to manage these situations?',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'interventionsOrStrategies',
      label: 'What interventions or strategies have been discussed or agreed?',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'viewsOfChildYoungPerson',
      label: 'Views of child/young person',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title:'Note: Any actions identified which will be required in implementing the Health Plan should be reflected in the Care Plan'
  }
]