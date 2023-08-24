import { RHFSelect, RHFTextField } from "@root/components/hook-form";
import RHFDatePicker from "@root/components/hook-form/RHFDatePicker";
import RHFRadioGroupBoolean from "@root/components/hook-form/RHFRadioGroupBoolean";
import * as Yup from "yup";

export const RAChildRiskDetailsFormFields = [
    {
      id: 1,
      gridLength: 6,
      otherOptions: {
        name: "riskCausingConcern",
        label: "Risk Causing Concern",
        fullWidth: true,
        select: true,
      },
      options: [{ value: "nil", label: "nil" }],
      component: RHFSelect,
    },
    {
      id: 2,
      gridLength: 6,
      otherOptions: {
        name: "categoryOfRisk",
        label: "Category of Risk",
        fullWidth: true,
        select: true,
      },
      options: [{ value: "nil", label: "nil" }],
      component: RHFSelect,
    },
    {
      id: 3,
      gridLength: 12,
      otherOptions: {
        name: "involvedPersonAndRole2",
        label:
          "Who’s involved and what is their role ? (Intervention, agencies, services, direct work)",
        fullWidth: true,
        multiline: true,
        minRows: 2,
      },
      component: RHFTextField,
    },
  ];
  export const childRiskDetailsDefaultValues = {
    involvedPersonAndRole2: "Nilllll",
    categoryOfRisk: null,
    riskCausingConcern: null,
  };
  export const childRiskDetailsSchema = Yup.object().shape({
    involvedPersonAndRole2: Yup.string().required("Required"),
    categoryOfRisk: Yup.string().required("Required"),
    riskCausingConcern: Yup.string().required("Required"),
  });

  export const formatters: any = {};