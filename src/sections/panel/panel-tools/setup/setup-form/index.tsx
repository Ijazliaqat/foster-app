import { RHFSelect, RHFTextField } from '@root/components/hook-form';
import RHFDatePicker from '@root/components/hook-form/RHFDatePicker';
import RHFTimePicker from '@root/components/hook-form/RHFTimePicker';
import * as Yup from 'yup';

export const initialValues = {
  carer: '',
  status: '',
  case: '',
  time: new Date(),
  date: new Date(),
  socialWorker: '',
  member: ''
};

export const formSchema = Yup.object().shape({
  carer: Yup.string().required('Field is required'),
  status: Yup.string().required('Field is required'),
  case: Yup.string().required('Field is required'),
  time: Yup.date().required('Field is required'),
  date: Yup.date().required('Field is required'),
  socialWorker: Yup.string().required('Field is required'),
  member: Yup.string().required('Field is required')
});

export const setupFormData = [
  {
    gridLength: 6,
    otherOptions: {
      fullWidth: true,
      name: 'carer',
      label: 'Carer Selection',
      select: true,
      options: [{ value: 'value', label: 'label' }]
    },
    component: RHFSelect
  },
  {
    gridLength: 6,
    otherOptions: {
      fullWidth: true,
      name: 'status',
      label: 'Status'
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      fullWidth: true,
      name: 'case',
      label: 'Case Selection',
      select: true,
      options: [{ value: 'value', label: 'label' }]
    },
    component: RHFSelect
  },
  {
    gridLength: 6,
    otherOptions: {
      fullWidth: true,
      name: 'time',
      label: 'Time Selection',
      value: new Date()
    },
    component: RHFTimePicker
  },
  {
    gridLength: 6,
    otherOptions: {
      fullWidth: true,
      name: 'date',
      label: 'Panel Date',
      value: new Date()
    },
    component: RHFDatePicker
  },
  {
    gridLength: 6,
    otherOptions: {
      fullWidth: true,
      name: 'socialWorker',
      label: 'Social Worker',
      select: true,
      options: [{ value: 'value', label: 'label' }]
    },
    component: RHFSelect
  },
  {
    gridLength: 6,
    otherOptions: {
      fullWidth: true,
      name: 'member',
      label: 'Panel Member',
      select: true,
      options: [{ value: 'value', label: 'label' }]
    },
    component: RHFSelect
  },
]