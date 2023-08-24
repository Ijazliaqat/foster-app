import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const initailValue = {
  ableToResponsibility: '',
  areasNeedToDeveloped: '',
  achieved: '',
  arrangements: '',
  discussion: '',
};

export const validationSchema = Yup.object().shape({
  ableToResponsibility: Yup.string().required('Field is required'),
  areasNeedToDeveloped: Yup.string().required('Field is required'),
  achieved: Yup.string().required('Field is required'),
  arrangements: Yup.string().required('Field is required'),
  discussion: Yup.string().required('Field is required'),
})

export const formData = [
  {
    gridLength: 12,
    otherOptions: {
      name: 'ableToResponsibility',
      multiline: true,
      minRows: 3,
      label: 'What is the child/young person able to do/take responsibility for?'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'areasNeedToDeveloped',
      multiline: true,
      minRows: 3,
      label: 'What areas need to be developed?'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'achieved',
      multiline: true,
      minRows: 3,
      label: 'How will this be achieved?'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'arrangements',
      multiline: true,
      minRows: 3,
      label: 'What arrangements have been agreed regarding pocket money, personal allowances, savings or applying for any DLA payments?'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'discussion',
      multiline: true,
      minRows: 3,
      label: 'Has there been discussion/agreement about whether the young person can have a house key?'
    },
    component: RHFTextField
  },
]