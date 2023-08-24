import { Grid } from "@mui/material";
import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import * as Yup from "yup";

export const SelectSupervisingSocialWorkerData = [
  {
    id: 1,
    componentProps: {
      name: "supervisingSocialWorker",
      label: "Supervising Social Worker",
      fullWidth: true,
      select: true,
    //   sx: { mb: 1 },
    },
    options: [
      { id: "1", value: "johnDoe", label: "John Doe" },
      { id: "2", value: "rutabSohail", label: "Rutab Sohail" },
      { id: "3", value: "taimorAhmed", label: "Taimor Ahmed" },
      { id: "4", value: "ahmed", label: "Ahmed" },
      { id: "5", value: "adil", label: "Adil" },
      { id: "6", value: "shahzeb", label: "Shahzeb" },
      ],
      component: RHFSelect,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "registeredManger",
      label: "Registered Manger",
      fullWidth: true,
      select: true,
      size: "small",
    //   sx: { mb: 1 },
    },
    options: [
      { id: "1", value: "gloriaBell", label: "Gloria Bell" },
      { id: "2", value: "amira", label: "Amira" },
      { id: "3", value: "awais", label: "Awais" },
      { id: "4", value: "babar", label: "Babar" },
      { id: "5", value: "ali", label: "Ali" },
      { id: "6", value: "david", label: "David" },
      ],
      component: RHFSelect,
    md: 6,
  },

  {
    id: 3,
    gridLength: 6,
    componentProps: {
      name: "responsibleIndividual",
      label: "Responsible Individual",
      fullWidth: true,
      select: true,
    //   sx: { mb: 1.5 },
    },
    options: [
      { id: "1", value: "johnDoe", label: "John Doe" },
      { id: "2", value: "rutabSohail", label: "Rutab Sohail" },
      { id: "3", value: "taimorAhmed", label: "Taimor Ahmed" },
      { id: "4", value: "ahmed", label: "Ahmed" },
      { id: "5", value: "adil", label: "Adil" },
      { id: "6", value: "shahzeb", label: "Shahzeb" },
    ],
    component: RHFSelect,
    md: 6,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      fullWidth: true,
    },
    component: Grid,
    md: 6,
  },
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "director",
      label: "Director",
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
  
];


export const SelectSupervisingSocialWorkerDefaultValues = {
  supervisingSocialWorker: "",
  registeredManger: "",
  responsibleIndividual: "",
  director: "",
 
};

export const SelectSupervisingSocialWorkerValidationSchema = Yup.object().shape({
  supervisingSocialWorker: Yup.string().trim().required("Field is Required"),
  registeredManger: Yup.string().trim().required("Field is Required"),
  responsibleIndividual: Yup.string().trim().required("Field is Required"),
  director: Yup.string().trim().required("Field is Required"),
});

export { default as SelectSupervisingSocialWorker } from "./SelectSupervisingSocialWorker";
