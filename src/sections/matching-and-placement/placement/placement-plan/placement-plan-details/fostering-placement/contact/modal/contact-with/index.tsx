import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const initailValue = {
  name: '',
  relationship: '',
  reasons: '',
};

export const validationSchema = Yup.object().shape({
  name: Yup.string().required('Field is required'),
  relationship: Yup.string().required('Field is required'),
  reasons: Yup.string().required('Field is required'),
})

export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      name: 'name',
      label: 'Name'
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'relationship',
      label: 'Relationship'
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'reasons',
      label: 'Reasons'
    },
    component: RHFTextField
  },
]