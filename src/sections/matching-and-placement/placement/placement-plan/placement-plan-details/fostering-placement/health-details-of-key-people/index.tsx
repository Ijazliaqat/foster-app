import { Divider } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const initailValue = {
  currentGPName: '',
  currentGPAddress: '',
  currentGPContactNumber: '',
  currentGPEmail: '',
  localGPName: '',
  localGPAddress: '',
  localGPContactNumber: '',
  localGPEmail: '',
  currentDentistName: '',
  currentDentistAddress: '',
  currentDentistContactNumber: '',
  currentDentistEmail: '',
  localDentistName: '',
  localDentistAddress: '',
  localDentistContactNumber: '',
  localDentistEmail: '',
  relevantRole1: '',
  relevantName1: '',
  relevantAddress1: '',
  relevantContactNumber1: '',
  relevantEmail1: '',
  relevantRole2: '',
  relevantName2: '',
  relevantAddress2: '',
  relevantContactNumber2: '',
  relevantEmail2: '',
};

export const validationSchema = Yup.object().shape({
  currentGPName: Yup.string().required('Field is required'),
  currentGPAddress: Yup.string().required('Field is required'),
  currentGPContactNumber: Yup.string().required('Field is required'),
  currentGPEmail: Yup.string().required('Field is required'),
  localGPName: Yup.string().required('Field is required'),
  localGPAddress: Yup.string().required('Field is required'),
  localGPContactNumber: Yup.string().required('Field is required'),
  localGPEmail: Yup.string().required('Field is required'),
  currentDentistName: Yup.string().required('Field is required'),
  currentDentistAddress: Yup.string().required('Field is required'),
  currentDentistContactNumber: Yup.string().required('Field is required'),
  currentDentistEmail: Yup.string().required('Field is required'),
  localDentistName: Yup.string().required('Field is required'),
  localDentistAddress: Yup.string().required('Field is required'),
  localDentistContactNumber: Yup.string().required('Field is required'),
  localDentistEmail: Yup.string().required('Field is required'),
  relevantRole1: Yup.string().required('Field is required'),
  relevantName1: Yup.string().required('Field is required'),
  relevantAddress1: Yup.string().required('Field is required'),
  relevantContactNumber1: Yup.string().required('Field is required'),
  relevantEmail1: Yup.string().required('Field is required'),
  relevantRole2: Yup.string().required('Field is required'),
  relevantName2: Yup.string().required('Field is required'),
  relevantAddress2: Yup.string().required('Field is required'),
  relevantContactNumber2: Yup.string().required('Field is required'),
  relevantEmail2: Yup.string().required('Field is required'),
})

export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      name: 'currentGP',
      label: 'Role',
      value: 'Current GP',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'currentGPName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'currentGPAddress',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'currentGPContactNumber',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'currentGPEmail',
      label: 'Email',
    },
    component: RHFTextField
  },
  {
    divider: <Divider />
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'localGP',
      label: 'Role',
      value: 'Local Gp if transfer required',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'localGPName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'localGPAddress',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'localGPContactNumber',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'localGPEmail',
      label: 'Email',
    },
    component: RHFTextField
  },
  {
    divider: <Divider />
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'currentDentist',
      label: 'Role',
      value: 'Current dentist',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'currentDentistName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'currentDentistAddress',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'currentDentistContactNumber',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'currentDentistEmail',
      label: 'Email',
    },
    component: RHFTextField
  },
  {
    divider: <Divider />
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'localDentistRole',
      label: 'Role',
      value: 'Local dentist if transfer required',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'localDentistName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'localDentistAddress',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'localDentistContactNumber',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'localDentistEmail',
      label: 'Email',
    },
    component: RHFTextField
  },
  {
    divider: <Divider />
  },
  {
    title: 'Any other relevant contact, e.g. consultants, hospitals, CAMHS'
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'relevantRole1',
      label: 'Role',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'relevantName1',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'relevantAddress1',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'relevantContactNumber1',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'relevantEmail1',
      label: 'Email',
    },
    component: RHFTextField
  },
  {
    divider: <Divider />
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'relevantRole2',
      label: 'Role',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'relevantName2',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'relevantAddress2',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'relevantContactNumber2',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'relevantEmail2',
      label: 'Email',
    },
    component: RHFTextField
  },
]