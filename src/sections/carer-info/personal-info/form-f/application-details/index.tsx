import { RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";
import { Typography } from "@mui/material";

// const todayDate = dayjs().format("MM/DD/YYYY");
const maxAgeCheck = dayjs().subtract(18, "year");
const ageOf18Years = maxAgeCheck.format("MM/DD/YYYY");

export const defaultValues = {
  faimlyName: "",
  previousName: "",
  foreNames: "",
  otherName: "",
  dateOfBirth: new Date(ageOf18Years),
  age: "",
  placeOfBirth: "",

  address: "",
  lengthtTime: "",
  sex: "",
  nationality: "",
  ethnicity: "",
  primaryLanguage: "",
  otherLanguage: "",
  religion: "",
  practisingOrNonPractising: "",
  applicantasDisabled: "",
  partnershipStatusQuestion: "",
  partershipStatusQuestion2: "",

  childrenHoueHoldFaimlyName: "",
  childrenHouseHoldForeNames: "",
  childrenHouseHoldSex: "",
  childrenHouseHoldRelationship: "",
  childrenHouseHoldDateOfBirth: new Date(ageOf18Years),
  childrenHouseHoldAge: "",

  adultHouseHoldFaimlyName: "",
  adultHouseHoldForeNames: "",
  adultHouseHoldSex: "",
  adultHouseHoldRelationship: "",
  adultHouseHoldDateFfBirth: new Date(ageOf18Years),
  adultHouseHoldAge: "",

  childrenHoueHoldFaimlyNameElseWhere: "",
  childrenHouseHoldForeNamesElseWhere: "",
  childrenHouseHoldSexElseWhere: "",
  childrenHouseHoldRelationshipElseWhere: "",
  childrenHouseHoldDateFfBirthElseWhere: new Date(ageOf18Years),
  childrenHouseHoldAgeElseWhere: "",

  adultHouseHoldFaimlyNameElseWhere: "",
  adultHouseHoldForeNamesElseWhere: "",
  adultHouseHoldSexElseWhere: "",
  adultHouseHoldRelationshipElseWhere: "",
  adultHouseHoldDateOfBirthElseWhere: new Date(ageOf18Years),
  adultHouseHoldAgeElseWhere: "",

  previousPartnersQuestion1: "",
  previousPartnersQuestion2: "",
};

export const FormSchema = Yup.object().shape({
  faimlyName: Yup.string().required("Required"), //1
  previousName: Yup.string().required("Required"), //2
  foreNames: Yup.string().required("Required"), //3
  otherName: Yup.string().required("Required"), //4
  dateOfBirth: Yup.date().required("Date is required"), //5
  age: Yup.string().required("Required"), //6
  placeOfBirth: Yup.string().required("Required"), //7
  //home address
  address: Yup.string().required("Required"), //8
  lengthtTime: Yup.string().required("Time is required"), //9
  //identity
  sex: Yup.string().required("Required"), //10
  nationality: Yup.string().required("Required"), //11
  ethnicity: Yup.string().required("Required"), //12
  primaryLanguage: Yup.string().required("Required"), //13
  otherLanguage: Yup.string().required("Required"), //14
  religion: Yup.string().required("Required"), //15
  practisingOrNonPractising: Yup.string().required("Required"), //16
  applicantasDisabled: Yup.string().required("Required"), //17
  //partnership status
  partnershipStatusQuestion: Yup.string().required("Required"), //18
  partershipStatusQuestion2: Yup.string().required("Required"), //19
  //children under 18 living in household
  childrenHoueHoldFaimlyName: Yup.string().required("Required"), //20
  childrenHouseHoldForeNames: Yup.string().required("Required"), //21
  childrenHouseHoldSex: Yup.string().required("Required"), //22
  childrenHouseHoldRelationship: Yup.string().required("Required"), //23
  childrenHouseHoldDateOfBirth: Yup.date().required("Date is required"), //24
  childrenHouseHoldAge: Yup.string().required("Required"), //25
  //adults living in household
  adultHouseHoldFaimlyName: Yup.string().required("Required"), //26
  adultHouseHoldForeNames: Yup.string().required("Required"), //27
  adultHouseHoldSex: Yup.string().required("Required"), //28
  adultHouseHoldRelationship: Yup.string().required("Required"), //29
  adultHouseHoldDateFfBirth: Yup.date().required("Date is required"), //30
  adultHouseHoldAge: Yup.string().required("Required"), //31
  //children (under 18) from a current or previous partnership living elsewhere
  childrenHoueHoldFaimlyNameElseWhere: Yup.string().required("Required"), //32
  childrenHouseHoldForeNamesElseWhere: Yup.string().required("Required"), //33
  childrenHouseHoldSexElseWhere: Yup.string().required("Required"), //34
  childrenHouseHoldRelationshipElseWhere: Yup.string().required("Required"), //35
  childrenHouseHoldDateFfBirthElseWhere:
    Yup.date().required("Date is required"), //36
  childrenHouseHoldAgeElseWhere: Yup.string().required("Required"), //37
  //Adults children living elsewhere
  adultHouseHoldFaimlyNameElseWhere: Yup.string().required("Required"), //38
  adultHouseHoldForeNamesElseWhere: Yup.string().required("Required"), //39
  adultHouseHoldSexElseWhere: Yup.string().required("Required"), //40
  adultHouseHoldRelationshipElseWhere: Yup.string().required("Required"), //41
  adultHouseHoldDateOfBirthElseWhere: Yup.date().required("Date is required"), //42
  adultHouseHoldAgeElseWhere: Yup.string().required("Required"), //43
  //previous partners
  previousPartnersQuestion1: Yup.string().required("Required"), //44
  previousPartnersQuestion2: Yup.string().required("Required"), //45
});

export const APPLICATIONDETAILSFORMDATA = [
  {
    id: 1,
    componentProps: {
      name: "faimlyName",
      label: "Family Name",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 2,
    componentProps: {
      name: "previousName",
      label: "Previous Name",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 3,
    componentProps: {
      name: "foreNames",
      label: "foreNames",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 4,
    componentProps: {
      name: "otherName",
      label: "Other Names",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 5,
    componentProps: {
      name: "dateOfBirth",
      label: "Date of Birth",
      maxDate: maxAgeCheck.valueOf(),
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 6,
    componentProps: {
      name: "age",
      label: "Age",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 7,
    componentProps: {
      name: "placeOfBirth",
      label: "Place Of Birth",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 7.5,
    heading: "Home Address",
    component: Typography,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      variant: "h6",
    },
  },
  {
    id: 8,
    componentProps: {
      name: "address",
      label: "Address",
      multiline: true,
      // minRows: 3,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 9,
    componentProps: {
      name: "lengthtTime",
      label: "Length of time at this Address",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 9.5,
    heading: "Identity",
    component: Typography,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      variant: "h6",
    },
  },
  {
    id: 10,
    componentProps: {
      name: "sex",
      label: "Sex",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 11,
    componentProps: {
      name: "nationality",
      label: "Nationality",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 12,
    componentProps: {
      name: "ethnicity",
      label: "Ethnicity",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 13,
    componentProps: {
      name: "primaryLanguage",
      label: "Primary language spoken in home",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 14,
    componentProps: {
      name: "otherLanguage",
      label: "Other language spoken in home",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 15,
    componentProps: {
      name: "religion",
      label: "Religion or faith group",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 16,
    componentProps: {
      name: "practisingOrNonPractising",
      label: "Practising or non-practising",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 17,
    componentProps: {
      name: "applicantasDisabled",
      label: "Is the applicant registered as disabled?",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 17.5,
    heading: "Partnership Status",
    component: Typography,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      variant: "h6",
    },
  },
  {
    id: 18,
    componentProps: {
      name: "partnershipStatusQuestion",
      label:
        "If the applicant is married or has registered a civil partnership,give date and place of marriage/registration",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 19,
    componentProps: {
      name: "partershipStatusQuestion2",
      label:
        "If the applicant is living with a partner, date on which they set up  a household together",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 19.5,
    heading: "Children under 18 living in household",
    component: Typography,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      variant: "h6",
    },
  },
  {
    id: 20,
    componentProps: {
      name: "childrenHoueHoldFaimlyName",
      label: "Family Name",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 21,
    componentProps: {
      name: "childrenHouseHoldForeNames",
      label: "foreNames",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 22,
    componentProps: {
      name: "childrenHouseHoldSex",
      label: "Sex",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 23,
    componentProps: {
      name: "childrenHouseHoldRelationship",
      label: "Relationship To Applicant",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 24,
    componentProps: {
      name: "childrenHouseHoldDateOfBirth",
      label: "Date of Birth",
      maxDate: maxAgeCheck.valueOf(),
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 25,
    componentProps: {
      name: "childrenHouseHoldAge",
      label: "Age",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 25.5,
    heading: "Adults children living in household",
    component: Typography,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      variant: "h6",
    },
  },

  {
    id: 26,
    componentProps: {
      name: "adultHouseHoldFaimlyName",
      label: "Family Name ",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 27,
    componentProps: {
      name: "adultHouseHoldForeNames",
      label: "foreNames ",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 28,
    componentProps: {
      name: "adultHouseHoldSex",
      label: "Sex",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 29,
    componentProps: {
      name: "adultHouseHoldRelationship",
      label: "Relationship To Applicant ",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 30,
    componentProps: {
      name: "adultHouseHoldDateFfBirth",
      label: "Date of Birth",
      maxDate: maxAgeCheck.valueOf(),
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 31,
    componentProps: {
      name: "adultHouseHoldAge",
      label: "Age",
    },
    gridLength: 6,
    component: RHFTextField,
  },

  {
    id: 31.5,
    heading:
      "Children (under 18) from a current or previous partnership living elsewhere",
    component: Typography,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      variant: "h6",
    },
  },
  {
    id: 32,
    componentProps: {
      name: "childrenHoueHoldFaimlyNameElseWhere",
      label: "Family Name",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 33,
    componentProps: {
      name: "childrenHouseHoldForeNamesElseWhere",
      label: "foreNames",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 34,
    componentProps: {
      name: "childrenHouseHoldSexElseWhere",
      label: "Sex",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 35,
    componentProps: {
      name: "childrenHouseHoldRelationshipElseWhere",
      label: "Relationship To Applicant",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 36,
    componentProps: {
      name: "childrenHouseHoldDateFfBirthElseWhere",
      label: "Date of Birth",
      maxDate: maxAgeCheck.valueOf(),
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 37,
    componentProps: {
      name: "childrenHouseHoldAgeElseWhere",
      label: "Age",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 37.5,
    heading: "Adults children living elsewhere",
    component: Typography,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      variant: "h6",
    },
  },

  {
    id: 38,
    componentProps: {
      name: "adultHouseHoldFaimlyNameElseWhere",
      label: "Family Name",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 39,
    componentProps: {
      name: "adultHouseHoldForeNamesElseWhere",
      label: "foreNames",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 40,
    componentProps: {
      name: "adultHouseHoldSexElseWhere",
      label: "Sex",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 41,
    componentProps: {
      name: "adultHouseHoldRelationshipElseWhere",
      label: "Relationship to applicant(s)",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 42,
    componentProps: {
      name: "adultHouseHoldDateOfBirthElseWhere",
      label: "Date of Birth",
      maxDate: maxAgeCheck.valueOf(),
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 43,
    componentProps: {
      name: "adultHouseHoldAgeElseWhere",
      label: "Age",
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 43.5,
    heading: "Previous Partners",
    component: Typography,
    componentProps: {
      color: (theme: any) => theme.palette.primary.main,
      variant: "h6",
    },
  },
  {
    id: 44,
    componentProps: {
      name: "previousPartnersQuestion1",
      label:
        "If the applicant is separated ir divorced or has dissolved a civil partnership, give date and name of partner",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 45,
    componentProps: {
      name: "previousPartnersQuestion2",
      label:
        "If the applicant had set up a household ith a previous partner, give date when this ended and name of partner.",
      multiline: true,
      minRows: 3,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
export { default as ApplicationDetailsForm } from "./ApplicationDetailsForm";
