import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupBoolean from "@root/components/hook-form/RHFRadioGroupBoolean";
import * as Yup from "yup";

export const RAChildDetailsFormFields = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "assessmentDate",
      label: "Date of Assessment ",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "nextAssessmentDate",
      label: "Next Assessment Date",
      fullWidth: true,
    },
    component: RHFDatePicker,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "laOOHContactNumber",
      label: "LA OOH Contact Number",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "height",
      label: "Height",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "hairColor",
      label: "Hair Color",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "eyeColor",
      label: "Eye Color",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "distinguishingMarks",
      label: "Distinguishing marks / feature",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      label: "Known / Suspected CSE Risk Y/N",
      name: "knownSuspectedCSERisk",
    },
    component: RHFRadioGroupBoolean,
  },
  {
    id: 5,
    gridLength: 12,
    otherOptions: {
      name: "knownNetworkOfChild",
      label:
        "Known Network of the Child (if known, provide family/friends/previous foster carers names and addresses)",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 12,
    otherOptions: {
      name: "circumstancesThatIncreaseRisk",
      label:
        "Any circumstances that may increase risk to child (previous missing episodes, child exploitation, drugs alcohol, abduction, family members)",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
];
export const childDetailsdefaultValues = {
  assessmentDate: new Date(),
  nextAssessmentDate: new Date(),
  laOOHContactNumber: "Nil",
  height: "Nil",
  hairColor: "Nil",
  eyeColor: "Nil",
  distinguishingMarks: "Nil",
  knownSuspectedCSERisk: true,
  knownNetworkOfChild: "Nil",
  circumstancesThatIncreaseRisk: "Nil",
};

export const childDetailsformSchema = Yup.object().shape({
  assessmentDate: Yup.date().required("Required"),
  nextAssessmentDate: Yup.date().required("Required"),
  laOOHContactNumber: Yup.string().required("Required"),
  height: Yup.string().required("Required"),
  hairColor: Yup.string().required("Required"),
  eyeColor: Yup.string().required("Required"),
  distinguishingMarks: Yup.string().required("Required"),
  knownNetworkOfChild: Yup.string().required("Required"),
  circumstancesThatIncreaseRisk: Yup.string().required("Required"),
});

//

export const RAChildInformationFormFields = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "backgroundOfChild",
      label:
        "Background of the Child (reason for being in care, has the child suffered neglect, emotional, physical or sexual abuse, risk to other children ?)",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 12,
    otherOptions: {
      name: "involvedPersonAndRole",
      label:
        "Who’s involved and what is their role ? (Intervention, agencies, services, direct work)",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "detailsOfGP",
      label: "Details of GP / Regular health appointments : Speech and Language, Asthma Clinic etc",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 12,
    otherOptions: {
      name: "health",
      label:
        "Health (Health conditions, medication, allergies, mental illness, pshychological disorders, physical or learning difficuties etc)",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "education",
      label: "Education (details of school, transport, attendance, behaviour)",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "telNumber",
      label: "Tel Number",
      fullWidth: true,
      type: "number",
    },
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "teacher",
      label: "Teacher",
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 12,
    otherOptions: {
      name: "fosterHome",
      label:
        "Foster Home (Routine, religious & cultural needs, pocket money, mobile phone, supervision in home, community & with pets)",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 9,
    gridLength: 12,
    otherOptions: {
      name: "contact",
      label: "Contact (Contact arrangements with family - direct & indirect)",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 12,
    otherOptions: {
      name: "photoPermission",
      label:
        "Permission must be sort from the Child and Child's Social Worker before a photo is taken (Child should be fully clothed when photographed). Permission include Details of person who has permission for photos to be taken",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
  {
    id: 11,
    gridLength: 6,
    otherOptions: {
      name: "detailsOfPerson",
      label: "Details of person who has / can give permission for photos to be taken",
      fullWidth: true,
    },
    component: RHFTextField,
  },
];

export const childInformationDefaultValues = {
  backgroundOfChild: "Nil",
  involvedPersonAndRole: "Nil",
  detailsOfGP: "Nil",
  health: "Nil",
  education: "Nil",
  telNumber: null,
  photoPermission: "Nil",
  contact: "Nil",
  fosterHome: "Nil",
  teacher: "Nil",
  detailsOfPerson: "Nil",
  date: null,
  risk: "Nil",
};
export const childInformationFormSchema = Yup.object().shape({
  backgroundOfChild: Yup.string().required("Required"),
  involvedPersonAndRole: Yup.string().required("Required"),
  detailsOfGP: Yup.string().required("Required"),
  health: Yup.string().required("Required"),
  education: Yup.string().required("Required"),
  telNumber: Yup.number().required("Required"),
  photoPermission: Yup.string().required("Required"),
  contact: Yup.string().required("Required"),
  fosterHome: Yup.string().required("Required"),
  teacher: Yup.string().required("Required"),
  detailsOfPerson: Yup.string().required("Required"),
  date: Yup.date().required("Required"),
  risk: Yup.string().required("Required"),
});
//
export const RAChildRiskDetailsFormFields = [
  {
    id: 1,
    gridLength: 6,
    otherOptions: {
      name: "riskCausingConcern",
      label: "Risk Causing Concern",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "categoryOfRisk",
      label: "Category of Risk",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 3,
    gridLength: 12,
    otherOptions: {
      name: "involvedPersonAndRole2",
      label:
        "Who’s involved and what is their role ? (Intervention, agencies, services, direct work)",
      fullWidth: true,
      multiline: true,
      minRows: 2,
    },
    component: RHFTextField,
  },
];
export const childRiskDetailsDefaultValues = {
  involvedPersonAndRole2: "Nil",
  categoryOfRisk: null,
  riskCausingConcern: null,
};
export const childRiskDetailsSchema = Yup.object().shape({
  involvedPersonAndRole2: Yup.string().required("Required"),
  categoryOfRisk: Yup.string().required("Required"),
  riskCausingConcern: Yup.string().required("Required"),
});

//
export const delegatedAuthorityFormFields = [
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "consentToRoutine",
      label: "Consent to routine immunisations",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 3,
    gridLength: 6,
    otherOptions: {
      name: "plannedMedicalProcedures",
      label: "Planned medical procedures",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 4,
    gridLength: 6,
    otherOptions: {
      name: "medicalProceduresCarriers",
      label:
        "Medical procedures carries out in the home where the administering the procedure requires training (e.g. child with disabilities / illness",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 5,
    gridLength: 6,
    otherOptions: {
      name: "dentalSignedConsent",
      label: "Dental - signed consent to dental emergency treatment (including anaesthetic)",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "dentalRoutineTreatment",
      label: "Dental - routine treatment (including anaesthetic)",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 6,
    gridLength: 6,
    otherOptions: {
      name: "opticianAppointments",
      label: "Optician - appointments, glasses",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 7,
    gridLength: 6,
    otherOptions: {
      name: "consentToExamination",
      label: "Consent to examination / treatment by school doctor / nurse",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 8,
    gridLength: 6,
    otherOptions: {
      name: "signedConsentDaySchoolTrips",
      label: "Signed consent for school trips - days",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 9,
    gridLength: 6,
    otherOptions: {
      name: "signedConsentOvernightSchoolTrips",
      label: "Signed consent for school trips - overnight",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 10,
    gridLength: 6,
    otherOptions: {
      name: "schoolTripsAbroad",
      label: "School trips abroad",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "changingRegisteringSchool",
      label: "Changing / registering at a school",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "lifeHistoryWork",
      label: "Life history work",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "overnightWithFriends",
      label: "Overnight with friends (sleepover)",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "holidayInBritain",
      label: "Holiday in Britain",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "holidayOutsideBritain",
      label: "Holiday outside Britain",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "sportsSocialClubs",
      label: "Sports / social clubs",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "hairCutsColouring",
      label: "Hair cuts / Colouring",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "bodyPiercing",
      label: "Body piercing",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "mobilePhone",
      label: "Mobile Phone",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "accessingSocialMedia",
      label: "Accessing social media - Facebook, Twitter, Instagram etc",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "attendanceAtWorshipPlace",
      label: "Attendance at a place of worship",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
  {
    id: 2,
    gridLength: 6,
    otherOptions: {
      name: "provideReligiousItems",
      label: "provide items needed to meet their religious needs",
      fullWidth: true,
      select: true,
    },
    options: [{ value: "nil", label: "nil" }],
    component: RHFSelect,
  },
];
export const delegatedAuthorityDefaultValues = {
  consentToRoutine: null,
  plannedMedicalProcedures: null,
  medicalProceduresCarriers: null,
  dentalSignedConsent: null,
  dentalRoutineTreatment: null,
  opticianAppointments: null,
  consentToExamination: null,
  signedConsentDaySchoolTrips: null,
  signedConsentOvernightSchoolTrips: null,
  schoolTripsAbroad: null,
  changingRegisteringSchool: null,
  lifeHistoryWork: null,
  overnightWithFriends: null,
  holidayInBritain: null,
  holidayOutsideBritain: null,
  sportsSocialClubs: null,
  hairCutsColouring: null,
  bodyPiercing: null,
  mobilePhone: null,
  accessingSocialMedia: null,
  attendanceAtWorshipPlace: null,
  provideReligiousItems: null,
};

export const formatters: any = {};
