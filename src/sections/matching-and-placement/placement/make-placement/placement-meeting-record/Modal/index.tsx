
import { RHFMultiCheckbox, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

import * as Yup from 'yup';

export const defaultValues  = {
    childName: '',
    carerName: '',
    meetingDate: new Date(),
    // meetingAttendeesRole:true,
    meetingAgenda:'',
    meetingActions:'',
    updatePhoto: '',
    meetingOutcome:''
}
export const PlacementMeetingformSchemaValidation = Yup.object().shape({
    childName: Yup.string().trim().required('Field is required'),
    carerName: Yup.string().trim().required('Field is required'),
    meetingDate: Yup.date().required('Field is required'),
    // meetingAttendeesRole: Yup.boolean().required('Field is required'),
    meetingAgenda: Yup.string().trim().required('Field is required'),
    meetingActions: Yup.string().trim().required('Field is required'),
    updatePhoto: Yup.string().required("Field is Required"),
    // meetingAudioVideo: Yup.string().trim().required('Field is required'),
    meetingOutcome: Yup.string().trim().required('Field is required'),
})


export const PlacementMeetingMockData = [
    {
        id: 1,
        componentProps: {
            name: "childName",
            label: 'Child Name',
            fullWidth: true,
            sx: { mb: 1.5 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 2,
        componentProps: {
            name: "carerName",
            label: 'Carer Name',
            fullWidth: true,
            sx: { mb: 1.5 },
        },
       
        component: RHFTextField,
        md: 6,
    },
    {
        id: 3,
        componentProps: {
            name: "meetingDate",
            label: 'Meeting Date',
            fullWidth: true,
            sx: { mb: 1.5 },
        },
        component: RHFDatePicker,
        md: 6,
    },
    {
        id: 4,
        title: 'Meetig Attendees (Role)',
        componentProps: {
          name: "meetingAttendeesRole",
          options: ["Child", "Carer", "LA SSW", 'SSW'],
        },
        sx: {marginTop:"-12.5px",'& .MuiFormGroup-root': { flexDirection: 'row !important' } },
        md: 6,
        component: RHFMultiCheckbox,
      },
      {
        id: 5,
        componentProps: {
            name: "meetingAgenda",
            label: 'Meeting Agenda',
            fullWidth: true,
            multiline:true,
            minRows: 3,
            sx: { mb: 1.5 },
        },
       
        component: RHFTextField,
        md: 12,
    },
    {
        id: 6,
        componentProps: {
            name: "meetingActions",
            label: 'Meeting Actions',
            fullWidth: true,
            sx: { mb: 1 },
        },
       
        component: RHFTextField,
        md: 6,
    },
    {
        md: 6,
        uploadPhoto: true,
      },
    {
        id: 7,
        componentProps: {
            name: "meetingOutcome",
            label: 'Meeting Outcome',
            fullWidth: true,
            sx: { mb: 1 },
        },
       
        component: RHFTextField,
        md: 6,
    },
]
export { default as PlacementMeetingAddModal } from "./PlacementMeetingAddModal";

