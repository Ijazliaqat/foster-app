import {  RHFTextField } from "@root/components/hook-form";
import RHFRadioGroupWithLabel from "@root/components/hook-form/RHFRadioGroupWithLabel";
import * as Yup from "yup";
// Styles
const styles = {
  optionsFullWidth: {
    marginBottom: "20px !important", marginLeft: "0px !important", width: "100%", justifyContent: "space-between"
  },
};

export const SelectLaSwData = [
  {
    id: 1,
    componentProps: {
      name: "localAuthorityName",
      label: "Local Authority Name",
      fullWidth: true,
    },
      component: RHFTextField,
    md: 6,
  },
  {
    id: 2,
    componentProps: {
      name: "localAuthorityNumber",
      label: "Local Authority Number",
      fullWidth: true,
      size: "small",
    },
      component: RHFTextField,
    md: 6,
  },

  {
    id: 3,
    gridLength: 6,
    componentProps: {
      name: "localAuthoritySocialWorker",
      label: "Local Authority Social Worker",
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
  
  {
    id: 4,
    gridLength: 6,
    componentProps: {
      name: "localAuthorityDesignatedOfficer",
      label: "Local Authority  Designated Officer",
      fullWidth: true,
    },
    component: RHFTextField,
    md: 6,
  },
  {
    id: 5,
    componentProps: {
      name: "otherLAContact",
      options: ["Other LA Contact"],
      sx: styles.optionsFullWidth,
    },
    gridLength: 12,
    component: RHFRadioGroupWithLabel,
  },
 
];

export const SelectLaSwDataDefaultValues = {
  localAuthorityName: "",
  localAuthorityNumber: "",
  localAuthoritySocialWorker: "",
  localAuthorityDesignatedOfficer: "",
  otherLAContact:'',
 
};

export const SelectLaSwDataValidationSchema = Yup.object().shape({
  localAuthorityName: Yup.string().trim().required("Field is Required"),
  localAuthorityNumber: Yup.string().trim().required("Field is Required"),
  localAuthoritySocialWorker: Yup.string().trim().required("Field is Required"),
  localAuthorityDesignatedOfficer: Yup.string().trim().required("Field is Required"),
  otherLAContact: Yup.string().required("Field is Required"),
});

export { default as SelectLASW } from "./SelectLASW";
