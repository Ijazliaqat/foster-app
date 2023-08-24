import * as Yup from "yup";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import { fData } from "@root/utils/formatNumber";


export const data = [
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

export const advocacyFormDefaultValues = {
    advocacyType:"",
    referralDate: new Date(),
    nameChildYoungPerson: "",
    selfReferral: '',
    gender: '',
    uniqueIdentifier: '',
    dob: new Date(),
    addressWithPostcode: '',
    currentAddress: '',
    clientResideWithParentCarer: '',
    clientResideWithParentCarerIfNot: '',
    typeOfPlan: '',
    disability: '',
    ethnicity: '',
    educationalPlacement: '',
    nameParentCarer: '',
    parentCarerContactNumber: '',
    parentCarerEmailAddress: '',
    relationshipToChild: '',
    referrerName: '',
    referrerSpecifyTeam: '',
    referrerTelephoneNumber: '',
    referrerEmailAddress: '',
    socialWorkerName: '',
    socialWorkerTeam: '',
    socialWorkerTelephone: '',
    socialWorkerEmail: '',
    socialWorkerAwareOfReferral: '',
    LACfosterCarer: '',
    LACResidentialHome: '',
    LACIndependentLiving: '',
    LACSemiIndependent: '',
    LACSuitabilityofPlacement: '',
    LACAllowancesPocketMoney: '',
    LACContact: '',
    LACCarePlan: '',
    LACHealthNeeds: '',
    LACPathwayPlan: '',
    LACAccessLeisure: '',
    LACEducationSupport: '',
    LACOther: '',
    LACLegalStatus: '',
    childRequiresSupportWith: '',
    upsettingYou: '',
    youngPersonWantsUsToDo: '',
    wantUsToContact: "",
    socialWorkerConcerns: '',
    aboveQuestionState: '',
    abuseType: '',
    physicalAbuse: '',
    otherConsiderations: '',
};

export const advocacyFormSchema = Yup.object().shape({
    // advocacyType: Yup.string().required('This field is required'),
    referralDate: Yup.date().required('This field is required'),
    nameChildYoungPerson: Yup.string().required('This field is required'),
    selfReferral: Yup.string().required('This field is required'),
    gender: Yup.string().required('This field is required'),
    uniqueIdentifier: Yup.string().required('This field is required'),
    dob: Yup.date().required('This field is required'),
    addressWithPostcode: Yup.string().required('This field is required'),
    currentAddress: Yup.string().required('This field is required'),
    clientResideWithParentCarer: Yup.string().required('This field is required'),
    clientResideWithParentCarerIfNot: Yup.string().required('This field is required'),
    typeOfPlan: Yup.string().required('This field is required'),
    disability: Yup.string().required('This field is required'),
    ethnicity: Yup.string().required('This field is required'),
    educationalPlacement: Yup.string().required('This field is required'),
    nameParentCarer: Yup.string().required('This field is required'),
    parentCarerContactNumber: Yup.string().required('This field is required'),
    parentCarerEmailAddress: Yup.string().required('This field is required'),
    relationshipToChild: Yup.string().required('This field is required'),
    referrerName: Yup.string().required('This field is required'),
    referrerSpecifyTeam: Yup.string().required('This field is required'),
    referrerTelephoneNumber: Yup.string().required('This field is required'),
    referrerEmailAddress: Yup.string().required('This field is required'),
    socialWorkerName: Yup.string().required('This field is required'),
    socialWorkerTeam: Yup.string().required('This field is required'),
    socialWorkerTelephone: Yup.string().required('This field is required'),
    socialWorkerEmail: Yup.string().required('This field is required'),
    socialWorkerAwareOfReferral: Yup.string().required('This field is required'),
    LACfosterCarer: Yup.string().required('This field is required'),
    LACResidentialHome: Yup.string().required('This field is required'),
    LACIndependentLiving: Yup.string().required('This field is required'),
    LACSemiIndependent: Yup.string().required('This field is required'),
    LACSuitabilityofPlacement: Yup.string().required('This field is required'),
    LACAllowancesPocketMoney: Yup.string().required('This field is required'),
    LACContact: Yup.string().required('This field is required'),
    LACCarePlan: Yup.string().required('This field is required'),
    LACHealthNeeds: Yup.string().required('This field is required'),
    LACPathwayPlan: Yup.string().required('This field is required'),
    LACAccessLeisure: Yup.string().required('This field is required'),
    LACEducationSupport: Yup.string().required('This field is required'),
    LACOther: Yup.string().required('This field is required'),
    LACLegalStatus: Yup.string().required('This field is required'),
    childRequiresSupportWith: Yup.string().required('This field is required'),
    upsettingYou: Yup.string().required('This field is required'),
    youngPersonWantsUsToDo: Yup.string().required('This field is required'),
    wantUsToContact: Yup.string().required('This field is required'),
    socialWorkerConcerns: Yup.string().required('This field is required'),
    aboveQuestionState: Yup.string().required('This field is required'),
    abuseType: Yup.string().required('This field is required'),
    physicalAbuse: Yup.string().required('This field is required'),
    otherConsiderations: Yup.string().required('This field is required'),
})


export const advocacyHistoryFormData = [
    // {
    //     gridLength: 6,
    //     otherOptions: { name: "advocacyType", label: "Type of Advocacy", fullWidth: true },
    //     component: RHFTextField,
    // },
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
        otherOptions: { name: "nameChildYoungPerson", label: "Name of Child / Young Person", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 3,
        otherOptions: {
            label: "Self-Referral",
            name: "selfReferral",
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
        otherOptions: { name: "uniqueIdentifier", label: "P Number / Unique Identifier", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: {
            label: "Date of Birth",
            name: "dob",
            fullWidth: true,
        },
        component: RHFDatePicker,
    },
    {
        gridLength: 6,
        otherOptions: { name: "addressWithPostcode", label: "Address with Postcode", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "currentAddress", label: "Current Address if not", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: {
            label: "Does the Client reside with Parent / Carer ?",
            name: "clientResideWithParentCarer",
            options: ["Yes", "No"],
        },
        component: RHFRadioGroupWithLabel,
    },
    {
        gridLength: 6,
        otherOptions: { name: "clientResideWithParentCarerIfNot", label: "If Not Please give Details", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        otherOptions: {
            label: "Type of Plan if any",
            name: "typeOfPlan",
            options: ["Child Protection", "Child in Need"],
        },
        component: RHFRadioGroupWithLabel,
    },
    {
        gridLength: 6,
        otherOptions: { name: "disability", label: "Disability / Additional Needs if any", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "ethnicity", label: "Ethnicity", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "educationalPlacement", label: "Educational Placement", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "nameParentCarer", label: "Name Parent / Carer", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "parentCarerContactNumber", label: "Parent / Carer Contact Number", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "parentCarerEmailAddress", label: "Parent / Carer Email Address", fullWidth: true },
        component: RHFTextField,
    },
    {
        otherOptions: { name: "relationshipToChild", label: "Relationship to Child", fullWidth: true, sx: { width: { lg: "48.6%", md: "100%", xs: "100%", }, clear: "both" } },
        component: RHFTextField,
    },
    {
        head: "Referrer Details:",
    },
    {
        gridLength: 6,
        otherOptions: { name: "referrerName", label: "Name", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "referrerSpecifyTeam", label: "Specify Team", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "referrerTelephoneNumber", label: "Telephone Number", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "referrerEmailAddress", label: "Email Address", fullWidth: true },
        component: RHFTextField,
    },
    {
        head: "Social Worker Details (if not referrer):",
    },
    {
        gridLength: 6,
        otherOptions: { name: "socialWorkerName", label: "Name", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "socialWorkerTeam", label: "Organisation & Team", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "socialWorkerTelephone", label: "Telephone Number", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "socialWorkerEmail", label: "Email Address", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        otherOptions: {
            label: "Is the Social Worker Aware of this Referral ?",
            name: "socialWorkerAwareOfReferral",
            options: ["Yes", "No"],
        },
        component: RHFRadioGroupWithLabel,
    },
    {
        head: "If LAC / Care Leaver:",
    },
    {
        gridLength: 6,
        otherOptions: { name: "LACfosterCarer", label: "Foster Carer", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "LACResidentialHome", label: "Residential Home", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "LACIndependentLiving", label: "Independent Living", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "LACSemiIndependent", label: "Semi Independent", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "LACSuitabilityofPlacement", label: "Suitability of Placement", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "LACAllowancesPocketMoney", label: "Allowances / Pocket Money", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "LACContact", label: "Contact ", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "LACCarePlan", label: "Care Plan", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "LACHealthNeeds", label: "Health Needs", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "LACPathwayPlan", label: "Pathway Plan", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "LACAccessLeisure", label: "Access to Leisure / Personl Interests", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 6,
        otherOptions: { name: "LACEducationSupport", label: "Education Support / Accessing / Training & Employment", fullWidth: true },
        component: RHFTextField,
    },
    {
        gridLength: 12,
        otherOptions: {
            name: "LACOther",
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
            name: "LACLegalStatus",
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
            name: "childRequiresSupportWith",
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
            name: "upsettingYou",
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
            name: "youngPersonWantsUsToDo",
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
            name: "wantUsToContact",
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
            name: "socialWorkerConcerns",
            options: ["Yes", "No"],
        },
        component: RHFRadioGroupWithLabel,
    },
    {
        gridLength: 12,
        otherOptions: {
            name: "aboveQuestionState",
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
            name: "abuseType",
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
            name: "physicalAbuse",
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
            name: "otherConsiderations",
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