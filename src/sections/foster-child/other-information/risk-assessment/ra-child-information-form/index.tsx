import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupBoolean from "@root/components/hook-form/RHFRadioGroupBoolean";
import * as Yup from "yup";

export const RAChildInformationFormFields = [
    {
      id: 1,
      gridLength: 12,
      otherOptions: {
        name: "backgroundOfChild",
        label:
          "Background of the Child (reason for being in care, has the child suffered neglect, emotional, physical or sexual abuse, risk to other children ?)",
        fullWidth: true,
        multiline: true,
        minRows: 2,
      },
      component: RHFTextField,
    },
    {
      id: 2,
      gridLength: 12,
      otherOptions: {
        name: "involvedPersonAndRole",
        label:
          "Who’s involved and what is their role ? (Intervention, agencies, services, direct work)",
        fullWidth: true,
        multiline: true,
        minRows: 2,
      },
      component: RHFTextField,
    },
    {
      id: 3,
      gridLength: 12,
      otherOptions: {
        name: "detailsOfGP",
        label: "Details of GP / Regular health appointments : Speech and Language, Asthma Clinic etc",
        fullWidth: true,
        multiline: true,
        minRows: 2,
      },
      component: RHFTextField,
    },
    {
      id: 4,
      gridLength: 12,
      otherOptions: {
        name: "health",
        label:
          "Health (Health conditions, medication, allergies, mental illness, pshychological disorders, physical or learning difficuties etc)",
        fullWidth: true,
        multiline: true,
        minRows: 2,
      },
      component: RHFTextField,
    },
    {
      id: 5,
      gridLength: 6,
      otherOptions: {
        name: "education",
        label: "Education (details of school, transport, attendance, behaviour)",
        fullWidth: true,
      },
      component: RHFTextField,
    },
    {
      id: 6,
      gridLength: 6,
      otherOptions: {
        name: "telNumber",
        label: "Tel Number",
        fullWidth: true,
        type: "number",
      },
      component: RHFTextField,
    },
    {
      id: 7,
      gridLength: 6,
      otherOptions: {
        name: "teacher",
        label: "Teacher",
        fullWidth: true,
      },
      component: RHFTextField,
    },
    {
      id: 8,
      gridLength: 12,
      otherOptions: {
        name: "fosterHome",
        label:
          "Foster Home (Routine, religious & cultural needs, pocket money, mobile phone, supervision in home, community & with pets)",
        fullWidth: true,
        multiline: true,
        minRows: 2,
      },
      component: RHFTextField,
    },
    {
      id: 9,
      gridLength: 12,
      otherOptions: {
        name: "contact",
        label: "Contact (Contact arrangements with family - direct & indirect)",
        fullWidth: true,
        multiline: true,
        minRows: 2,
      },
      component: RHFTextField,
    },
    {
      id: 10,
      gridLength: 12,
      otherOptions: {
        name: "photoPermission",
        label:
          "Permission must be sort from the Child and Child's Social Worker before a photo is taken (Child should be fully clothed when photographed). Permission include Details of person who has permission for photos to be taken",
        fullWidth: true,
        multiline: true,
        minRows: 2,
      },
      component: RHFTextField,
    },
    {
      id: 11,
      gridLength: 6,
      otherOptions: {
        name: "detailsOfPerson",
        label: "Details of person who has / can give permission for photos to be taken",
        fullWidth: true,
      },
      component: RHFTextField,
    },
  ];
  
  export const childInformationDefaultValues = {
    backgroundOfChild: "Nillll",
    involvedPersonAndRole: "Nil",
    detailsOfGP: "Nil",
    health: "Nil",
    education: "Nil",
    telNumber: null,
    photoPermission: "Nil",
    contact: "Nil",
    fosterHome: "Nil",
    teacher: "Nil",
    detailsOfPerson: "Nil",
    date: null,
    risk: "Nil",
  };
  export const childInformationFormSchema = Yup.object().shape({
    backgroundOfChild: Yup.string().required("Required"),
    involvedPersonAndRole: Yup.string().required("Required"),
    detailsOfGP: Yup.string().required("Required"),
    health: Yup.string().required("Required"),
    education: Yup.string().required("Required"),
    telNumber: Yup.number().required("Required"),
    photoPermission: Yup.string().required("Required"),
    contact: Yup.string().required("Required"),
    fosterHome: Yup.string().required("Required"),
    teacher: Yup.string().required("Required"),
    detailsOfPerson: Yup.string().required("Required"),
    date: Yup.date().required("Required"),
    risk: Yup.string().required("Required"),
  });

  export const formatters: any = {};