import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");

export const defaultValues = {
  isDeviceBeenFitted: false,
  dateToBeCarriedOut1: new Date(todayDate),

  improvementsReq1: "",

  isGardenEquipmentLocked: false,
  dateToBeCarriedOut2: new Date(todayDate),

  improvementsReq2: "",

  isGardenFencesGatesSecure: false,
  dateToBeCarriedOut3: new Date(todayDate),

  improvementsReq3: "",

  isSwingsSlidersSecurityFixed: false,
  dateToBeCarriedOut4: new Date(todayDate),

  improvementsReq4: "",

  isGarageAndShedsLocked: false,
  dateToBeCarriedOut5: new Date(todayDate),

  improvementsReq5: "",

  isGreenhousesWaterTanksCovered: false,

  dateToBeCarriedOut6: new Date(todayDate),

  improvementsReq6: "",

  isSandPitsHygienicCovered: false,
  dateToBeCarriedOut7: new Date(todayDate),

  improvementsReq7: "",

  isAnyPossiblePlantsInGarden: false,
  dateToBeCarriedOut8: new Date(todayDate),

  improvementsReq8: "",

  iiCarsFittedWithBBSApproved: false,
  dateToBeCarriedOut9: new Date(todayDate),

  improvementsReq9: "",

  isMOTInsuranceOnCarUpToDate: false,
  dateToBeCarriedOut10: new Date(todayDate),

  improvementsReq10: "",

  isCordsHangingBlinds: false,
  isAnyoneHouseeholdInPossessionOfAGun: false,
  isYouLicensed: false,

  licenseAndGunDetails: "",
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

  dateToBeCarriedOut10: Yup.date().required("Required"),

  improvementsReq10: Yup.string().required("Required"),

  licenseAndGunDetails: Yup.string().required("Required"),
});

export const safetyFactorsOutdoors_Data = [
  {
    id: 0.5,
    variant: "subtitle2",
    heading: `Part 3: General Safety Factors - Outdoors`,
  },

  {
    id: 1,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isDeviceBeenFitted",
      label:
        "Has a trip device been fitted to the electrical circuit to prevent fatal shock?",
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
      name: "isGardenEquipmentLocked",
      label:
        "Are garden/DIY equipment/chemicals locked away out of sight and reach?",
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
      name: "isGardenFencesGatesSecure",
      label: "Are garden fences and gates secure and in good condition?",
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
      name: "isSwingsSlidersSecurityFixed",
      label:
        "Are swings, sliders etc security fixed and kept in good condition?",
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
      name: "isGarageAndShedsLocked",
      label: "Are garage and sheds locked?",
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
      name: "isGreenhousesWaterTanksCovered",
      label: "Are greenhouses, ponds, water tanks etc covered or fenced off?",
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
      name: "isSandPitsHygienicCovered",
      label: "Are sandpits hygienic and covered when not in use?",
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
      name: "isAnyPossiblePlantsInGarden",
      label: "Are there any possible plants in the property or garden?",
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
      name: "iiCarsFittedWithBBSApproved",
      label:
        "Are cars fitted with BBS approved restraints and carrycot restraints?",
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

  {
    id: 28,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isMOTInsuranceOnCarUpToDate",
      label: "Is MOT and insurance on car up to date",
    },
    component: RHFCheckbox,
  },
  {
    id: 29,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut10",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 30,
    componentProps: {
      name: "improvementsReq10",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 31,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isCordsHangingBlinds",
      label: "Are Cords hanging from blinds which could cause a hazards",
    },
    component: RHFCheckbox,
  },
  {
    id: 32,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isAnyoneHouseeholdInPossessionOfAGun",
      label: "Are you or anyone in your household in possession of a gun?",
    },
    component: RHFCheckbox,
  },
  {
    id: 33,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isYouLicensed",
      label: "If yes, is it licensed to you?",
    },
    component: RHFCheckbox,
  },
  {
    id: 34,
    componentProps: {
      name: "licenseAndGunDetails",
      label:
        "If yes, please write below licensed number and where the gun is stored",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
];
