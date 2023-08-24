import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import { fData } from "@root/utils/formatNumber";


export const advocacyHistoryData = [
    {
        id: "1",
        srNo: "1",
        date: "10/06/2023",
        type: "Care Act",
        raisedAgainst: "James Watt (Foster Carer)",
        status: "New",
    },
    {
        id: "2",
        srNo: "2",
        date: "10/06/2023",
        type: "Care Act",
        raisedAgainst: "James Watt (Foster Carer)",
        status: "Closed",
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

export const advocacyHistoryDefaultValues = {
    nameChildYoungPerson: "",
    dateofBirth: null,
    age: "",
    gender: false,
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
    dateReferral: null,
    referrerName: "",
    contactDetails: "",
    referralReceived: "",
    socialWorkerReferre: "",
    state: ""
};


export const advocacyHistoryFormData = [
    {
        gridLength: 6,
        otherOptions: { name: "advocacyType", label: "Type of Advocacy", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: {
            label: "Date of Referral",
            name: "referralDate",
            fullWidth: true,
        },
        component: RHFDatePicker,
    },
    {
        head: "Personal Information:",
    },
    {
        gridLength: 6,
        otherOptions: { name: "areaOffice", label: "Name of Child / Young Person", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 3,
        otherOptions: {
            label: "Self-Referral",
            name: "gender",
            options: ["Yes", "No"],
        },

        component: RHFRadioGroupWithLabel,
    },
    {
        gridLength: 3,
        otherOptions: {
            label: "Gender",
            name: "gender",
            options: ["Male", "Female"],
        },

        component: RHFRadioGroupWithLabel,
    },
    {
        gridLength: 6,
        otherOptions: { name: "areaOffice", label: "P Number / Unique Identifier", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: {
            label: "Date of Birth",
            name: "uploadDate",
            fullWidth: true,
        },
        component: RHFDatePicker,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Address with Postcode", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Current Address if not", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: {
            label: "Does the Client reside with Parent / Carer ?",
            name: "gender",
            options: ["Yes", "No"],
        },
        component: RHFRadioGroupWithLabel,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "If Not Please give Details", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        otherOptions: {
            label: "Type of Plan if any",
            name: "gender",
            options: ["Child Protection", "Child in Need"],
        },
        component: RHFRadioGroupWithLabel,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Disability / Additional Needs if any", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Ethnicity", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Educational Placement", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Name Parent / Carer", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Parent / Carer Contact Number", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Parent / Carer Email Address", fullWidth: true },
        component: RHFTextField,
    },
    {
        otherOptions: { name: "age", label: "Relationship to Child", fullWidth: true, sx: { width: { lg: "48.6%", md: "100%", xs: "100%", }, clear: "both" } },
        component: RHFTextField,
    },
    {
        head: "Referrer Details:",
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Name", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Specify Team", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Telephone Number", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Email Address", fullWidth: true },
        component: RHFTextField,
    },
    {
        head: "Social Worker Details (if not referrer):",
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Name", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Organisation & Team", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Telephone Number", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Email Address", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        otherOptions: {
            label: "Is the Social Worker Aware of this Referral ?",
            name: "gender",
            options: ["Yes", "No"],
        },
        component: RHFRadioGroupWithLabel,
    },
    {
        head: "If LAC / Care Leaver:",
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Foster Carer", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Residential Home", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Independent Living", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Semi Independent", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Suitability of Placement", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Allowances / Pocket Money", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Contact ", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Care Plan", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Health Needs", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Pathway Plan", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Access to Leisure / Personl Interests", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "age", label: "Education Support / Accessing / Training & Employment", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        otherOptions: {
            name: "address",
            label: "Other (Please Specify)",
            multiline: true,
            minRows: 3,
            fullWidth: true,
            size: "small",
        },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        otherOptions: {
            name: "address",
            label: "Legal Status",
            multiline: true,
            minRows: 3,
            fullWidth: true,
            size: "small",
        },
        component: RHFTextField,
    },
    {
        head: "Reason for Referral:",
    },
    {
        gridLength: 12,
        title: "If the child is looked after, please describe the primary issue they require support with. If the child is subject to child protection proceedings, please give details of the conference the child requires support with.",
        otherOptions: {
            name: "address",
            multiline: true,
            minRows: 3,
            fullWidth: true,
            size: "small",
        },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        otherOptions: {
            name: "address",
            label: "What is upsetting you (Young Person) ?",
            multiline: true,
            minRows: 3,
            fullWidth: true,
            size: "small",
        },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        otherOptions: {
            name: "address",
            label: "What do you (Young Person) wants us to do ?",
            multiline: true,
            minRows: 3,
            fullWidth: true,
            size: "small",
        },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        otherOptions: {
            name: "address",
            label: "Who do you want us to Contact ?",
            multiline: true,
            minRows: 3,
            fullWidth: true,
            size: "small",
        },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        otherOptions: {
            label: "Does the Social Worker or referrer have any concerns about risks that the service need to be aware of ?",
            name: "gender",
            options: ["Yes", "No"],
        },
        component: RHFRadioGroupWithLabel,
    },
    {
        gridLength: 12,
        otherOptions: {
            name: "address",
            label: "If Yes to above question, Please State Below",
            multiline: true,
            minRows: 3,
            fullWidth: true,
            size: "small",
        },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: {
            label: "Abuse Type",
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
        gridLength: 6,
        otherOptions: {
            label: "Physical Abuse (Inappropriate / Harmful)",
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
        gridLength: 6,
        otherOptions: {
            label: "Other Considerations",
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