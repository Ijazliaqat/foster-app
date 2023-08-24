
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { AssessmentFormValidationSchema, defaultValues } from ".";
import { useTheme } from "@mui/material";


export const useSafeguardingAssessmentForm = () => {
  const theme = useTheme();
  const methods: any = useForm({
    resolver: yupResolver(AssessmentFormValidationSchema),
    defaultValues: defaultValues,
  });

  const { handleSubmit } = methods;
  const onSubmit = (data: any) => {
    console.log(data, "submitted data");
  };
  return {
    methods, handleSubmit, onSubmit , theme
  }



}
