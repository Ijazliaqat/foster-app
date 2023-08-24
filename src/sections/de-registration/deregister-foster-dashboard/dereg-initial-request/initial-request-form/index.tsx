import { RHFRadioGroup, RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const defaultValues = {
  methods: 'Phone',
  fosterCarerName: 'john doe',
  dateOfRequest: new Date(),
  socialWorker: 'james watt (manager)',
  deRegType: 'reviewed',
  reasonForDeRegistration: 'some reason'
};

// ======================================================
export const FormSchema = Yup.object().shape({
  methods: Yup.string().required('Field is required'),
  fosterCarerName: Yup.string().required('Field is required'),
  dateOfRequest: Yup.date().required('Field is required'),
  socialWorker: Yup.string().required('Field is required'),
  deRegType: Yup.string().required('Field is required'),
  reasonForDeRegistration: Yup.string().required('Field is required'),
});


export const DeregisterInitialFormData = [
  {
    gridLength: 12,
    otherOptions: {
      name: 'methods',
      label: 'Method',
      options: ['Whatsapp', 'Email', 'Chatbot', 'Phone', 'Other'],
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'fosterCarerName',
      label: 'Foster Carer Name',
      fullWidth: true,
      select: true,
    },
    options: [{ value: 'john doe', label: 'john doe' }],
    component: RHFSelect
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'dateOfRequest',
      label: 'Date of Request',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'socialWorker',
      label: 'Social Worker ( Name & Role)',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'deRegType',
      label: 'De-reg Type',
      fullWidth: true,
      select: true,
    },
    options: [{ value: 'reviewed', label: 'reviewed' }],
    component: RHFSelect
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'reasonForDeRegistration',
      label: 'Reason for De-registration ',
      fullWidth: true,
      multilines: true,
      minRows: 3
    },
    component: RHFTextField
  },
]