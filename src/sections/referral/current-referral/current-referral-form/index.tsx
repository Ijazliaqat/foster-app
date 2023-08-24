import { RHFCheckbox, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from 'yup';

export const initialValues = {
  refferalDate: new Date(),
  status: '',
  childIdentifier: '',
  parentChild: '',
  areaOffice: '',
  localAuthority: '',
  updatePhoto: '',
  firstName: '',
  middleName: '',
  lastName: '',
  DOB: new Date(),
  age: '',
  gender: '',
  ethnicity: '',
  ofstedEthnicity: '',
  childInEducation: '',
  childGoegraphy: '',
  noFurtherAction: '',
  siblings: ''
};
export const formSchema = Yup.object().shape({
  refferalDate: Yup.date().required('Field is required'),
  status: Yup.string().required('Field is required'),
  childIdentifier: Yup.string().required('Field is required'),
  parentChild: Yup.string().required('Field is required'),
  areaOffice: Yup.string().required('Field is required'),
  localAuthority: Yup.string().required('Field is required'),
  updatePhoto: Yup.string().required('Field is required'),
  firstName: Yup.string().required('Field is required'),
  middleName: Yup.string().required('Field is required'),
  lastName: Yup.string().required('Field is required'),
  DOB: Yup.date().required('Field is required'),
  age: Yup.string().required('Field is required'),
  gender: Yup.string().required('Field is required'),
  ethnicity: Yup.string().required('Field is required'),
  ofstedEthnicity: Yup.string().required('Field is required'),
  childInEducation: Yup.string().required('Field is required'),
  childGoegraphy: Yup.string().required('Field is required'),
  noFurtherAction: Yup.string().required('Field is required'),
  siblings: Yup.string().required('Field is required')
});
export const QuickReferralFormData = [
  {
    gridLength: 6,
    otherOptions: {
      name: 'refferalDate',
      fullWidth: true,
      label: 'Refferal Date'
    },
    component: RHFDatePicker
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'status',
      label: 'status',
      fullWidth: true,
      select: true,
      options: [
        { value: 'select 1', label: 'select 1' },
        { value: 'select 2', label: 'select 2' },
        { value: 'select 3', label: 'select 3' },
      ],
    },
    component: RHFSelect
  },
  {
    gridLength: 6,
    otherOptions: {
      label: 'Child Identifier (URN)',
      name: 'childIdentifier',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'parentChild',
      fullWidth: true,
      label: 'Child Or Parent&Child',
      select: true,
      options: [
        { value: 'select 1', label: 'select 1' },
        { value: 'select 2', label: 'select 2' },
        { value: 'select 3', label: 'select 3' },
      ],
    },
    component: RHFSelect
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'areaOffice',
      fullWidth: true,
      label: 'Area Office',
      select: true,
      options: [
        { value: 'select 1', label: 'select 1' },
        { value: 'select 2', label: 'select 2' },
        { value: 'select 3', label: 'select 3' },
      ],
    },
    component: RHFSelect
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'localAuthority',
      fullWidth: true,
      label: 'Local Authority',
      select: true,
      options: [
        { value: 'select 1', label: 'select 1' },
        { value: 'select 2', label: 'select 2' },
        { value: 'select 3', label: 'select 3' },
      ],
    },
    component: RHFSelect
  },
  {
    gridLength: 12,
    head: 'Personal Details'
  },
  {
    gridLength: 6,
    requireUploadImage: true,
  },
  {
    gridLength: 6,
    otherOptions: {
      label: 'First Name',
      name: 'firstName',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      label: 'Middle Name',
      name: 'middleName',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      label: 'Last Name',
      name: 'lastName',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'DOB',
      fullWidth: true,
      label: 'Date of Birth'
    },
    component: RHFDatePicker
  },
  {
    gridLength: 6,
    otherOptions: {
      label: 'Age',
      name: 'age',
      type: 'number',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'gender',
      fullWidth: true,
      label: 'Gender',
      select: true,
      options: [
        { value: 'select 1', label: 'select 1' },
        { value: 'select 2', label: 'select 2' },
        { value: 'select 3', label: 'select 3' },
      ],
    },
    component: RHFSelect
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'ethnicity',
      fullWidth: true,
      label: 'Ethnicity',
      select: true,
      options: [
        { value: 'select 1', label: 'select 1' },
        { value: 'select 2', label: 'select 2' },
        { value: 'select 3', label: 'select 3' },
      ],
    },
    component: RHFSelect
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'ofstedEthnicity',
      fullWidth: true,
      label: 'Ofsted Ethnicity',
      select: true,
      options: [
        { value: 'select 1', label: 'select 1' },
        { value: 'select 2', label: 'select 2' },
        { value: 'select 3', label: 'select 3' },
      ],
    },
    component: RHFSelect
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'childInEducation',
      fullWidth: true,
      label: 'Is the Child Currently in Education?',
      select: true,
      options: [
        { value: 'select 1', label: 'select 1' },
        { value: 'select 2', label: 'select 2' },
        { value: 'select 3', label: 'select 3' },
      ],
    },
    component: RHFSelect
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'childGoegraphy',
      fullWidth: true,
      label: 'Child Goegraphy',
      select: true,
      options: [
        { value: 'select 1', label: 'select 1' },
        { value: 'select 2', label: 'select 2' },
        { value: 'select 3', label: 'select 3' },
      ],
    },
    component: RHFSelect
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'behaviour',
      fullWidth: true,
      label: 'behaviour',
      select: true,
      options: [
        { value: 'select 1', label: 'select 1' },
        { value: 'select 2', label: 'select 2' },
        { value: 'select 3', label: 'select 3' },
      ],
    },
    component: RHFSelect
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "noFurtherAction",
      label: "No further Action (Moved to closed Referral)",
    },
    component: RHFCheckbox,
  },
  {
    gridLength: 6,
    otherOptions: {
      name: "siblings",
      label: "Are there any other Siblings?",
    },
    component: RHFCheckbox,
  },
];