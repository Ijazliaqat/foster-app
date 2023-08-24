import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";

export const useAssignedFormDialogbox = (component: any) => {
  const theme = useTheme();

  const methods: any = useForm({
    resolver: yupResolver(FormSchema),
    defaultValues,
  });
  const { handleSubmit } = methods;
  // console.log(component);

  const onSubmit = (data: any) => {
      console.log(data, component,"submitted data");
    // reset();
  };
  return { onSubmit, handleSubmit, methods, theme };
};
