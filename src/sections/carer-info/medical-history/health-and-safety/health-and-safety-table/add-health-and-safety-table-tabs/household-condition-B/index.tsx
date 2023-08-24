import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");
// const ageOf18Years = dayjs().subtract(18, "year").format("MM/DD/YYYY");
// const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
// const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const defaultValues = {
  isChildsShareRooms: false,
  dateToBeCarriedOut1: new Date(todayDate),

  improvementsReq1: "",

  isChildsEatComfortable: false,
  dateToBeCarriedOut2: new Date(todayDate),

  improvementsReq2: "",

  isAccommodationClean: false,
  dateToBeCarriedOut3: new Date(todayDate),

  improvementsReq3: "",

  isAnyAbviousHazards: false,
  dateToBeCarriedOut4: new Date(todayDate),

  improvementsReq4: "",

  isPetsPoseAPhysicalThread: false,
  dateToBeCarriedOut5: new Date(todayDate),

  improvementsReq5: "",

  isFeedingArrangementsForBets: false,

  dateToBeCarriedOut6: new Date(todayDate),

  improvementsReq6: "",

  isAdutsUnderstandTransmitted: false,
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

export const householdConditionB_Data = [
  {
    id: 0.5,
    variant: "subtitle2",
    heading: `Part 1: General Household Conditions - B`,
  },

  {
    id: 1,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isChildsShareRooms",
      label:
        "If children over eight years old will be sharing a room, will it be with a child of the same sex ?",
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
      name: "isChildsEatComfortable",
      label: "Can child eat in a comfortable and relaxed atmosphere ?",
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
      name: "isAccommodationClean",
      label:
        "Is the accommodation hygienically clean and free from the odour of pets, cigarette smoke, urine and rubbish ?",
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
      name: "isAnyAbviousHazards",
      label: "Are there any obvious hazards ?",
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
      name: "isPetsPoseAPhysicalThread",
      label: "Do pets pose a physical threat to children ?",
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
      name: "isFeedingArrangementsForBets",
      label: "Are sleeping and feeding arrangements for pets hygienic?",
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
      name: "isAdutsUnderstandTransmitted",
      label: "Do adults understand how infections are transmitted ?",
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
