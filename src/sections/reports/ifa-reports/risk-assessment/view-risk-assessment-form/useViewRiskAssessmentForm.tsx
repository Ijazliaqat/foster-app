import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { RiskAssessmentFormDefaultValues } from ".";

export const useRiskAssessmentViewForm = () => {
  const methods: any = useForm({
    defaultValues: RiskAssessmentFormDefaultValues,
  });

  return {
    methods,
  };
};
