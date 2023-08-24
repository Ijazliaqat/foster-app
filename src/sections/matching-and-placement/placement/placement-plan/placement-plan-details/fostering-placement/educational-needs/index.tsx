import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const initailValue = {
  summaryOfEducationalNeeds: '',
  encourageAndDevelop: '',
  educationAndHealthcarePlan: '',
  copyOfChildLastPEP: '',
  transportArrangements: '',
  educationalProvision: '',
  haveDelegatedAuthorityIssues: '',
};

export const validationSchema = Yup.object().shape({
  summaryOfEducationalNeeds: Yup.string().required('Field is required'),
  encourageAndDevelop: Yup.string().required('Field is required'),
  educationAndHealthcarePlan: Yup.string().required('Field is required'),
  copyOfChildLastPEP: Yup.string().required('Field is required'),
  transportArrangements: Yup.string().required('Field is required'),
  educationalProvision: Yup.string().required('Field is required'),
  haveDelegatedAuthorityIssues: Yup.string().required('Field is required'),
})

export const formData = [
  {
    gridLength: 12,
    otherOptions: {
      name: 'summaryOfEducationalNeeds',
      label: 'Summary of child/young person’s educational needs',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'encourageAndDevelop',
      label: 'How is the foster carer going to encourage and develop the child/young person’s learning?',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'educationAndHealthcarePlan',
      label: 'Details of any Education and Healthcare Plan (EHCP) and provisions',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'copyOfChildLastPEP',
      label: 'Has the foster carer received a copy of the child’s last PEP? Date of next PEP meeting',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'transportArrangements',
      label: 'Details of transport arrangements',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'educationalProvision',
      label: 'Arrangements if child is not in full-time education or is excluded from educational provision',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'haveDelegatedAuthorityIssues',
      label: 'Have delegated authority issues regarding education been agreed? (refer to Section B Education)',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
  {
    title:'Note: Any actions identified that will be required in implementing the education plan should be reflected in the Care Plan'
  }
]