import { RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const tableData = [
  {
    id: '1',
    action: 'This is action',
    personResponsible: 'Gloria Bell',
    dateToBeAchieved: '12/12/2023'
  }
];

export const validationSchema = Yup.object().shape({
  personResponsible: Yup.string().required('Field is required'),
  dateToBeAchieved: Yup.string().required('Field is required'),
  action: Yup.string().required('Field is required')
});

export const initialValue = {
  personResponsible: '',
  dateToBeAchieved: '',
  action: ''
};

export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      name: 'personResponsible',
      label: 'Person Responsible'
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'dateToBeAchieved',
      label: 'Date To Be Achieved'
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'action',
      label: 'Action',
      multiline: true,
      minRows: 3
    },
    component: RHFTextField
  },
]