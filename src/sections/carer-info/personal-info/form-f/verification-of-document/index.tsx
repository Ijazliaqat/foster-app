import { RHFRadioGroup } from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import dayjs from "dayjs";
import { Typography } from "@mui/material";

const todayDate = dayjs().format("MM/DD/YYYY");
// const maxAgeCheck = dayjs().subtract(18, "year");
// const ageOf18Years = maxAgeCheck.format("MM/DD/YYYY");
export const defaultValues = {
  brithCertificateSeen: "No",
  passportCertificationSeen: "No",
  drivingLicenceSeen: "No",
  nationalInsuranceNumberDateSeen: "No",
  applicantsAreMarried: "No",
  applicantsAreDivorced: "No",
};

export const DATAVERIFICATIONFORMDATA = [
  {
    id: 2,
    heading: "Birth Certificate Seen",
    componentProps: {
      name: "brithCertificateSeen",
      options: ["Yes", "No"],
    },
    gridLength: 6,
    component: RHFRadioGroup,
  },

  {
    id: 4,
    heading: "Passport or other Certification of nationality seen",
    componentProps: {
      name: "passportCertificationSeen",
      options: ["Yes", "No"],
    },
    gridLength: 6,
    component: RHFRadioGroup,
  },

  {
    id: 6,
    heading: "Driving License Seen",

    componentProps: {
      name: "drivingLicenceSeen",
      options: ["Yes", "No"],
    },
    gridLength: 6,
    component: RHFRadioGroup,
  },

  {
    id: 8,
    heading: "National Insurance number and date seen",
    componentProps: {
      name: "nationalInsuranceNumberDateSeen",
      options: ["Yes", "No"],
    },
    gridLength: 6,
    component: RHFRadioGroup,
  },

  {
    id: 10,
    heading:
      "If the applicants are married to each other or have registered a civil partnership, date certificate seen",
    componentProps: {
      name: "applicantsAreMarried",
      options: ["Yes", "No"],
    },
    gridLength: 12,
    component: RHFRadioGroup,
  },

  {
    id: 12,
    heading:
      "If the applicants are divorced or have terminated a civil partnership, date of divorce or dissolution certificate(s)",
    componentProps: {
      name: "applicantsAreDivorced",
      options: ["Yes", "No"],
    },
    gridLength: 12,
    component: RHFRadioGroup,
  },
];
export { default as VerificationOfDocumentsForm } from "./VerificationOfDocumentsForm";
