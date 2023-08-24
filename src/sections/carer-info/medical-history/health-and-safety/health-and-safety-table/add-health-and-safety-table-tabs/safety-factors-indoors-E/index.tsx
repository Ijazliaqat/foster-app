import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");
// const ageOf18Years = dayjs().subtract(18, "year").format("MM/DD/YYYY");
// const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
// const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const defaultValues = {
  isLightControlledByPullCord: false,
  dateToBeCarriedOut1: new Date(todayDate),

  improvementsReq1: "",

  isMedicinesEtcLockedAwayOutOfReach: false,
  dateToBeCarriedOut2: new Date(todayDate),

  improvementsReq2: "",

  isThermostatOnHotWater: false,
  dateToBeCarriedOut3: new Date(todayDate),

  improvementsReq3: "",

  isDoorOutOfReach: false,
  dateToBeCarriedOut4: new Date(todayDate),

  improvementsReq4: "",

  isBedroomLocked: false,
  dateToBeCarriedOut5: new Date(todayDate),

  improvementsReq5: "",
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
});

export const safetyFactorsIndoorsE_Data = [
  {
    id: 0.5,
    variant: "subtitle2",
    heading: `General Safety Factors - Indoors E`,
  },

  {
    id: 1,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isLightControlledByPullCord",
      label:
        "Bathroom Are lights or electric fires controlled by a pull cord switch?",
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
      name: "isMedicinesEtcLockedAwayOutOfReach",
      label:
        "Are medicines, shampoos, cosmetics and razors locked away out of reach?",
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
      name: "isThermostatOnHotWater",
      label:
        "Is there a thermostat on the hot water control to prevent scalding?",
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
      name: "isDoorOutOfReach",
      label:
        "Is there a lock on the door (is it out of reach of small children)?",
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
      name: "isBedroomLocked",
      label:
        "Bedroom Is there a lock on the door (is it out of reach of small children)?",
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
];
