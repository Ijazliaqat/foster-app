import { Divider } from "@mui/material";
import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const initailValue = {
  socialWorkerName: '',
  socialWorkerAddress: '',
  socialWorkerContactNumber: '',
  socialWorkerEmail: '',
  socialWorkerManagerName: '',
  socialWorkerManagerAddress: '',
  socialWorkerManagerContactNumber: '',
  socialWorkerManagerEmail: '',
  supervisingSocialWorkerName: '',
  supervisingSocialWorkerAddress: '',
  supervisingSocialWorkerContactNumber: '',
  supervisingSocialWorkerEmail: '',
  fosteringManagerName: '',
  fosteringManagerAddress: '',
  fosteringManagerContactNumber: '',
  fosteringManagerEmail: '',
  IROName: '',
  IROAddress: '',
  IROContactNumber: '',
  IROEmail: '',
  independentVisitorName: '',
  independentVisitorAddress: '',
  independentVisitorContactNumber: '',
  independentVisitorEmail: '',
  personalAdvisorName: '',
  personalAdvisorAddress: '',
  personalAdvisorContactNumber: '',
  personalAdvisorEmail: '',
  significantPersonRole1: '',
  significantPersonName1: '',
  significantPersonAddress1: '',
  significantPersonContactNumber1: '',
  significantPersonEmail1: '',
  significantPersonRole2: '',
  significantPersonName2: '',
  significantPersonAddress2: '',
  significantPersonContactNumber2: '',
  significantPersonEmail2: '',
};

export const validationSchema = Yup.object().shape({
  socialWorkerName: Yup.string().required('Field is required'),
  socialWorkerAddress: Yup.string().required('Field is required'),
  socialWorkerContactNumber: Yup.string().required('Field is required'),
  socialWorkerEmail: Yup.string().required('Field is required'),
  socialWorkerManagerName: Yup.string().required('Field is required'),
  socialWorkerManagerAddress: Yup.string().required('Field is required'),
  socialWorkerManagerContactNumber: Yup.string().required('Field is required'),
  socialWorkerManagerEmail: Yup.string().required('Field is required'),
  supervisingSocialWorkerName: Yup.string().required('Field is required'),
  supervisingSocialWorkerAddress: Yup.string().required('Field is required'),
  supervisingSocialWorkerContactNumber: Yup.string().required('Field is required'),
  supervisingSocialWorkerEmail: Yup.string().required('Field is required'),
  fosteringManagerName: Yup.string().required('Field is required'),
  fosteringManagerAddress: Yup.string().required('Field is required'),
  fosteringManagerContactNumber: Yup.string().required('Field is required'),
  fosteringManagerEmail: Yup.string().required('Field is required'),
  IROName: Yup.string().required('Field is required'),
  IROAddress: Yup.string().required('Field is required'),
  IROContactNumber: Yup.string().required('Field is required'),
  IROEmail: Yup.string().required('Field is required'),
  independentVisitorName: Yup.string().required('Field is required'),
  independentVisitorAddress: Yup.string().required('Field is required'),
  independentVisitorContactNumber: Yup.string().required('Field is required'),
  independentVisitorEmail: Yup.string().required('Field is required'),
  personalAdvisorName: Yup.string().required('Field is required'),
  personalAdvisorAddress: Yup.string().required('Field is required'),
  personalAdvisorContactNumber: Yup.string().required('Field is required'),
  personalAdvisorEmail: Yup.string().required('Field is required'),
  significantPersonRole1: Yup.string().required('Field is required'),
  significantPersonName1: Yup.string().required('Field is required'),
  significantPersonAddress1: Yup.string().required('Field is required'),
  significantPersonContactNumber1: Yup.string().required('Field is required'),
  significantPersonEmail1: Yup.string().required('Field is required'),
  significantPersonRole2: Yup.string().required('Field is required'),
  significantPersonName2: Yup.string().required('Field is required'),
  significantPersonAddress2: Yup.string().required('Field is required'),
  significantPersonContactNumber2: Yup.string().required('Field is required'),
  significantPersonEmail2: Yup.string().required('Field is required'),
})

export const formData = [
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialWorker',
      label: 'Role',
      value: 'Social worker',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialWorkerName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialWorkerAddress',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialWorkerContactNumber',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialWorkerEmail',
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
      name: 'socialWorkerManager',
      label: 'Role',
      value: 'Social work manager',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialWorkerManagerName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialWorkerManagerAddress',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialWorkerManagerContactNumber',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialWorkerManagerEmail',
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
      name: 'supervisingSocialWorker',
      label: 'Role',
      value: 'Supervising social worker',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'supervisingSocialWorkerName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'supervisingSocialWorkerAddress',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'supervisingSocialWorkerContactNumber',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'supervisingSocialWorkerEmail',
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
      name: 'fosteringManager',
      label: 'Role',
      value: 'Fostering manager',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'fosteringManagerName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'fosteringManagerAddress',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'fosteringManagerContactNumber',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'fosteringManagerEmail',
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
      name: 'IRO',
      label: 'Role',
      value: 'Independent Reviewing Officer (IRO)',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'IROName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'IROAddress',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'IROContactNumber',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'IROEmail',
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
      name: 'independentVisitor',
      label: 'Role',
      value: 'Independent visitor',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'independentVisitorName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'independentVisitorAddress',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'independentVisitorContactNumber',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'independentVisitorEmail',
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
      name: 'personalAdvisor',
      label: 'Role',
      value: 'Independent visitor',
      disabled: true
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'personalAdvisorName',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'personalAdvisorAddress',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'personalAdvisorContactNumber',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'personalAdvisorEmail',
      label: 'Email',
    },
    component: RHFTextField
  },
  {
    divider: <Divider />
  },
  {
    title: 'Any Other Significant Person/s'
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'significantPersonRole1',
      label: 'Role',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'significantPersonName1',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'significantPersonAddress1',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'significantPersonContactNumber1',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'significantPersonEmail1',
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
      name: 'significantPersonRole2',
      label: 'Role',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'significantPersonName2',
      label: 'Name',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'significantPersonAddress2',
      label: 'Address',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'significantPersonContactNumber2',
      label: 'Contact Number',
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'significantPersonEmail2',
      label: 'Email',
    },
    component: RHFTextField
  },
]