import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const initailValue = {
  currentInterest: '',
  currentActivities: '',
  fosterFamilyCurrentActivities: '',
  arrangements: '',
  equipment: '',
  alternativeArrangements: '',
  holidaysArrangements: '',
  responsibleForObtaining: '',
};

export const validationSchema = Yup.object().shape({
  currentInterest: Yup.string().required('Field is required'),
  currentActivities: Yup.string().required('Field is required'),
  fosterFamilyCurrentActivities: Yup.string().required('Field is required'),
  arrangements: Yup.string().required('Field is required'),
  equipment: Yup.string().required('Field is required'),
  alternativeArrangements: Yup.string().required('Field is required'),
  holidaysArrangements: Yup.string().required('Field is required'),
  responsibleForObtaining: Yup.string().required('Field is required'),
})

export const formData = [
  {
    gridLength: 12,
    otherOptions: {
      name: 'currentInterest',
      multiline: true,
      minRows: 3,
      label: 'What are the child/young person’s current interests and what might they like to develop?'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'currentActivities',
      multiline: true,
      minRows: 3,
      label: 'What are the child/young person’s current activities and what might they like to develop?'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'fosterFamilyCurrentActivities',
      multiline: true,
      minRows: 3,
      label: 'Will the child/young person be included in the foster family’s current activities? How?'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'arrangements',
      multiline: true,
      minRows: 3,
      label: 'Practical arrangements – finance, transport:'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'equipment',
      multiline: true,
      minRows: 3,
      label: 'Are there any toys or equipment that the child/young person would like to bring to the foster home? If so, who will arrange this?'
    },
    component: RHFTextField
  },
  {
    title: 'Holidays and alternative care arrangements'
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'alternativeArrangements',
      multiline: true,
      minRows: 3,
      label: 'What are the alternative care arrangements for the child/young person on a planned or emergency basis?'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'holidaysArrangements',
      multiline: true,
      minRows: 3,
      label: 'Holidays – arrangements for the child/young person to accompany the carers and actions required, e.g. does the child/young person have a passport?'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'responsibleForObtaining',
      multiline: true,
      minRows: 3,
      label: ' If not, who will be responsible for obtaining this?'
    },
    component: RHFTextField
  },
]