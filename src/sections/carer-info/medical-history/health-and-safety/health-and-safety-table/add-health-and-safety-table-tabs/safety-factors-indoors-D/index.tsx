import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");
// const ageOf18Years = dayjs().subtract(18, "year").format("MM/DD/YYYY");
// const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
// const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const defaultValues = {
  isFlexesShortOutOfReach: false,
  dateToBeCarriedOut1: new Date(todayDate),

  improvementsReq1: "",

  isChestFreezersKeptLocked: false,
  dateToBeCarriedOut2: new Date(todayDate),

  improvementsReq2: "",

  isKnivesOutOfReach: false,
  dateToBeCarriedOut3: new Date(todayDate),

  improvementsReq3: "",

  isCookerGuardFitted: false,
  dateToBeCarriedOut4: new Date(todayDate),

  improvementsReq4: "",

  isKitchenWorkSurfacesKeptClean: false,
  dateToBeCarriedOut5: new Date(todayDate),

  improvementsReq5: "",

  isFoodsAppropriatelyStored: false,

  dateToBeCarriedOut6: new Date(todayDate),

  improvementsReq6: "",

  isBleachEtcStoredInContainer: false,
  dateToBeCarriedOut7: new Date(todayDate),

  improvementsReq7: "",
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
});

export const safetyFactorsIndoorsD_Data = [
  {
    id: 0.5,
    variant: "subtitle2",
    heading: `General Safety Factors - Indoors D`,
  },

  {
    id: 1,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isFlexesShortOutOfReach",
      label: "Kitchen Are flexes short and out of reach?",
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
      name: "isChestFreezersKeptLocked",
      label: "Are chest freezers kept locked?",
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
      name: "isKnivesOutOfReach",
      label: "Are knives and other utensils kept out of reach?",
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
      name: "isCookerGuardFitted",
      label: "Is A cooker guard fitted?",
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
      name: "isKitchenWorkSurfacesKeptClean",
      label: "Are kitchen work surfaces and flooring undamaged and kept clean?",
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
      name: "isFoodsAppropriatelyStored",
      label:
        "Are foods appropriately stored and the fridge kept at correct temprature?",
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
      name: "isBleachEtcStoredInContainer",
      label: "Are bleach, poisonous substances, matches etc, stored in their original containers out of reach of small children?",
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
];
