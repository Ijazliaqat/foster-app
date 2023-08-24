import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFTimePicker from "@root/components/hook-form/RHFTimePicker";


export const FosterCarerAddModalMockData = [
    {
        id: 1,
        componentProps: {
            name: "consultationdate",
            label: "Consultation date",
            fullWidth: true, 
        },
        component: RHFDatePicker, 
        md: 6,
    },
    {
        id: 2,
        componentProps: {
            name: "consultationTime",
            label: "Consultation Time",
            fullWidth: true, 
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
            name: "nextConsultationDate",
            label: "Next Consultation date",
            fullWidth: true, 
        },
        component: RHFDatePicker, 
        md: 6,
    },
    {
        id: 8,
        componentProps: {
            name: "nextConsultationTime",
            label: "Next Consultation Time",
            fullWidth: true,
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

export const RegAssessmentModalValues = {
    consultationDate: new Date(),
    consultationTime: "",
    sWName: "",
    meetingAttendees: "",
    meetingOutcomes: "",
    meetingAction: "",
    nextConsultationDate: new Date(),
    nextConsultationTime: "",
    updatePhoto: '',
  };
  

export const RegAssessmentModalValidationSchema = Yup.object().shape({
    consultationDate: Yup.date().required("Field is Required"),
    consultationTime: Yup.string().trim().required("Field is Required"),
    sWName: Yup.string().trim().required("Field is Required"),
    meetingAttendees: Yup.string().trim().required("Field is Required"),
    meetingOutcomes: Yup.string().trim().required("Field is Required"),
    meetingAction: Yup.string().trim().required("Field is Required"),
    nextConsultationDate: Yup.date().required("Field is Required"),
    nextConsultationTime: Yup.string().trim().required("Field is Required"),
    updatePhoto: Yup.string().required("Field is Required"),

});

export { default as ConsultationFosterCarerAddModal } from "./ConsultationFosterCarerAddModal";

