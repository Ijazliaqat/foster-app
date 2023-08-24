import { useTheme } from "@mui/material";
import { useForm } from "react-hook-form";
import { FormSchema, defaultValues } from ".";
import { yupResolver } from "@hookform/resolvers/yup";

export default function useAddNewModal() {
  let theme = useTheme();
  const methods: any = useForm({
    // mode: "onTouched",
    resolver: yupResolver(FormSchema),
    defaultValues: defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting, isDirty },
  } = methods;

  // const onSubmit = (data: any) => {
  //   addHandler(data)
  //   handleClose(false)
  // };

  return {
    theme,
    handleSubmit,
    methods,
    isSubmitting,
    isDirty
  };
}
