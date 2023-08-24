import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";


export const FormalReviewModalMockData = [
    {
        id: 1,
        componentProps: {
            name: "meetingdate",
            label: "Meeting Date",
            fullWidth: true, 
            value: new Date()
        },
        component: RHFDatePicker, 
        md: 6,
    },
    {
        id: 2,
        componentProps: {
            name: "meetingTime",
            label: "Meeting Time",
            fullWidth: true, 
            value: new Date()
        },
        component: RHFTimePicker, 
        md: 6,
    },
    {
        id: 3,
        componentProps: {
            name: "sWName",
            label: "SW Name",
            fullWidth: true,
            size: "small",
        },
        component: RHFTextField, 
        md: 12,
    },
    {
        id: 4,
        componentProps: {
            name: "meetingAttendees",
            label: 'Meeting Attendees',
            multiline: true,
            minRows: 3,
        },
        component: RHFTextField,
        md: 12,
    },
    {
        id: 5,
        componentProps: {
            name: "meetingOutcomes",
            label: 'Meeting outcomes',
            multiline: true,
            minRows: 3,
        },
        component: RHFTextField, 
        md: 12,
    },
    {
        id: 6,
        componentProps: {
            name: "meetingAction",
            label: 'Meeting Action',
            multiline: true,
            minRows: 3,
        },
        component: RHFTextField, 
        md: 12,
    },
    {
        id: 7,
        componentProps: {
            name: "nextReviewDate",
            label: "Next Review date",
            fullWidth: true, 
            value: new Date()
        },
        component: RHFDatePicker, 
        md: 6,
    },
    {
        id: 8,
        componentProps: {
            name: "nextReviewTime",
            label: "Next Review Time",
            fullWidth: true,
            value: new Date()
        },
        component: RHFTimePicker, 
        md: 6,
    },

    {
        id: 9,
        uploadPhoto: true,
        fullWidth: true,
        md: 12,
    }

];

export const FormalReviewInitialValues = {
    meetingDate: new Date(),
    meetingTime: "",
    sWName: "",
    meetingAttendees: "",
    meetingOutcomes: "",
    meetingAction: "",
    nextReviewDate: new Date(),
    nextReviewTime: "",
    updatePhoto: '',
  };
  

export const FormalReviewValidationSchema = Yup.object().shape({
    meetingDate: Yup.date().required("Field is Required"),
    meetingTime: Yup.string().trim().required("Field is Required"),
    sWName: Yup.string().trim().required("Field is Required"),
    meetingAttendees: Yup.string().trim().required("Field is Required"),
    meetingOutcomes: Yup.string().trim().required("Field is Required"),
    meetingAction: Yup.string().trim().required("Field is Required"),
    nextReviewDate: Yup.date().required("Field is Required"),
    nextReviewTime: Yup.string().trim().required("Field is Required"),
    updatePhoto: Yup.string().required("Field is Required"),

});

export { default as FormalReviewMeetingAddModal } from "./FormalReviewMeetingAddModal";

