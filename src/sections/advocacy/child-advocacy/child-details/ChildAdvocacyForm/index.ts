

import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import { fData } from "@root/utils/formatNumber";

export const childAdvocacyFormdata = [
    {
        id: "1",
        srNo: "1",
        date: "12/11/2021",
        carer: "John",
        socialWorker: "Brown",
        status: "Closed",
    },
    {
        id: "2",
        srNo: "2",
        date: "12/11/2021",
        carer: "John",
        socialWorker: "Brown",
        status: "New",
    },
]

export const meetingRecordingsData = [
    {
        id: "1",
        srNo: "1",
        agenda: "Abc",
        date: "10/06/2023",
        file: "File1234",
    },
    {
        id: "2",
        srNo: "2",
        agenda: "Xyz",
        date: "10/06/2023",
        file: "File1234",
    },
]



export const childAdvocacyFormDefaultValues = {
    nameChildYoungPerson: "",
    dateofBirth: new Date(),
    age: "",
    gender: 'false',
    schoolPerson: "",
    TelNo: "",
    email: "",
    localAuthority: "",
    religion: "",
    ageAssessment: "",
    ethnicity: "",
    disability: "",
    childCare: "",
    childProtection: "",
    nameParent: "",
    nameSocialWorker: "",
    parentCarerEmail: "",
    youngPersonOrProfessional: "",
    dateReferral: new Date(),
    referrerName: "",
    contactDetails: "",
    referralReceived: "",
    socialWorkerReferre: "",
    state: ""
};

export const childAdvocacyFormValidationSchema = Yup.object().shape({
    nameChildYoungPerson: Yup.string().required("Field is Required"),
    dateofBirth: Yup.date().required("Field is Required"),
    age: Yup.string().required("Field is Required"),
    gender: Yup.string().required("Field is Required"),
    schoolPerson: Yup.string().required("Field is Required"),
    TelNo: Yup.string().required("Field is required").min(4, "Mininum 4 characters").max(15, "Maximum 15 characters"),
    email: Yup.string().required("Field is required").email("Invalid Email"),
    localAuthority: Yup.string().required("Field is Required"),
    religion: Yup.string().required("Field is Required"),
    ageAssessment: Yup.string().required("Field is Required"),
    ethnicity: Yup.string().required("Field is Required"),
    disability: Yup.string().required("Field is Required"),
    childCare: Yup.string().required("Field is Required"),
    childProtection: Yup.string().required("Field is Required"),
    nameParent: Yup.string().required("Field is Required"),
    nameSocialWorker: Yup.string().required("Field is Required"),
    parentCarerEmail: Yup.string().required("Field is Required").email("Invalid Email"),
    youngPersonOrProfessional: Yup.string().required("Field is Required"),
    dateReferral: Yup.date().required("Field is Required"),
    referrerName: Yup.string().required("Field is Required"),
    contactDetails: Yup.string().required("Field is Required"),
    referralReceived: Yup.string().required("Field is Required"),
    socialWorkerReferre: Yup.string().required("Field is Required"),
    state: Yup.string().required("Field is Required"),
});

export const childAdvocacyFormData = [
    {
        id: 1,
        componentProps: {
            label: "Name of Child /  Young Person",
            name: "nameChildYoungPerson",
            fullWidth: true,
            sx: { mb: 4 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 2,
        componentProps: {
            label: "Date of Birth",
            name: "dateofBirth",
            fullWidth: true,
            sx: { mb: 4 },
        },
        component: RHFDatePicker,
        md: 6,
    },
    {
        id: 3,
        componentProps: {
            label: "Age",
            name: "age",
            fullWidth: true,
            sx: { mb: 4 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 4,
        componentProps: {
            label: "Gender",
            name: "gender",
            options: ["Male", "Female"],
        },

        component: RHFRadioGroupWithLabel,
        md: 6,
    },

    {
        id: 5,
        componentProps: {
            label: "School (inc. contact person & no)",
            name: "schoolPerson",
            fullWidth: true,
            sx: { mb: 4 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 6,
        componentProps: {
            label: "Tel",
            name: "TelNo",
            type: "number",
            sx: { mb: 4 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 7,
        componentProps: {
            label: "Email",
            type: "email",
            name: "email",
            sx: { mb: 4 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 8,
        md: 6,
        componentProps: {
            label: "Local Authority",
            name: "localAuthority",
            fullWidth: true,
            select: true,
        },
        options: [
            { value: "Pakistan", label: "Pakistan" },
            { value: "India", label: "India" },
        ],
        component: RHFSelect,
    },
    {
        id: 9,
        md: 6,
        componentProps: {
            label: "Religion",
            name: "religion",
            fullWidth: true,
            select: true,
        },
        options: [
            { value: "Pakistan", label: "Pakistan" },
            { value: "India", label: "India" },
        ],
        component: RHFSelect,
    },
    {
        id: 10,
        componentProps: {
            label: "Age Assessment",
            name: "ageAssessment",
            fullWidth: true,
            sx: { mb: 4 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 11,
        componentProps: {
            label: "Ethnicity",
            name: "ethnicity",
            fullWidth: true,
            select: true,
            sx: { mb: 4 },
        },
        options: [
            { value: "Pakistan", label: "Pakistan" },
            { value: "India", label: "India" },
        ],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 12,
        componentProps: {
            label: "Disability",
            name: "disability",
            fullWidth: true,
            sx: { mb: 4 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 13,
        componentProps: {
            label: "Child in Care or Leaving Care. Date of Next LAC Review",
            name: "childCare",
            sx: { mb: 4 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 14,
        componentProps: {
            label: "If for Child Protection Advocacy - Child Protection Conference Date & Time",
            name: "childProtection",
            sx: { mb: 4 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 15,
        componentProps: {
            label: "Name of Parent / Carer",
            name: "nameParent",
            fullWidth: true,
            select: true,
            sx: { mb: 4 },
        },
        options: [
            { value: "Pakistan", label: "Pakistan" },
            { value: "India", label: "India" },
        ],
        component: RHFSelect,
        md: 6,
    },
    {
        id: 16,
        componentProps: {
            label: "Name of Social Worker",
            name: "nameSocialWorker",
            fullWidth: true,
            select: true,
            sx: { mb: 4 },
        },
        options: [
            { value: "Pakistan", label: "Pakistan" },
            { value: "India", label: "India" },
        ],
        component: RHFSelect,
        md: 6,
    },


    {
        id: 17,
        componentProps: {
            label: "Parent / Carer Email",
            name: "parentCarerEmail",
            sx: { mb: 4, },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 18,
        componentProps: {
            label: "Did Young Person or Professional complete the referral form ?",
            name: "youngPersonOrProfessional",
            sx: { mb: 4, },
            multiline: true,
            minRows: 3,
        },
        component: RHFTextField,
        md: 12,
    },
    {
        id: 19,
        componentProps: {
            label: "Date of Referral",
            name: "dateReferral",
            fullWidth: true,
            sx: { mb: 4 },
        },
        component: RHFDatePicker,
        md: 6,
    },
    {
        id: 20,
        componentProps: {
            label: "Referrer’s Name",
            name: "referrerName",
            sx: { mb: 4 },
        },
        component: RHFTextField,
        md: 6,
    },

    {
        id: 21,
        componentProps: {
            label: "Contact Details",
            name: "contactDetails",
            sx: { mb: 4 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 22,
        componentProps: {
            label: "Referral received by",
            name: "referralReceived",
            sx: { mb: 4 },
        },
        component: RHFTextField,
        md: 6,
    },
    {
        id: 23,
        componentProps: {
            label: "Does the Social Worker or referrer have any concerns about risks that the service need to be aware of ?",
            name: "socialWorkerReferre",
            options: ["Yes", "No"],
        },

        gridLength: 12,
        component: RHFRadioGroupWithLabel,

    },
    {
        id: 24,
        componentProps: {
            label: "If Yes, Please state Below:",
            name: "state",
            sx: { mb: 4, },
            multiline: true,
            minRows: 3,
        },
        component: RHFTextField,
        md: 12,
    },
];

///  ////
export const uploadMeetingRecordingInitialValues = {
    meetingAgenda: '',
    uploadDate: new Date(),
    meetingAttendess: "",
    meetingChair: "",
    meetingNotes: "",
    meetingActions: "",
    report: "",
    attachFile: ''
}
const MAX_FILE_SIZE = 1 * 1000 * 1000 * 1000; // 1 GB

export const uploadMeetingRecordingSchema = Yup.object().shape({
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
});
export const uploadMeetingRecordingData = [
    {
        gridLength: 12,
        title: 'Meeting Agenda',
        otherOptions: {
            size: 'small',
            name: 'meetingAgenda',
            fullWidth: true,
        },
        component: RHFTextField
    },
    {
        gridLength: 12,
        title: 'Upload Date',
        otherOptions: {
            name: 'uploadDate',
            size: 'small',
            fullWidth: true,
        },
        component: RHFDatePicker
    },
    {
        gridLength: 12,
        title: 'Meeting Attendess',
        otherOptions: {
            size: 'small',
            name: 'meetingAttendess',
            fullWidth: true,
        },
        component: RHFTextField
    },
    {
        gridLength: 12,
        title: 'Meeting Chair',
        otherOptions: {
            size: 'small',
            name: 'meetingChair',
            fullWidth: true,
        },
        component: RHFTextField
    },
    {
        gridLength: 12,
        title: 'Meeting Notes',
        otherOptions: {
            size: 'small',
            name: 'meetingNotes',
            fullWidth: true,
        },
        component: RHFTextField
    },
    {
        gridLength: 12,
        title: 'Meeting Actions',
        otherOptions: {
            size: 'small',
            name: 'meetingActions',
            fullWidth: true,
        },
        component: RHFTextField
    },
]