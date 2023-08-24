import { RHFRadioGroup, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from 'yup';

export const initialValues = {
  fosterCarer:'',
  supervisingSocialWorker:'',
  childName:'',
  childDOB1:null,
  childDOB2:null,
  supervisingSocialWorkerName:'',
  likeAboutFostering:'',
  likeToChangeFamilyFostering:'',
  worriedUnhappyAboutFostering:'',
  meetUpWithOtherFosterCarers:'',
  ifYouDont:'',
  anyoneHelpedYou:'',
  additionalComments:'',
  name:'',
  position:'',
  date:null
};

export const formSchema = Yup.object().shape({
  fosterCarer:Yup.string().required('Field is required.'),
  supervisingSocialWorker:Yup.string().required('Field is required.'),
  childName:Yup.string().required('Field is required.'),
  childDOB1:Yup.string().required('Field is required.'),
  childDOB2:Yup.string().required('Field is required.'),
  supervisingSocialWorkerName:Yup.string().required('Field is required.'),
  likeAboutFostering:Yup.string().required('Field is required.'),
  likeToChangeFamilyFostering:Yup.string().required('Field is required.'),
  worriedUnhappyAboutFostering:Yup.string().required('Field is required.'),
  meetUpWithOtherFosterCarers:Yup.string().required('Field is required.'),
  ifYouDont:Yup.string().required('Field is required.'),
  anyoneHelpedYou:Yup.string().required('Field is required.'),
  additionalComments:Yup.string().required('Field is required.'),
  name:Yup.string().required('Field is required.'),
  position:Yup.string().required('Field is required.'),
  date:Yup.string().required('Field is required.')
})

export const FRC1FormData = [
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
      label: 'Child Name',
      name: 'childName',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      label: 'Child’s DOB',
      name: 'childDOB1',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
  {
    gridLength: 6,
    otherOptions: {
      label: 'Child’s DOB',
      name: 'childDOB2',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
  {
    gridLength: 6,
    otherOptions: {
      label: 'Supervising Social Worker',
      name: 'supervisingSocialWorkerName',
      fullWidth: true,
    },
    component: RHFTextField
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
    title: 'Is there anything you would like to change about your family fostering?',
    otherOptions: {
      name: 'likeToChangeFamilyFostering',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'If you were worried or unhappy about fostering, who would you talk to?',
    otherOptions: {
      name: 'worriedUnhappyAboutFostering',
      fullWidth: true,
      minRows: 3,
      multiline: true
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Do you meet up with other children whose parents are foster carers?',
    otherOptions: {
      name: "meetUpWithOtherFosterCarers",
      options: ["Yes", "No"],
      sx: { gap: { lg: '70px', xs: '10px' } },
      fullWidth: true,
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 12,
    title: 'If you don’t, would you like to do this?',
    otherOptions: {
      name: "ifYouDont",
      options: ["Yes", "No"],
      sx: { gap: { lg: '70px', xs: '10px' } },
      fullWidth: true,
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 6,
    title: 'If anyone helped you complete this form, who was it?',
    otherOptions: {
      name: 'anyoneHelpedYou',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    title: 'Any additional comments from the person who helped the child or young person to complete this form (where relevant) ',
    note: 'This section should only be completed if you can provide information that might help the reader make sense of, or better understand, the child or young person’s comments or drawing. You may also wish to clarify the extent to which you provided help. Your own views should be provided elsewhere.',
    otherOptions: {
      name: 'additionalComments',
      fullWidth: true,
      multiline: true,
      minRows: 3,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      label: 'Name',
      name: 'name',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      label: 'Position',
      name: 'position',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      label: 'Date',
      name: 'date',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
]