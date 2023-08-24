import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");

export const defaultValues = {
  isElecticalEquitmentGood: false,
  dateToBeCarriedOut1: new Date(todayDate),

  improvementsReq1: "",

  isAccessiblePowerfitted: false,
  dateToBeCarriedOut2: new Date(todayDate),

  improvementsReq2: "",

  isAllHeatingApplancesFixed: false,
  dateToBeCarriedOut3: new Date(todayDate),

  improvementsReq3: "",

  isFireguardsUsed: false,
  dateToBeCarriedOut4: new Date(todayDate),

  improvementsReq4: "",

  isEasilyAccessibleAndWorkingFire: false,
  dateToBeCarriedOut5: new Date(todayDate),

  improvementsReq5: "",

  isSmokeDetectorsFittedAndUsed: false,

  dateToBeCarriedOut6: new Date(todayDate),

  improvementsReq6: "",
  isCarbonMonoxideDetectors: false,
  dateToBeCarriedOut7: new Date(todayDate),

  improvementsReq7: "",

  isSocketsOverloaded: false,
  dateToBeCarriedOut8: new Date(todayDate),

  improvementsReq8: "",

  hasAnElectricianCheckWiringAndSafetyReportIssued: false,

  dateToBeCarriedOut9: new Date(todayDate),

  improvementsReq9: "",
};

export const FormSchema = Yup.object().shape({
  dateToBeCarriedOut1: Yup.date().required("Required"),

  improvementsReq1: Yup.string().required("Required"),

  dateToBeCarriedOut2: Yup.date().required("Required"),

  improvementsReq2: Yup.string().required("Required"),

  dateToBeCarriedOut3: Yup.date().required("Required"),

  improvementsReq3: Yup.string().required("Required"),

  dateToBeCarriedOut4: Yup.date().required("Required"),

  improvementsReq4: Yup.string().required("Required"),

  dateToBeCarriedOut5: Yup.date().required("Required"),

  improvementsReq5: Yup.string().required("Required"),

  dateToBeCarriedOut6: Yup.date().required("Required"),

  improvementsReq6: Yup.string().required("Required"),

  dateToBeCarriedOut7: Yup.date().required("Required"),

  improvementsReq7: Yup.string().required("Required"),

  dateToBeCarriedOut8: Yup.date().required("Required"),

  improvementsReq8: Yup.string().required("Required"),

  dateToBeCarriedOut9: Yup.date().required("Required"),

  improvementsReq9: Yup.string().required("Required"),
});

export const safetyFactorsIndoorsA_Data = [
  {
    id: 0.5,
    variant: "subtitle2",
    heading: `Part 2: General Safety Factors - Indoors A`,
  },

  {
    id: 1,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isElecticalEquitmentGood",
      label:
        "General safety factors (indoors) Improvements required and date to be carried out. Is electtical equipment in good repair?",
    },
    component: RHFCheckbox,
  },
  {
    id: 2,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut1",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 3,
    componentProps: {
      name: "improvementsReq1",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isAccessiblePowerfitted",
      label:
        "Are accessible power points fitted with child resistant safety covers?",
    },
    component: RHFCheckbox,
  },
  {
    id: 5,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut2",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 6,
    componentProps: {
      name: "improvementsReq2",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 7,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isAllHeatingApplancesFixed",
      label: "Are all heating appliances fixed to the wall?",
    },
    component: RHFCheckbox,
  },
  {
    id: 8,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut3",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 9,
    componentProps: {
      name: "improvementsReq3",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 10,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isFireguardsUsed",
      label: "Are fireguards used?",
    },
    component: RHFCheckbox,
  },
  {
    id: 11,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut4",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 12,
    componentProps: {
      name: "improvementsReq4",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 13,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isEasilyAccessibleAndWorkingFire",
      label:
        "Is there an easily accessible and working Fire Extinguisher and Fire Blanket?",
    },
    component: RHFCheckbox,
  },
  {
    id: 14,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut5",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 15,
    componentProps: {
      name: "improvementsReq5",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 16,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isSmokeDetectorsFittedAndUsed",
      label: "Are smoke detectors fitted and used?",
    },
    component: RHFCheckbox,
  },

  {
    id: 17,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut6",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },

  {
    id: 18,
    componentProps: {
      name: "improvementsReq6",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 19,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isSocketsOverloaded",
      label: "Are sockets overloaded?",
    },
    component: RHFCheckbox,
  },
  {
    id: 20,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut7",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 21,
    componentProps: {
      name: "improvementsReq7",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 22,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "hasAnElectricianCheckWiringAndSafetyReportIssued",
      label: "Has an electrician check the wiring and a safety report issued?",
    },
    component: RHFCheckbox,
  },
  {
    id: 23,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut8",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 24,
    componentProps: {
      name: "improvementsReq8",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 25,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "hasAnElectricianCheckWiringAndSafetyReportIssued",
      label:
        "Has an electrician checked the wiring and a safety report issued?",
    },
    component: RHFCheckbox,
  },
  {
    id: 26,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut9",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 27,
    componentProps: {
      name: "improvementsReq9",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
