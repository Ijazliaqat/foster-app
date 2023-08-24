import { RHFCheckbox, RHFTextField } from "@root/components/hook-form";
import dayjs from "dayjs";
import * as Yup from "yup";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";

const todayDate = dayjs().format("MM/DD/YYYY");
// const ageOf18Years = dayjs().subtract(18, "year").format("MM/DD/YYYY");
// const MAX_FILE_SIZE = 2 * 1000 * 1000; // 2 Mb
// const FILE_FORMATS = ["image/jpg", "image/jpeg", "image/gif", "image/png"];

export const defaultValues = {
  inspectionDate: new Date(todayDate),
  nestInspectionDate: new Date(todayDate),

  onFile: false,
  isQuestionCompleted: true,

  isAccomodationSuitable:
    true,
  dateToBeCarriedOut: new Date(todayDate),

  improvementsReq: "",

  isSufficentSpaceForChilds: false,
  dateToBeCarriedOut1: new Date(todayDate),

  improvementsReq1: "",

  isRoomsSufficientLight: false,
  dateToBeCarriedOut2: new Date(todayDate),

  improvementsReq2: "",

  isRoomsOpenWindows: false,
  dateToBeCarriedOut3: new Date(todayDate),

  improvementsReq3: "",

  isRoomsMaintainedTemp: false,
  dateToBeCarriedOut4: new Date(todayDate),

  improvementsReq4: "",

  isChildOwnBed: false,

  dateToBeCarriedOut5: new Date(todayDate),

  improvementsReq5: "",
};

export const FormSchema = Yup.object().shape({
  inspectionDate: Yup.date().required("Required"),
  nestInspectionDate: Yup.date().required("Date is required"),

  dateToBeCarriedOut: Yup.date().required("Required"),

  improvementsReq: Yup.string().required("Required"),

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

export const householdConditionA_Data = [
  {
    id: 1,
    componentProps: {
      name: "inspectionDate",
      fullWidth: true,
      label: "Inspection Date",
      multiline: true,
      minRows: 3,
    },
    gridLength: 6,

    component: RHFDatePicker,
  },
  {
    id: 2,
    componentProps: {
      name: "nestInspectionDate",
      label: "Next Inspection Date",
      multiline: true,
      fullWidth: true,
      minRows: 3,
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 3,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "onFile",
      label: "On File",
    },
    component: RHFCheckbox,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isQuestionCompleted",
      label: "Has pet questionnaire completed ?",
    },
    component: RHFCheckbox,
  },
  {
    id: 4.5,
    variant: "subtitle2",
    heading: `Part 1: General Household Conditions - A`,
  },
  {
    id: 5,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isAccomodationSuitable",
      label:
        "Is the accomodation suitable for the number of children/young people living or proposed to live in it ?",
    },
    component: RHFCheckbox,
  },
  {
    id: 6,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 7,
    componentProps: {
      name: "improvementsReq",
      label: "Improvements required",
      multiline: true,
      minRows: 3,
      fullWidth: true,
    },
    gridLength: 12,
    component: RHFTextField,
  },
  {
    id: 8,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
      name: "isSufficentSpaceForChilds",
      label:
        "Is there sufficient space for the children to pursue their homework ?",
    },
    component: RHFCheckbox,
  },
  {
    id: 9,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut1",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },

  {
    id: 10,
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
    id: 11,
    gridLength: 6,
    componentProps: {
      name: "isRoomsSufficientLight",
      label: "Do rooms have sufficient light to read and play by ?",
    },
    component: RHFCheckbox,
  },
  {
    id: 12,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut2",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 13,
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
    id: 14,
    gridLength: 6,
    componentProps: {
      name: "isRoomsOpenWindows",
      label: "Do all rooms have an opening windows?",
    },
    component: RHFCheckbox,
  },
  {
    id: 15,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut3",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 16,
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
    id: 17,
    gridLength: 6,
    componentProps: {
      name: "isRoomsMaintainedTemp",
      label: "Are all rooms maintainable at reasonable temprature ?",
    },
    component: RHFCheckbox,
  },
  {
    id: 18,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut4",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 19,
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
    id: 20,
    gridLength: 6,
    componentProps: {
      name: "isChildOwnBed",
      label: "Will the child/young person his/her own bed/cot ?",
    },
    component: RHFCheckbox,
  },
  {
    id: 21,
    componentProps: {
      fullWidth: true,
      name: "dateToBeCarriedOut5",
      label: "Date to be carried out",
    },
    gridLength: 6,
    component: RHFDatePicker,
  },
  {
    id: 22,
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
