import {
  RHFCheckbox,
  RHFRadioGroup,
  RHFSelect,
  RHFTextField,
} from "@root/components/hook-form";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import { fData } from "@root/utils/formatNumber";
import { RHFInputWithLabel } from "../../extensions/RHFInputWithLabel";

export const defaultValues = {
  comments: "comments",
  ageGroupInterestInFostering: "12",
  anyOneElseLivingInHouseHold: false,
  mainCarerDriveAccessToVehicle: false,
  anyBodySmokeInHouseHold: false,
  mainCarerAbleToGiveUpwork: "USD",
  anyCurrentOrPreviousMedicalConditions: false,
  IHVcriteria: false,
  IHV: "who knows",
  counselledOutDetails: "counselled",
  relevantExperience: "relevantExperience",
};
const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const FormSchema = Yup.object().shape({
  comments: Yup.string().required("required"),
  ageGroupInterestInFostering: Yup.string().required("required"),
  anyOneElseLivingInHouseHold: Yup.boolean().required("required"),
  mainCarerDriveAccessToVehicle: Yup.boolean().required("required"),
  anyBodySmokeInHouseHold: Yup.boolean().required("required"),
  mainCarerAbleToGiveUpwork: Yup.string().required("required"),
  anyCurrentOrPreviousMedicalConditions: Yup.boolean().required("required"),
  IHVcriteria: Yup.string().required("required"),
  IHV: Yup.string().required("required"),
  counselledOutDetails: Yup.string().required("required"),
  relevantExperience: Yup.string().required("required"),
});

export const otherDetailsFormData = [
  {
    id: 1,
    gridLength: 12,
    otherOptions: {
      name: "comments",
      label: "Comments",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
  },
  {
    id: 2,
    gridLength: 6,
    component: RHFTextField,
    otherOptions: {
      name: "ageGroupInterestInFostering",
      label: "Age Group",
      fullWidth: true,
    },
  },
  {
    id: 3,
    otherOptions: {
      name: "anyOneElseLivingInHouseHold",
      label: "Is there anyone else living in household",
    },
    gridLength: 6,
    component: RHFCheckbox,
  },
  {
    id: 4,
    otherOptions: {
      name: "mainCarerDriveAccessToVehicle",
      label: "Does the Main Carer drive and have access to vehicle",
    },
    gridLength: 6,
    component: RHFCheckbox,
  },

  {
    id: 5,
    otherOptions: {
      name: "anyBodySmokeInHouseHold",
      label: "Does anybody in the household smoke",
    },
    gridLength: 6,
    component: RHFCheckbox,
  },
  {
    id: 6,
    otherOptions: {
      name: "mainCarerAbleToGiveUpwork",
      label: "Is the main carer able to give up work:",
      select: true,
      fullWidth: true,
    },
    component: RHFSelect,
    gridLength: 6,
    options: [
      {
        value: "USD",
        label: "$",
      },
      {
        value: "EUR",
        label: "€",
      },
      {
        value: "BTC",
        label: "฿",
      },
      {
        value: "JPY",
        label: "¥",
      },
    ],
  },
  {
    id: 7,
    otherOptions: {
      name: "anyCurrentOrPreviousMedicalConditions",
      label: "Any current or previous medical conditions",
    },
    gridLength: 6,
    component: RHFCheckbox,
  },
  {
    id: 8,
    otherOptions: {
      name: "IHVcriteria",
      text: "Does this enquiry meet the criteria for IHV:",
      Component: RHFRadioGroup,
      options: [true, false],
      getOptionLabel: ["Yes", "No"],
    },
    gridLength: 12,
    component: RHFInputWithLabel,
  },
  // {
  //   id: 7.5,
  //   gridLength: 12,
  // },
  {
    id: 9,
    otherOptions: {
      name: "IHV",
      label: "If yes , who will complete the IHV?",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFTextField,
  },
  {
    id: 10,
    otherOptions: {
      name: "counselledOutDetails",
      label: "Counselled Out reason Details:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    component: RHFTextField,
    gridLength: 6,
  },
  {
    id: 11,
    otherOptions: {
      name: "relevantExperience",
      label: "Relevant Experience:",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 6,
    component: RHFTextField,
  },
];
export { default as OtherDetails } from "./OtherDetails";
