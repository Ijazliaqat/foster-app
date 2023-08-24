import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const initailValue = {
  person: '',
  frequency: '',
  venue: '',
  arragementForSupervising: ''
};

export const validationSchema = Yup.object().shape({
  person: Yup.string().required('Field is required'),
  frequency: Yup.string().required('Field is required'),
  venue: Yup.string().required('Field is required'),
  arragementForSupervising: Yup.string().required('Field is required')
})

export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      name: 'person',
      label: 'Person'
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'frequency',
      label: 'Frequency'
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'venue',
      label: 'Venue'
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'arragementForSupervising',
      label: 'Arragement For Supervising',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
]