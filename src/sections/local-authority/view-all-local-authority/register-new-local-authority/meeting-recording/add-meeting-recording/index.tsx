import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import * as Yup from 'yup';
import { fData } from "@root/utils/formatNumber";

const MAX_FILE_SIZE = 1 * 1000 * 1000 * 1000; // 1 GB

export const addMeetingRecordingInitialValues = {
  meetingAgenda: '',
  uploadDate: new Date(),
  meetingAttendess: "",
  meetingChair: "",
  meetingNotes: "",
  meetingActions: "",
  report: "",
  attachFile: ''
}
export const addMeetingRecordingSchema = Yup.object().shape({
  meetingAgenda: Yup.string().required('Field is required'),
  uploadDate: Yup.date().required('Field is required'),
  meetingAttendess: Yup.string().required('Field is required'),
  meetingChair: Yup.string().required('Field is required'),
  meetingNotes: Yup.string().required('Field is required'),
  meetingActions: Yup.string().required('Field is required'),
  report: Yup.string().required('Field is required'),
  attachFile: Yup.mixed()
  .required("Field is required")
  .test("fileSize", `File must be less than or equal to ${fData(MAX_FILE_SIZE)}`, (value: any) => value && value.size <= MAX_FILE_SIZE),
})
export const addMeetingRecordingData = [
  {
    gridLength: 12,
    otherOptions: {
      label: 'Meeting Agenda',
      size: 'small',
      name: 'meetingAgenda',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      label: 'Upload Date',
      name: 'uploadDate',
      size: 'small',
      fullWidth: true,
    },
    component: RHFDatePicker
  },
  {
    gridLength: 12,
    otherOptions: {
      label: 'Meeting Attendess',
      size: 'small',
      name: 'meetingAttendess',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      label: 'Meeting Chair',
      size: 'small',
      name: 'meetingChair',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      label: 'Meeting Notes',
      size: 'small',
      name: 'meetingNotes',
      fullWidth: true,
    },
    component: RHFTextField
  },
  {
    gridLength: 12,
    otherOptions: {
      label: 'Meeting Actions',
      size: 'small',
      name: 'meetingActions',
      fullWidth: true,
    },
    component: RHFTextField
  },
]