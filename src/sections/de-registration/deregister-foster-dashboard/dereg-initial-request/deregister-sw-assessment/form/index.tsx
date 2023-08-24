import { RHFRadioGroup, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from "yup";

export const defaultValues = {
  status: 'Passed',
  assessmentItem: 'assessmentItem',
  date: new Date(),
  socialWorkerComment: 'some comment',
};

// ======================================================
export const FormSchema = Yup.object().shape({
  status: Yup.string().required('Field is required'),
  assessmentItem: Yup.string().required('Field is required'),
  date: Yup.date().required('Field is required'),
  socialWorkerComment: Yup.string().required('Field is required'),
});


export const SWAssessmentFormData = [
  {
    gridLength: 12,
    otherOptions: {
      name: 'status',
      label: 'Status',
      options: ['Passed', 'Failed', 'Pending'],
    },
    component: RHFRadioGroup
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'assessmentItem',
      label: 'De-reg Assessment Item',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 6,
    otherOptions: {
      name: 'date',
      label: 'De-reg Assessment Date',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      name: 'socialWorkerComment',
      label: 'Social Worker Comment ',
      fullWidth: true,
      multilines: true,
      minRows: 3
    },
    component: RHFTextField
  },
]