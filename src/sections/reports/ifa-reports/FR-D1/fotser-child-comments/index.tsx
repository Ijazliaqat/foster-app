import SignaturePad from "@root/components/SignaturePad";
import { RHFRadioGroup, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from 'yup';

export const initialValues = {
  fosterCarer: 'foster carer',
  supervisingSocialWorker: 'social worker',
  fosterChildName: 'person name',
  childDOB: new Date(),
  likeAboutFostering: 'some text',
  fosterCarersHelpedYou: 'some text',
  fosterAnyThingDifferent: 'some text',
  socialWorkerAnyThingDifferent: 'some text',
  unhappyLivingWithYourCarers: 'some text',
  drawAPicture: 'some text',
};

export const formSchema = Yup.object().shape({
  fosterCarer: Yup.string().required('Field is required.'),
  supervisingSocialWorker: Yup.string().required('Field is required.'),
  fosterChildName: Yup.string().required('Field is required.'),
  childDOB: Yup.string().required('Field is required.'),
  likeAboutFostering: Yup.string().required('Field is required.'),
  fosterCarersHelpedYou: Yup.string().required('Field is required.'),
  fosterAnyThingDifferent: Yup.string().required('Field is required.'),
  socialWorkerAnyThingDifferent: Yup.string().required('Field is required.'),
  unhappyLivingWithYourCarers: Yup.string().required('Field is required.'),
  drawAPicture: Yup.string().required('Field is required.'),
})

export const FRD1FormData = [
  {
    gridLength: 6,
    otherOptions: {
      label: 'Foster Carer(s)',
      name: 'fosterCarer',
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
      label: 'Supervising Social Worker',
      name: 'supervisingSocialWorker',
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
      label: "Young Person's Name",
      name: 'fosterChildName',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      label: 'Fostered Child’s DOB-Age',
      name: 'childDOB',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    title: 'What do you like about fostering (good things)? *',
    otherOptions: {
      name: 'likeAboutFostering',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'How have your foster carers helped you?',
    otherOptions: {
      name: 'fosterCarersHelpedYou',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Would you like your foster carers to do anything different?',
    otherOptions: {
      name: 'fosterAnyThingDifferent',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Would you like your social worker to do anything different?',
    otherOptions: {
      name: 'socialWorkerAnyThingDifferent',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'If you were unhappy living with your foster carers, who would you talk to?',
    otherOptions: {
      name: 'unhappyLivingWithYourCarers',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Is there anything else you would like to say about living with your foster carers, or would you like to draw a picture about living with your foster carers? *',
    otherOptions: {
      name: 'drawAPicture',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
]